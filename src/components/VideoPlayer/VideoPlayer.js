import React, { useEffect, useRef, useState } from 'react'
//Mui:
import { IconButton } from '@mui/material'
import { Pause, PlayArrow } from '@mui/icons-material/'

const VideoPlayer = ({ src, autoplay, videoStyle, hideControl, loop }) => {
    
    const videoRef = useRef(null)

    const [isPlaying, setIsPlaying] = useState(false)

    const togglePlay = () => {
        if (isPlaying) videoRef.current.pause()
        else videoRef.current.play()
        setIsPlaying(!isPlaying)
    }

    useEffect(()=>{
        if(autoplay && src) togglePlay()
    },[])

    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: 'none !important',
            backgroundColor: 'transparent !important',
        }}>
            <video 
                ref={videoRef} 
                style={{
                    width:'100%', 
                    height:'100%', 
                    objectFit:'cover', 
                    objectPosition:'center', 
                    position: 'relative',
                    left: '1px',
                    ...videoStyle
                }} 
                onClick={togglePlay}
                loop={loop}
                muted={autoplay ? 'muted' : null }
            >
                <source src={src} type="video/mp4" />
            </video>
            { !hideControl && 
                <IconButton 
                    onClick={togglePlay}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        fontSize: '1em',
                        padding: '0.5em 1em',
                        cursor: 'pointer',
                    }} 
                >
                    {isPlaying ? <Pause /> : <PlayArrow />}
                </IconButton>
            }
        </div>
    )
}

export default VideoPlayer