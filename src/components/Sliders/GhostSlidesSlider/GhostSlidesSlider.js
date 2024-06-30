import React, { useEffect, useState } from 'react'
//Mui:
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

const Slider = ({ data, autoplay, interval }) => {   

    const [prevSlide, setPrevSlide] = useState(null)
    const [currentNegative, setCurrentNegative] = useState(data[data.length - 1])
    const [currentSlide, setCurrentSlide] = useState(data[0])
    const [currentPositive, setCurrentPositive] = useState(data[1])
    const [nextSlide, setNextSlide] = useState(null)
    const [currentId, setCurrentId] = useState(data[0].id)

    let opacity = '0.5'
    let transition = '0.5s'
    let timeout = 500

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
                let oldCurrent = currentSlide
                let oldPositive = currentPositive 
                let oldNext = nextSlide
                setCurrentNegative(oldCurrent)
                setCurrentSlide(oldPositive)
                setCurrentPositive(oldNext)
                setNextSlide(null)
                setPrevSlide(null)
            }, timeout)
        }
    },[nextSlide])

    useEffect(()=>{
        if(prevSlide) {
            setTimeout(()=>{
                let oldPrev = prevSlide
                let oldNegative = currentNegative 
                let oldCurrent = currentSlide
                setCurrentNegative(oldPrev)
                setCurrentSlide(oldNegative)
                setCurrentPositive(oldCurrent)
                setNextSlide(null)
                setPrevSlide(null)
            }, timeout)
        }
    },[prevSlide])

    const handleNext = () => {
        let currentPositiveIndex = data.findIndex(it => it.id === currentPositive.id)
        let nextCurrentPositive = currentPositiveIndex + 1 === data.length ? data[0] : data[currentPositiveIndex + 1]
        setNextSlide(nextCurrentPositive)
        setCurrentId(currentPositive.id)
    }

    const handlePrev = () => {
        let currentNegativeId = data.findIndex(it => it.id === currentNegative.id)
        let nextCurrentNegative = currentNegativeId === 0 ? data[data.length - 1] : data[currentNegativeId - 1]
        setPrevSlide(nextCurrentNegative)
        setCurrentId(currentNegative.id)
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
                width: '100%', minWidth: '100%', maxWidth: '100%',
                height: '100%', minHeight: '100%', maxHeight: '100%',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: prevSlide && 'flex-end',
            }}
        >
            {/* SLIDES */}
            {prevSlide && (
                <div style={{
                    width: '80%', minWidth: '80%', maxWidth: '80%',
                    height: '100%', minHeight: '100%', maxHeight: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    opacity: opacity
                }}>
                    {prevSlide.element}
                </div>
            )}
            <div style={{
                width: '80%', minWidth: '80%', maxWidth: '80%',
                height: '100%', minHeight: '100%', maxHeight: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                opacity: opacity,
                marginLeft: !prevSlide && '-70%',
                ...(nextSlide ? {
                    marginLeft: '-150%',
                    transition: `margin ${transition}`,
                } : prevSlide ? {
                    opacity: '1',
                    transition: `opacity ${transition} `,
                } : {})
            }}>
                {currentNegative.element}
            </div>
            <div style={{
                width: '80%', minWidth: '80%', maxWidth: '80%',
                height: '100%', minHeight: '100%', maxHeight: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                ...((nextSlide || prevSlide) ? {
                    opacity: opacity,
                    transition: `opacity ${transition}`,
                } : {})
            }}>
                {currentSlide.element}
            </div>
            <div style={{
                width: '80%', minWidth: '80%', maxWidth: '80%',
                height: '100%', minHeight: '100%', maxHeight: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                opacity: opacity,
                marginRight: !nextSlide && '-70%',
                ...(prevSlide ? {
                    marginRight: '-150%',
                    transition: `margin ${transition}`,
                } : nextSlide ? {
                    opacity: '1',
                    transition: `opacity ${transition}`,
                } : {})
            }}>
                {currentPositive.element}
            </div>
            {nextSlide && (
                <div style={{
                    width: '80%', minWidth: '80%', maxWidth: '80%',
                    height: '100%', minHeight: '100%', maxHeight: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    opacity: opacity
                }}>
                    {nextSlide.element}
                </div>
            )}
            {/* {prevSlide && (
                <img
                    src={prevSlide.img}
                    alt='slide'
                    style={{
                        width: '80%', minWidth: '80%', maxWidth: '80%',
                        height: '100%', minHeight: '100%', maxHeight: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        opacity: opacity
                    }}
                />
            )}
            <img
                src={currentNegative.img}
                alt='slide'
                style={{
                    width: '80%', minWidth: '80%', maxWidth: '80%',
                    height: '100%', minHeight: '100%', maxHeight: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    opacity: opacity,
                    marginLeft: !prevSlide && '-70%',
                    ...(nextSlide ? {
                        marginLeft: '-150%',
                        transition: `margin ${transition}`,
                    } : prevSlide ? {
                        opacity: '1',
                        transition: `opacity ${transition} `,
                    } : {})
                }}
            />
            <img
                src={currentSlide.img}
                onClick={currentSlide.action}
                alt='slide'
                style={{
                    width: '80%', minWidth: '80%', maxWidth: '80%',
                    height: '100%', minHeight: '100%', maxHeight: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    cursor: 'pointer',
                    ...((nextSlide || prevSlide) ? {
                        opacity: opacity,
                        transition: `opacity ${transition}`,
                    } : {})
                }}
            />
            <img
                src={currentPositive.img}
                alt='slide'
                style={{
                    width: '80%', minWidth: '80%', maxWidth: '80%',
                    height: '100%', minHeight: '100%', maxHeight: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    opacity: opacity,
                    marginRight: !nextSlide && '-70%',
                    ...(prevSlide ? {
                        marginRight: '-150%',
                        transition: `margin ${transition}`,
                    } : nextSlide ? {
                        opacity: '1',
                        transition: `opacity ${transition}`,
                    } : {})
                }}
            />
            {nextSlide && (
                <img
                    src={nextSlide.img}
                    alt='slide'
                    style={{
                        width: '80%', minWidth: '80%', maxWidth: '80%',
                        height: '100%', minHeight: '100%', maxHeight: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        cursor: 'pointer',
                        opacity: opacity
                    }}
                />
            )} */}

            {/* CONTROLS */}
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

const GhostSlidesSlider = ({ data, autoplay, interval }) => {

    const dataSlider = data.map( ( it, index ) => { return { id: index + 1, element: it } } )

    return dataSlider && (
        <Slider
            data={dataSlider}
            autoplay={autoplay}
            interval={interval}
        />
    )
}

export default GhostSlidesSlider