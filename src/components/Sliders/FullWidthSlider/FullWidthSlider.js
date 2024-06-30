import React, { useEffect, useState } from 'react'
//Mui:
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'


const Slider = ({ data, autoplay, interval }) => {

    const [prevSlide, setPrevSlide] = useState(null)
    const [currentSlide, setCurrentSlide] = useState(data[0])
    const [nextSlide, setNextSlide] = useState(null)
    const [currentId, setCurrentId] = useState(data[0].id)

    //Swipeable Config:
    let startX = 0
    let endX = 0
    let handleTouchStart = e => {
        startX = e.changedTouches[0].screenX
    }
    let handleTouchEnd = e => {
        endX = e.changedTouches[0].screenX
        if (startX !== endX ) {
            if (startX > endX) handleNext()
            else handlePrev()
        }
    }

    useEffect(()=>{
        if(nextSlide) {
            setTimeout(()=>{
                setCurrentSlide(nextSlide)
                setNextSlide(null)
                setPrevSlide(null)
            }, 600)
        }
    },[nextSlide])

    useEffect(()=>{
        if(prevSlide) {
            setTimeout(()=>{
                setCurrentSlide(prevSlide)
                setNextSlide(null)
                setPrevSlide(null)
            }, 600)
        }
    },[prevSlide])

    const handleNext = () => {
        let currentIndex = data.findIndex(it => it.id === currentSlide.id)
        let nextCurrent = currentIndex + 1 === data.length ? data[0] : data[currentIndex + 1]
        setNextSlide(nextCurrent)
        setCurrentId(nextCurrent.id)
    }

    const handlePrev = () => {
        let currentIndex = data.findIndex(it => it.id === currentSlide.id)
        let nextCurrent = currentIndex === 0 ? data[data.length - 1] : data[currentIndex - 1]
        setPrevSlide(nextCurrent)
        setCurrentId(nextCurrent.id)
    }

    useEffect(() => {
        if (autoplay && interval) {
            const intervalId = setInterval(handleNext, interval)
            return () => clearInterval(intervalId)
        }
    }, [autoplay, interval, currentSlide])

    return (
        <div 
            onTouchStart={handleTouchStart} 
            onTouchEnd={handleTouchEnd}
            style={{
                minWidth: '100%', width: '100%', maxWidth: '100%',
                minHeight: '100%', height: '100%', maxHeight: '100%',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: prevSlide && 'flex-end'
            }}
        >
            {/* SLIDES */}
            {prevSlide && (
                <div style={{
                    width: '100%',
                    minWidth: '100%',
                    maxWidth: '100%',
                    height: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}>
                    {prevSlide.element}
                </div>
            )}
            <div style={{
                width: '100%',
                minWidth: '100%',
                maxWidth: '100%',
                height: '100%',
                minHeight: '100%',
                maxHeight: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                ...(nextSlide ? {
                    marginLeft: '-100%',
                    transition: 'margin 0.5s',
                    minHeight: '100%',
                } : prevSlide ? {
                    marginRight: '-100%',
                    transition: 'margin 0.5s',
                    minHeight: '100%',
                } : {
                    marginRight: '0px',
                    marginLeft: '0px',
                })
            }}>
                {currentSlide.element}
            </div>
            {nextSlide && (
                <div style={{
                    width: '100%',
                    minWidth: '100%',
                    maxWidth: '100%',
                    height: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}>
                    {nextSlide.element}
                </div>
            )}

            {/* BUTTONS */}
            <div onClick={handlePrev} style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                color: 'white',
                cursor: 'pointer',
            }}><ArrowBackIos /></div>
            <div onClick={handleNext} style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                color: 'white',
                cursor: 'pointer',
            }}><ArrowForwardIos /></div>

            {/* INDEX */}
            <div style={{
                maxWidth:'100px',
                position: 'absolute',
                bottom: '20px',
                right: '0',
                left:'0',
                margin:'auto',
                display:'flex',
                gap:'10px'
            }}>
                {data.map(it=>(
                    <div
                        key={it.id}
                        style={{
                            width:'10px',
                            height:'10px',
                            borderRadius: '50%',
                            minHeight:'10px',
                            minWidth:'10px',
                            background: currentId === it.id ? 'orange' : 'white',
                    }}></div>
                ))}
            </div>
        </div>
    )
}

const FullWidthSlider = ({ data, autoplay, interval }) => {

    const dataSlider = data.map( ( it, index ) => { return { id: index + 1, element: it } } )

    return dataSlider && (
        <Slider
            data={dataSlider}
            autoplay={autoplay}
            interval={interval}
        />
    )
}

export default FullWidthSlider