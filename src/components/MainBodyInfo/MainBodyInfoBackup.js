import { Grid, Typography } from "@mui/material"
import { useEffect } from "react"
import { colors } from "../../utils/const"
import VideoPlayer from "../VideoPlayer/VideoPlayer"

const MainBodyInfo = ({ data }) => {


    return (
        <Grid container justifyContent='center'>

            {/* CELULAR */}
            <Grid xs={11} md={0} sx={{display:{xs:'block', md:'none'}}}>

            </Grid>

            {/* DESKTOP */}
            <Grid xs={0} md={10} container sx={{display:{xs:'none', md:'block'}}}>
                {data.map((it, index)=>{
                    let halfImg = (
                        <Grid container sx={{maxHeight:'80vh', borderRadius:'30px', overflow:'hidden', padding:'20px 20px'}}>
                            {it.img ? 
                                <img 
                                    src={it.img} 
                                    alt='imagen' 
                                    style={{height:'100%', width:'100%', objectFit:'cover', objectPosition:'center'}}
                                />
                            : 
                                <Grid sx={{height:'80vh', width:'65%', margin:'auto'}}>
                                    <VideoPlayer src={it.vid} />
                                </Grid>
                            }
                        </Grid>
                    )
                    let halfText = (
                        <Grid container gap={2} sx={{padding:'70px 50px'}}>
                            <Grid container justifyContent='center'>
                                <Typography sx={{color: colors.orange, textAlign:'center'}}>
                                    {it.title}
                                </Typography>
                            </Grid>
                            <Grid container justifyContent='center'>
                                <Typography sx={{color: colors.black, fontSize:'25px', textAlign:'center'}}>
                                    {it.subtitle}
                                </Typography>
                            </Grid>
                            <Grid container justifyContent='center'>
                                <Typography sx={{color: colors.grey, textAlign:'center'}}>
                                    {it.text}
                                </Typography>
                            </Grid>
                        </Grid>
                    )
                    return ( index % 2 === 0 ?
                        <Grid key={index} item container>
                            <Grid item xs={6}>{halfImg}</Grid>
                            <Grid item xs={6}>{halfText}</Grid>
                        </Grid>
                    : 
                        <Grid key={index} item container>
                            <Grid item xs={6}>{halfText}</Grid>
                            <Grid item xs={6}>{halfImg}</Grid>
                        </Grid>
                    )
                })}
            </Grid>

        </Grid>
    )
}

export default MainBodyInfo