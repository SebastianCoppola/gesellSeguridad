//Mui:
import { Grid, Typography } from "@mui/material"
//Utils:
import { colors } from "../../utils/const"
//Components:
import ResponsiveVideo from "../../components/VideoPlayer/ResponsiveVideo"
import ResponsiveImg from "../../components/ResponsiveImg/ResponsiveImg"
import SliderCaracteristicas from "./SliderCaracteristicas"
import PaquetePersonalizado from "../../components/PaquetePersonalizado/PaquetePersonalizado"
//Assets:
import cell_1 from "../../assets/ajax/01_cell.mp4"
import desk_1 from "../../assets/ajax/01_desk.jpg"
import desk_2 from "../../assets/ajax/02_desk.mp4"
import cell_2 from "../../assets/ajax/02_cell.mp4"
import desk_3 from "../../assets/ajax/03_desk.mp4"
import cell_3 from "../../assets/ajax/03_cell.mp4"
import desk_4 from "../../assets/ajax/04_desk.mp4"
import cell_4 from "../../assets/ajax/04_cell.mp4"
import cell_5 from "../../assets/ajax/05_cell.jpg"
import desk_5 from "../../assets/ajax/05_desk.mp4"
import desk_6 from "../../assets/ajax/06_desk.jpg"
import desk_7 from "../../assets/ajax/07_desk.jpg"
//Data:
import { dataPaquetes } from "../../components/PaquetePersonalizado/dataPaquetes"
import { seccionesNoMapeables } from "../../utils/routes"

const Ajax = () => {

    return (
        <Grid container justifyContent='center' alignItems='flex-start' sx={{background: colors.black}}>
            <Grid item xs={12}>
                <Grid container sx={{display:{xs:'block', md:'none'}}}>
                    <ResponsiveVideo 
                        vidCell={cell_1}
                        onClick={()=>{}}
                        autoplay={true}
                        hideControl={true}
                        loop={true}
                    />
                </Grid>
                <Grid container sx={{display:{xs:'none', md:'block'}}}>
                    <ResponsiveImg 
                        imgDesk={desk_1}
                        alt='img'
                        onClick={()=>{}}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <ResponsiveVideo 
                    vidCell={cell_2}
                    vidDesk={desk_2}
                    onClick={()=>{}}
                    autoplay={true}
                    hideControl={true}
                    loop={true}
                />
            </Grid>
            <Grid item xs={9} container justifyContent='center'>
                <Typography sx={{fontSize:{xs:'10pt',md:'24pt'}, textAlign:'center', color: colors.white, fontWeight: 700, padding:'30px 0'}}>
                    Una amplia gama de dispositivos Ajax inteligentes para interiores 
                    y exteriores funcionan como una fuerza unida para garantizar la 
                    protección contra las posibles intrusiones y ofrecer la mejor 
                    experiencia de usuario posible.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <ResponsiveVideo 
                    vidCell={cell_3}
                    vidDesk={desk_3}
                    onClick={()=>{}}
                    // autoplay={true}
                    // hideControl={true}
                    // loop={true}
                />
            </Grid>
            <Grid item xs={12}>
                <ResponsiveVideo 
                    vidCell={cell_4}
                    vidDesk={desk_4}
                    onClick={()=>{}}
                    autoplay={true}
                    hideControl={true}
                    loop={true}
                />
            </Grid>
            <Grid item xs={12} md={0} sx={{display: {xs: 'block', md: 'none'}, paddingBottom:'15px'}}>
                <SliderCaracteristicas />
            </Grid>
            <Grid item xs={12} md={0}>
                <section id={seccionesNoMapeables.AJAX_VECINAL.section}/>
                <PaquetePersonalizado 
                    title='Seguridad al alcance de todos'
                    text1='¿No encontrás el paquete que necesitas? '
                    text2='Ayudanos a diseñar uno personalizado para vos'
                    labelButton='COMENZAR'
                    paquetes={[
                        dataPaquetes.AJAX_INDIVIDUAL,
                        dataPaquetes.AJAX_VECINAL,
                        dataPaquetes.AJAX_VECINAL_XL,
                    ]}                            
                />
            </Grid>
            <Grid item xs={12} md={0} sx={{display: {xs: 'block', md: 'none'} }}>
                <ResponsiveImg
                    imgCell={cell_5}
                    alt='img'
                    onClick={()=>{}}
                />
            </Grid>
            <Grid item xs={0} md={12} sx={{display: {xs: 'none', md: 'block'} }}>
                <ResponsiveVideo 
                    vidDesk={desk_5}
                    onClick={()=>{}}
                />
            </Grid>
            <Grid item xs={0} md={12} sx={{display: {xs: 'none', md: 'block'} }}>
                <ResponsiveImg
                    imgCell={desk_6}
                    imgDesk={desk_6}
                    alt='img'
                    onClick={()=>{}}
                />
            </Grid>
            <Grid item xs={0} md={12} sx={{display: {xs: 'none', md: 'block'} }}>
                <ResponsiveImg
                    imgCell={desk_7}
                    imgDesk={desk_7}
                    alt='img'
                    onClick={()=>{}}
                />
            </Grid>
        </Grid>
    )
}

export default Ajax