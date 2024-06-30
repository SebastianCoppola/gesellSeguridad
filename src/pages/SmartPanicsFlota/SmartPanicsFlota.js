//Mui:
import { Grid, Typography } from "@mui/material"
//Utils:
import { colors } from "../../utils/const"
//Components:
import ResponsiveVideo from "../../components/VideoPlayer/ResponsiveVideo"
import ResponsiveImg from "../../components/ResponsiveImg/ResponsiveImg"
import CustomButon from "../../components/CustomButton/CustomButton"
import PaquetePersonalizado from "../../components/PaquetePersonalizado/PaquetePersonalizado"
//Data:
import { dataPaquetes } from "../../components/PaquetePersonalizado/dataPaquetes"
//Assets:
import cell_1 from "../../assets/smartPanics/01_cell.mp4"
import desk_1 from "../../assets/smartPanics/01_desk.mp4"
import cell_2 from "../../assets/smartPanics/02_cell.mp4"
import desk_2 from "../../assets/smartPanics/02_desk.mp4"
import desk_3 from "../../assets/smartPanics/03_desk.jpg"
import cell_3 from "../../assets/smartPanics/03_cell.jpg"
import desk_4 from "../../assets/smartPanics/04_desk.mp4"
import cell_4 from "../../assets/smartPanics/04_cell.mp4"
import cell_5 from "../../assets/smartPanics/05_cell.mp4"
import cell_6 from "../../assets/smartPanics/06_cell.png"
import desk_6 from "../../assets/smartPanics/06_desk.jpg"
import cell_7 from "../../assets/smartPanics/07_cell.mp4"
import cell_8 from "../../assets/smartPanics/08_cell.jpg"
import desk_8 from "../../assets/smartPanics/08_desk.jpg"
import cell_9 from "../../assets/smartPanics/09_cell.jpg"
import desk_9 from "../../assets/smartPanics/09_desk.jpg"
import cell_10 from "../../assets/smartPanics/10_cell.jpg"
import desk_10 from "../../assets/smartPanics/10_desk.jpg"
import { routes } from "../../utils/routes"

