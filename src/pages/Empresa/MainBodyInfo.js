//Mui:
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material"
//Utils:
import { colors } from "../../utils/const"
import { seccionesNoMapeables } from "../../utils/routes"
//Observer:
import { useInView } from "react-intersection-observer"
//Components:
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"

const DesktopCard = ({ data, index }) => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const halfImg = (
        <Grid container sx={{maxHeight:'80vh', width:'100%', overflow:'hidden', padding:'20px 20px'}}>
            {data.img ? 
                <img 
                    src={data.img} 
                    alt='imagen' 
                    style={{height:'100%', width:'100%', objectFit:'cover', objectPosition:'center', borderRadius:'30px'}}
                />
            : 
                <Grid sx={{minHeight:'100%', width:'70%', margin:'auto'}}>
                    <VideoPlayer src={data.vid} videoStyle={{borderRadius:'30px'}}/>
                </Grid>
            }
        </Grid>
    )

    const halfText = (
        <Grid container gap={2} sx={{padding:'70px 50px'}}>
            <Grid container justifyContent='center'>
                <Typography sx={{color: colors.orange, textAlign:'center'}}>
                    {data.title}
                </Typography>
            </Grid>
            <Grid container justifyContent='center'>
                <Typography sx={{color: colors.black, fontSize:'25px', textAlign:'center'}}>
                    {data.subtitle}
                </Typography>
            </Grid>
            <Grid container justifyContent='center' sx={{
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transition: 'transform 3s ease-in-out',
            }}>
                <Typography sx={{color: colors.grey, textAlign:'center'}}>
                    {data.text}
                </Typography>
            </Grid>
        </Grid>
    )

    return ( 
        <Grid ref={ref} key={index} item container sx={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.5s ease-out',
        }}>
            {index % 2 === 0 ? (
                <>
                    <Grid item xs={6}>{halfImg}</Grid>
                    <Grid item xs={6}>{halfText}</Grid>
                </>
            ):(
                <>
                    <Grid item xs={6}>{halfText}</Grid>
                    <Grid item xs={6}>{halfImg}</Grid>
                </>
            )}
        </Grid>
    )
}

const CellphoneCard = ({ data, index }) => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const halfImg = (
        <Grid container sx={{maxHeight:'80vh', borderRadius:'30px', overflow:'hidden', padding:'10px 10px'}}>
            {data.img ? 
                <img 
                    src={data.img} 
                    alt='imagen' 
                    style={{height:'100%', width:'100%', objectFit:'cover', objectPosition:'center'}}
                />
            : 
                <Grid sx={{height:'100%', width:'100%', margin:'auto'}}>
                    <VideoPlayer src={data.vid} videoStyle={{borderRadius:'30px'}} />
                </Grid>
            }
        </Grid>
    )

    const halfText = (
        <Grid container gap={2} sx={{padding:'10px 20px'}}>
            <Grid container justifyContent='center'>
                <Typography sx={{color: colors.orange, textAlign:'center'}}>
                    {data.title}
                </Typography>
            </Grid>
            <Grid container justifyContent='center'>
                <Typography sx={{color: colors.black, fontSize:'25px', textAlign:'center'}}>
                    {data.subtitle}
                </Typography>
            </Grid>
            <Grid container justifyContent='center' sx={{
                transform: inView ? 'translateY(0)' : 'translateY(30px)',
                transition: 'transform 3s ease-in-out',
            }}>
                <Typography sx={{color: colors.grey, textAlign:'center'}}>
                    {data.text}
                </Typography>
            </Grid>
        </Grid>
    )

    return ( 
        <Grid ref={ref} key={index} item container sx={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.5s ease-out',
        }}>
            <Grid item xs={12}>{halfImg}</Grid>
            <Grid item xs={12}>{halfText}</Grid>
        </Grid>
    )
}

const MainBodyInfo = ({ data }) => {

    const theme = useTheme()
    const isXs = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Grid container justifyContent='center'>

            {/* CELULAR */}
            <Grid item xs={11} md={0} sx={{display:{xs:'block', md:'none'}}}>
                {isXs && <section id={seccionesNoMapeables.POR_QUE_LO_HACEMOS.section}/>}
                <CellphoneCard data={data[0]} index={0}/>
                <CellphoneCard data={data[1]} index={1}/>
                <CellphoneCard data={data[2]} index={2}/>
                {isXs && <section id={seccionesNoMapeables.NUESTRA_HISTORIA.section}/>}
                <CellphoneCard data={data[3]} index={3}/>
            </Grid>

            {/* DESKTOP */}
            <Grid item xs={0} md={10} container sx={{display:{xs:'none', md:'block'}}}>
                {!isXs && <section id={seccionesNoMapeables.POR_QUE_LO_HACEMOS.section}/>}
                <DesktopCard data={data[0]} index={0}/>
                <DesktopCard data={data[1]} index={1}/>
                <DesktopCard data={data[2]} index={2}/>
                {!isXs && <section id={seccionesNoMapeables.NUESTRA_HISTORIA.section}/>}
                <DesktopCard data={data[3]} index={3}/>
            </Grid>

        </Grid>
    )
}

export default MainBodyInfo