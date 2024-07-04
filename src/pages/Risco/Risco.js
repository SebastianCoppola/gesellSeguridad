//Mui:
import { Grid, Typography } from "@mui/material"
//Utils:
import { colors } from "../../utils/const"
import { seccionesNoMapeables } from "../../utils/routes"
//Components:
import ResponsiveVideo from "../../components/VideoPlayer/ResponsiveVideo"
import ResponsiveImg from "../../components/ResponsiveImg/ResponsiveImg"
import CustomButon from "../../components/CustomButton/CustomButton"
import PaquetePersonalizado from "../../components/PaquetePersonalizado/PaquetePersonalizado"
//Data:
import { dataPaquetes } from "../../components/PaquetePersonalizado/dataPaquetes"
//Assets:
import desk_1 from "../../assets/risco/01_desk.mp4"
import cell_1 from "../../assets/risco/01_cell.mp4"
import desk_2 from "../../assets/risco/02_desk.jpg"
import cell_2 from "../../assets/risco/02_cell.jpg"
import desk_3 from "../../assets/risco/03_desk.jpg"
import cell_3 from "../../assets/risco/03_cell.jpg"
import desk_4 from "../../assets/risco/04_desk.jpg"
import cell_4 from "../../assets/risco/04_cell.jpg"
import desk_5 from "../../assets/risco/05_desk.jpg"
import cell_5 from "../../assets/risco/05_cell.jpg"
import desk_6 from "../../assets/risco/06_desk.mp4"
import cell_6 from "../../assets/risco/06_cell.mp4"
import cell_7 from "../../assets/risco/07_cell.jpg"
import desk_7 from "../../assets/risco/07_desk.jpg"
import cell_8 from "../../assets/risco/08_cell.mp4"
import desk_8 from "../../assets/risco/08_desk.jpg"

const Risco = () => {

    return (
        <Grid container justifyContent='center' alignItems='flex-start' sx={{background: colors.black}}>
            <Grid item xs={12}>
                <ResponsiveVideo 
                    vidCell={cell_1}
                    vidDesk={desk_1}
                    onClick={()=>{}}
                    autoplay={true}
                    hideControl={true}
                    loop={true}
                />
            </Grid>
            <Grid item xs={12}>
                <ResponsiveImg
                    imgCell={cell_2}
                    imgDesk={desk_2}
                    alt='img'
                    onClick={()=>{}}
                />
            </Grid>
            <Grid item xs={12}>
                <ResponsiveImg
                    imgCell={cell_3}
                    imgDesk={desk_3}
                    alt='img'
                    onClick={()=>{}}
                />
            </Grid>
            <Grid item xs={12} sx={{background: colors.white}}>
                <Grid container justifyContent='flex-end' sx={{
                    display:{xs:'none', md:'flex'}, 
                    backgroundImage: `url(${desk_4})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat', 
                    backgroundPosition: 'center', 
                    height: '750px',
                    width: 'auto'
                }}>
                    <Grid item xs={6} container alignItems='center' sx={{paddingRight:'50px'}}>
                        <Grid item xs={12} container justifyContent='flex-end' gap={6}>
                            <Typography sx={{textAlign:'right', fontSize:'24pt'}}>
                                Nuestros detectores incorporan tecnologías únicas que evitan que los intrusos dañen o desactiven tu sistema de alarma.
                            </Typography>
                            <CustomButon 
                                label='MÁS INFORMACIÓN'
                                fontSize='16pt'
                                onClick={()=>{}}
                                variant='contained'
                                style={null}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent='center' sx={{display:{xs:'flex', md:'none'}, marginBottom:'20px'}}>
                    <ResponsiveImg
                        imgCell={cell_4}
                        alt='img'
                        onClick={()=>{}}
                    />
                    <CustomButon 
                        label='MÁS INFORMACIÓN'
                        fontSize='10pt'
                        onClick={()=>{}}
                        variant='contained'
                        style={{marginTop:'20px'}}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <ResponsiveImg
                    imgCell={cell_5}
                    imgDesk={desk_5}
                    alt='img'
                    onClick={()=>{}}
                />
            </Grid>
            <Grid item xs={12}>
                <ResponsiveVideo 
                    vidCell={cell_6}
                    vidDesk={desk_6}
                    onClick={()=>{}}
                    autoplay={true}
                    hideControl={true}
                    loop={true}
                />
            </Grid>
            <Grid item xs={12}>
                <ResponsiveImg
                    imgCell={cell_7}
                    imgDesk={desk_7}
                    alt='img'
                    onClick={()=>{}}
                />
            </Grid>
            <Grid item xs={12}>
                <Grid container sx={{display:{xs:'block', md:'none'}}}>
                    <ResponsiveVideo 
                        vidCell={cell_8}
                        vidDesk={cell_8}
                        onClick={()=>{}}
                        autoplay={true}
                        hideControl={true}
                        loop={true}
                    />
                </Grid>
                <Grid container sx={{display:{xs:'none', md:'block'}}}>
                    <ResponsiveImg 
                        imgCell={desk_8}
                        imgDesk={desk_8}
                        alt='img'
                        onClick={()=>{}}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <section id={seccionesNoMapeables.RISCO_VECINAL.section}/>
                <PaquetePersonalizado 
                    title='Nuestros Planes'                       
                    text1='¿No encontrás el paquete que necesitas? '
                    text2='Ayudanos a diseñar uno personalizado para vos'
                    labelButton='COMENZAR'
                    paquetes={[
                        dataPaquetes.RISCO_INDIVIDUAL,
                        dataPaquetes.RISCO_VECINAL,
                        dataPaquetes.RISCO_VECINAL_XL,
                    ]} 
                />
            </Grid>
        </Grid>
    )
}

export default Risco