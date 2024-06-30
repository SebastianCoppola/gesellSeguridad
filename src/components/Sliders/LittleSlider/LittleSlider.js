import React, { useEffect, useRef, useState } from 'react'
//Mui:
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'

const Slider = ({ data, slideWidth, autoplay, interval }) => {   

    const [prevSlide, setPrevSlide] = useState(null)
    const [currentNegative, setCurrentNegative] = useState(data[data.length - 1])
    const [currentSlide, setCurrentSlide] = useState(data[0])
    const [currentPositive, setCurrentPositive] = useState(data[1])
    const [nextSlide, setNextSlide] = useState(null)
    const [currentId, setCurrentId] = useState(data[0].id)

    const hiddenSlideRef = useRef(null)

    let elementWidth = slideWidth
    let boxWidth = slideWidth * 3
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
            if(hiddenSlideRef.current){
                hiddenSlideRef.current.style.transform = 'scale(10%)'
                setTimeout(()=>{
                    hiddenSlideRef.current.style.transform = 'scale(80%)'
                    hiddenSlideRef.current.style.transition = `transform ${transition}`
                },100)
            }
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
            if (hiddenSlideRef.current) {
                hiddenSlideRef.current.style.transform = 'scale(10%)'
                hiddenSlideRef.current.style.marginLeft = `-${elementWidth}px`
                setTimeout(() => {
                    hiddenSlideRef.current.style.transform = 'scale(80%)'
                    hiddenSlideRef.current.style.marginLeft = '0px'
                    hiddenSlideRef.current.style.transition = `transform ${transition}, margin-left ${transition}`
                }, 100)
            }
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
        <div style={{
            width: '100%', minWidth: '100%', maxWidth: '100%',
            height: '100%', minHeight: '100%', maxHeight: '100%',
        }}>
            {/* Cards */}
            <div 
                onTouchStart={handleTouchStart} 
                onTouchEnd={handleTouchEnd}
                style={{
                    width: '100%', minWidth: '100%', maxWidth: '100%',
                    display:'flex', justifyContent:'center',
                    overflow: 'hidden',
                }}
            >
                <div style={{
                    minWidth:`${boxWidth}px`, widht:`${boxWidth}px`, maxWidth:`${boxWidth}px`,
                    padding:'20px 0',
                    overflow: 'hidden',
                    display: 'flex',
                }}>
                    {prevSlide && (
                        <div ref={hiddenSlideRef}>
                            {prevSlide.element}
                        </div>
                    )}
                    <div style={{
                        transform: 'scale(80%)',
                        ...(nextSlide ? {
                            transform: 'scale(10%)',
                            marginLeft: `-${elementWidth}px`,
                            transition: `margin ${transition}, transform ${transition}`,
                        } : prevSlide ? {
                            transform: 'scale(100%)',
                            transition: `transform ${transition}`,
                        } : {})
                    }}>
                        {currentNegative.element}
                    </div>
                    <div style={{
                        ...((prevSlide || nextSlide) && {
                            transform: 'scale(80%)',
                            transition: `transform ${transition}`,
                        })
                    }}>
                        {currentSlide.element}
                    </div>
                    <div style={{
                        transform: 'scale(80%)',
                        ...((nextSlide || prevSlide) && {
                            transform: (nextSlide && 'scale(100%)') || (prevSlide && 'scale(100%'),
                            transition: `transform ${transition}`
                        })
                    }}>
                        {currentPositive.element}
                    </div>
                    {nextSlide && (
                        <div ref={hiddenSlideRef}>
                            {nextSlide.element}
                        </div>
                    )}
                </div>
            </div>
            
            {/* Index */}
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', gap: '10px', marginTop:'15px'}}>
                {data.map(it=>(
                    <div
                        key={it.id} 
                        style={{
                            width:'10px',
                            height:'10px',
                            borderRadius: '50%',
                            minHeight:'10px',
                            minWidth:'10px',
                            background: currentId === it.id ? 'orange' : '#545454',
                    }}></div>
                ))}
            </div>

            {/* Controls */}
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', gap: '20px', marginTop:'15px'}}>
                <div onClick={handlePrev} style={{color: '#545454', cursor: 'pointer'}}><ArrowBackIos /></div>
                <div onClick={handleNext} style={{color: '#545454', cursor: 'pointer'}}><ArrowForwardIos /></div>
            </div>
        </div>
    )
}

const LittleSlider = ({ data, autoplay, interval }) => {

    const ghostElement = useRef(null)

    const [slideWidth, setSliderWidth] = useState(null)
    const [dataSlider, setDataSlider] = useState(null)

    useEffect(()=>{
        if(ghostElement.current) setSliderWidth(ghostElement.current.offsetWidth)
    },[ghostElement])
    
    useEffect(()=>{
        if(slideWidth) setDataSlider(
            data.map( ( it, index ) => { return { id: index + 1, element: it } } )
        )
    },[slideWidth])

    return (
        dataSlider ? (
            <Slider 
                data={dataSlider}
                slideWidth={slideWidth}
                autoplay={autoplay}
                interval={interval}
            />  
        ) : data ? (
            <div style={{   }}>
                <div ref={ghostElement}>
                    {data[0]}
                </div>
            </div>
        ) : null
    )
}

export default LittleSlider