const SmartPanicsFlota = () => {

    return (
        <Grid sx={{background: colors.black}}>

            {/* FONDO NEGRO */}
            <Grid container gap={{xs: 5, md: 3}} justifyContent='center' alignItems='flex-start' pb={5}>
                <section id={routes.SOLUCIONES.children.SMART_PANICS.section} />
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
                    <ResponsiveVideo 
                        vidCell={cell_2}
                        vidDesk={desk_2}
                        onClick={()=>{}}
                        autoplay={true}
                        hideControl={true}
                        loop={true}
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
                <Grid item xs={12} container justifyContent='center'>
                    <ResponsiveVideo 
                        vidCell={cell_4}
                        vidDesk={desk_4}
                        onClick={()=>{}}
                        autoplay={true}
                        hideControl={true}
                        loop={true}
                    />
                    <CustomButon 
                        label='COMENZAR'
                        fontSize={{xs:'10pt', md:'16pt'}}
                        onClick={()=>{}}
                        variant='contained'
                        style={null}
                    />
                </Grid>
                <Grid item xs={12} mt={4}>
                    <Grid container justifyContent='center' sx={{display:{xs:'flex',md:'none'}}}>
                        <Grid item xs={8}>
                            <ResponsiveVideo 
                                vidCell={cell_5}
                                onClick={()=>{}}
                                autoplay={true}
                                hideControl={true}
                                loop={true}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography sx={{fontSize:'14pt', color: colors.white, textAlign: 'center', padding:'50px 0'}}>
                                Recibí una alerta si tu hijo no llega a casa dentro  del plazo previsto para su recorrido. 
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent='center' alignItems='center' gap={4} sx={{display:{xs:'none',md:'flex'}}}>
                        <Grid item xs={2.3}>
                            <ResponsiveVideo 
                                vidDesk={cell_5}
                                onClick={()=>{}}
                                autoplay={true}
                                hideControl={true}
                                loop={true}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <Typography sx={{fontSize: '24pt', color: colors.white, textAlign: 'right'}}>
                                Recibí una alerta si tu hijo
                                no llega a casa dentro  del plazo
                                previsto para su recorrido. 
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent='center' sx={{display:{xs:'flex',md:'none'}}}>
                        <Grid item xs={12}>
                            <ResponsiveImg 
                                imgCell={cell_6}
                                alt='img'
                                onClick={()=>{}}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography sx={{fontSize:'14pt', color: colors.white, textAlign: 'center', padding:'50px 0'}}>
                                Rastreo de Vehículos en Tiempo Real: Vigila todos tus vehículos con rastreadores GPS integrados. 
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{display:{xs:'none',md:'flex'}}}>
                        <ResponsiveImg 
                            imgDesk={desk_6}
                            alt='img'
                            onClick={()=>{}}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} mt={4}>
                    <Grid container justifyContent='center' sx={{display:{xs:'flex',md:'none'}}}>
                        <Grid item xs={8}>
                            <ResponsiveVideo 
                                vidCell={cell_7}
                                onClick={()=>{}}
                                autoplay={true}
                                hideControl={true}
                                loop={true}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <Typography sx={{fontSize:'14pt', color: colors.white, textAlign: 'center', padding:'50px 0'}}>
                                Nunca pierdas de vista a tu familia. Accedé a la localización exacta en tiempo real de cada uno de los miembros de tu grupo familiar. 
                                Recibí alertas sobre excesos de velocidad, inactividad y estado de la batería de sus dispositivos móviles.
                            </Typography>
                        </Grid>
                        <CustomButon 
                            label='MÁS INFORMACIÓN'
                            fontSize={{xs:'10pt', md:'16pt'}}
                            onClick={()=>{}}
                            variant='contained'
                            style={null}
                        />
                    </Grid>
                    <Grid container justifyContent='center' alignItems='center' gap={4} sx={{display:{xs:'none',md:'flex'}}}>
                        <Grid item xs={2.3}>
                            <ResponsiveVideo 
                                vidDesk={cell_7}
                                onClick={()=>{}}
                                autoplay={true}
                                hideControl={true}
                                loop={true}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <Typography sx={{fontSize: '24pt', color: colors.white, textAlign: 'right'}}>
                                Nunca pierdas de vista a tu familia. Accedé a la localización exacta en tiempo real de cada uno de los miembros de tu grupo familiar. 
                                Recibí alertas sobre excesos de velocidad, inactividad y estado de la batería de sus dispositivos móviles.
                            </Typography>
                            <Grid container mt={5} justifyContent='flex-end'>
                                <CustomButon 
                                    label='MÁS INFORMACIÓN'
                                    fontSize={{xs:'10pt', md:'16pt'}}
                                    onClick={()=>{}}
                                    variant='contained'
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} container gap={2} sx={{display:{xs:'flex',md:'none'}}}>
                    <Grid item xs={12}>
                        <ResponsiveImg
                            imgCell={cell_8}
                            alt='img'
                            onClick={()=>{}}
                        />
                    </Grid>
                    <Grid container justifyContent='center'>
                        <CustomButon 
                            label='MÁS INFORMACIÓN'
                            fontSize={{xs:'10pt', md:'16pt'}}
                            onClick={()=>{}}
                            variant='contained'
                        />
                    </Grid>
                </Grid>
            </Grid>

            {/* FONDO BLANCO */}
            <Grid container justifyContent='center' alignItems='flex-start' sx={{background: colors.white, display:{xs:'none',md:'block'}}}>
                <Grid item xs={12}>
                    <ResponsiveImg
                        imgCell={cell_8}
                        imgDesk={desk_8}
                        alt='img'
                        onClick={()=>{}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <PaquetePersonalizado 
                        title='Nuestros Planes'                  
                        text1='¿No encontrás el paquete que necesitas? '
                        text2='Ayudanos a diseñar uno personalizado para vos'
                        labelButton='COMENZAR'
                        paquetes={[
                            dataPaquetes.SMART_PANIC_INDIVIDUAL,
                            dataPaquetes.SMART_PANIC_FAMILY,
                            dataPaquetes.SMART_PANIC_FAMILY_XL,
                        ]}
                    />
                </Grid>
            </Grid>

            {/* FONDO NEGRO */}
            <Grid container gap={{xs: 5, md: 3}} justifyContent='center' alignItems='flex-start'>
                <Grid item xs={12}>
                <section id={routes.SOLUCIONES.children.MONITOREO_FLOTA.section} />
                    <ResponsiveImg
                        imgCell={cell_9}
                        imgDesk={desk_9}
                        alt='img'
                        onClick={()=>{}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <ResponsiveImg
                        imgCell={cell_10}
                        imgDesk={desk_10}
                        alt='img'
                        onClick={()=>{}}
                    />
                </Grid>
            </Grid>

        </Grid>
    )
}

export default SmartPanicsFlota