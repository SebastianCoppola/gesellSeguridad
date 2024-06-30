//Mui:
import { Grid, Typography } from "@mui/material"
import { Check } from "@mui/icons-material"
//Utils:
import { colors } from "../../utils/const"
import { routes } from "../../utils/routes"
//Components:
import VerticalCards from "../../components/VerticalCards/VerticalCards"
import Cotizacion from "./Cotizacion"
import CustomButon from "../../components/CustomButton/CustomButton"
import ResponsiveImg from "../../components/ResponsiveImg/ResponsiveImg"
import ResponsiveVideo from "../../components/VideoPlayer/ResponsiveVideo"
import HeaderSlider from "./HeaderSlider"
import SolucionesSlider from "./SolucionesSlider"
import PaquetePersonalizado from "../../components/PaquetePersonalizado/PaquetePersonalizado"
//Data:
import { dataPaquetes } from "../../components/PaquetePersonalizado/dataPaquetes"
//Assets:
import icon1 from '../../assets/icons/user.png'
import icon2 from '../../assets/icons/config.png'
import icon3 from '../../assets/icons/eye.png'
import img1cell from '../../assets/home/varios/01_cell.jpg'
import img1desk from '../../assets/home/varios/01_desk.jpg'
import img2cell from '../../assets/home/varios/02_cell.jpg'
import img2desk from '../../assets/home/varios/02_desk.jpg'
import img3cell from '../../assets/home/varios/03_cell.jpg'
import img3desk from '../../assets/home/varios/03_desk.jpg'
import img4cell from '../../assets/home/varios/04_cell.jpg'
import img4desk from '../../assets/home/varios/04_desk.jpg'
import img5cell from '../../assets/home/varios/05_cell.mp4'
import img5desk from '../../assets/home/varios/05_desk.jpg'
import img6cell from '../../assets/home/varios/06_cell.jpg'
import img6desk from '../../assets/home/varios/06_desk.jpg'
import Productos from "./Productos"

const Home = () => {

    const cardsData = [
        { icon: icon1, title: 'Soluciones Personalizadas', text: 'Diseñamos sistemas de seguridad que se ajustan a las características y requerimientos de cada propiedad.' },
        { icon: icon2, title: 'Instalación Profesional', text: 'Nos aseguramos de que cada componente esté correctamente configurado y funcionando de manera óptima.' },
        { icon: icon3, title: 'Monitoreo las 24 hs.', text: 'Respuesta inmediata ante cualquier eventualidad las 24 hs. del día, los 7 días de la semana.' },
    ]

    return (
        <Grid container alignItems='flex-start' gap={5} sx={{marginBottom:'30px'}}>
            
            {/* MAIN CAROUSEL */}
            <Grid item xs={12} container alignItems='flex-end'>
                <HeaderSlider />
            </Grid>

            {/* CUERPO */}
            <Grid item xs={12} container justifyContent='center' alignItems='center' gap={2}>
                <Typography sx={{
                    fontSize: {xs:'18pt', md:'34px'}, 
                    fontWeight: 700, 
                    color: colors.orange, 
                    textAlign: 'center'
                }}>
                    Cotizá tu alarma sin cargo en el día
                </Typography>
                <CustomButon 
                    onClick={()=>{}}
                    label='COMENZAR'
                    variant='outlined'
                />
            </Grid>
            <Grid item xs={12} container justifyContent='center'>
                <VerticalCards data={cardsData}/>
            </Grid>
            <Grid item xs={12} container gap={1}>
                <Grid item xs={12} md={0} sx={{display:{xs:'block', md:'none'}, textAlign:'center'}}>
                    <ResponsiveImg 
                        imgCell={img1cell}
                        alt='banner'
                        onClick={()=>{}}
                    />
                    <CustomButon 
                        label='MÁS INFORMACIÓN' 
                        fontSize='8pt' 
                        onClick={()=>{}}
                        variant='contained'
                    />
                </Grid>
                <Grid item xs={0} md={12} sx={{display:{xs:'none', md:'block'}}}>
                    <Grid container alignItems='center' gap={1} pr={4} sx={{
                        backgroundImage: `url(${img1desk})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center', 
                        height: '400px',
                        width: 'auto'
                    }}>
                        <Grid container justifyContent='flex-end' gap={3}>
                            <Grid item xs={12}>
                                <Typography sx={{textAlign:'right', fontWeight:700, fontSize:'32pt'}}>Nos Protegemos entre Todos</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{textAlign:'right', fontWeight:700, fontSize:'24pt', color: colors.orange}}>1 alarma para hasta 8 hogares</Typography>
                                <Typography sx={{textAlign:'right', fontSize:'16pt'}}>Unidos por la seguridad, protegidos por la tecnología.</Typography>
                            </Grid>
                            <CustomButon 
                                label='MÁS INFORMACIÓN' 
                                fontSize='13pt' 
                                onClick={()=>{}}
                                variant='contained'
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} container justifyContent='center'>
                <Grid item xs={12} md={10}>
                    <Cotizacion />
                </Grid>
            </Grid>
            <Grid item xs={12} container gap={1}>
                <Grid item xs={12} md={0} sx={{display:{xs:'block', md:'none'}, textAlign:'center'}}>
                    <ResponsiveImg 
                        imgCell={img2cell}
                        alt='banner'
                        onClick={()=>{}}
                    />
                    <CustomButon 
                        label='MÁS INFORMACIÓN' 
                        fontSize='12pt' 
                        onClick={()=>{}}
                        variant='contained'
                    />
                </Grid>
                <Grid item xs={0} md={12} sx={{display:{xs:'none', md:'block'}}}>
                    <Grid container alignItems='center' gap={1} pl={4} sx={{
                        backgroundImage: `url(${img2desk})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center', 
                        height: '400px',
                        width: 'auto'
                    }}>
                        <Grid item xs={5} container gap={3}>
                            <Grid item xs={12}>
                                <Typography sx={{fontWeight:700, fontSize:'24pt'}}>Seguridad que Va con Vos</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{fontSize:'15pt'}}>Descubrí la forma de mantener a tu familia segura, estén donde estén.</Typography>
                            </Grid>
                            <Grid item xs={12} container gap={1}>
                                <Grid item xs={12} container alignItems='center' gap={2}>
                                    <Typography sx={{fontWeight:700, fontSize:'17pt', color: colors.orange}}>1</Typography>
                                    <Typography sx={{fontSize:'14pt'}}>Descargá la app en tu dispositivo móvil</Typography>
                                </Grid>
                                <Grid item xs={12} container alignItems='center' gap={2}>
                                    <Typography sx={{fontWeight:700, fontSize:'17pt', color: colors.orange}}>2</Typography>
                                    <Typography sx={{fontSize:'14pt'}}>Descargá la app en tu dispositivo móvil</Typography>
                                </Grid>
                                <Grid item xs={12} container alignItems='center' gap={2} flexWrap='nowrap'>
                                    <Typography sx={{fontWeight:700, fontSize:'17pt', color: colors.orange}}>3</Typography>
                                    <Typography sx={{fontSize:'14pt'}}>Disfruta de la tranquilidad de tener la seguridad al alcance de la mano</Typography>
                                </Grid>
                            </Grid>
                            <CustomButon 
                                label='MÁS INFORMACIÓN' 
                                fontSize='13pt' 
                                onClick={()=>{}}
                                variant='contained'
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* SOLUCIONES */}
            <Grid item xs={12} container justifyContent='center' gap={2}>
                <Grid item xs={11}>
                    <section id={routes.SOLUCIONES.section} />
                    <Typography sx={{fontSize: {xs:'16pt', md:'24pt'}, fontWeight:700}}>
                        Nuestras Soluciones
                    </Typography>
                </Grid>
                <Grid item xs={12} md={11}>
                    <SolucionesSlider />
                </Grid>
            </Grid>

            {/* PRODUCTOS */}
            <Grid item xs={12}>
                <Productos />
            </Grid>

            {/* MAS CUERPO */}
            <Grid item xs={12} container justifyContent='center'>
                <Grid item xs={12} md={0} sx={{display:{xs:'block', md:'none'}, textAlign:'center'}}>
                    <ResponsiveImg 
                        imgCell={img3cell}
                        alt='banner'
                        onClick={()=>{}}
                    />
                    <ResponsiveImg 
                        imgCell={img4cell}
                        imgDesk={img4desk} 
                        alt='banner'
                        onClick={()=>{}}
                    />
                </Grid>
                <Grid item xs={0} md={12} sx={{display:{xs:'none', md:'block'}}}>
                    <Grid container flexDirection='column' justifyContent='space-between' sx={{
                        backgroundImage: `url(${img3desk})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center', 
                        height: '700px',
                        width: 'auto',
                        padding: '50px 0'
                    }}>
                        <Grid item container justifyContent='center'>
                            <Typography sx={{fontWeight:700, fontSize:'30.5pt', color:colors.white}}>
                                Nos adaptamos a tus necesidades
                            </Typography>
                        </Grid>
                        <Grid item container justifyContent='center'>
                            <Typography sx={{fontSize:'22.9pt', color:colors.white, textAlign:'center'}}>
                                Protege tu propiedad tanto en interiores como en exteriores, <br/> incluidas áreas de difícil acceso
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent='flex-end' sx={{
                        backgroundImage: `url(${img4desk})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center', 
                        height: '700px',
                        width: 'auto',
                        padding: '50px 100px'
                    }}>
                        <Typography sx={{fontWeight:700, fontSize:'32pt', color:colors.white, textAlign:'right'}}>
                            El control de tu hogar al <br/> alcance de tu mano
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            {/* PAQUETES */}
            <Grid item xs={12} container justifyContent='center' gap={1}>
                <section id={routes.PAQUETES.section}/>
                <PaquetePersonalizado 
                    title='Seguridad al alcance de todos'
                    text1='¿No encontrás el paquete que necesitas? '
                    text2='Ayudanos a diseñar uno personalizado para vos'
                    labelButton='COMENZAR'
                    paquetes={[
                        dataPaquetes.AJAX_VECINAL,
                        dataPaquetes.AJAX_VECINAL_XL,
                        dataPaquetes.SMART_PANIC_FAMILY,
                        dataPaquetes.SMART_PANIC_FAMILY_XL,
                        dataPaquetes.SEGURIDAD_COMPARTIDA,
                        dataPaquetes.SEGURIDAD_BARRIO,
                    ]}
                />
            </Grid>

            {/* MAS CUERPO */}
            <Grid item xs={12} container justifyContent='center'>
                <Grid item xs={12} md={0} sx={{display:{xs:'block', md:'none'}, textAlign:'center'}}>
                    <ResponsiveVideo 
                        vidCell={img5cell}
                        onClick={()=>{}}
                        autoplay={true}
                        hideControl={true}
                        loop={true}
                    />
                    <CustomButon 
                        label='COMENZAR' 
                        fontSize='12pt' 
                        onClick={()=>{}}
                        variant='contained'
                    />
                </Grid>
                <Grid item xs={0} md={12} sx={{display:{xs:'none', md:'block'}}}>
                    <Grid container justifyContent='flex-end' alignItems='center' sx={{
                        backgroundImage: `url(${img5desk})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center', 
                        height: '700px',
                        width: 'auto',
                        padding: '50px 50px'
                    }}>
                        <Grid item xs={6} container justifyContent='flex-start' gap={4}>
                            <Grid item xs={12}>
                                <Typography sx={{fontWeight: 700, fontSize: '24pt'}}>
                                    Seguridad a un toque de distancia
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{fontWeight: 700, fontSize: '15pt'}}>
                                    Con la app de Ajax, tenés el control total de la seguridad de tu hogar en la palma de tu mano.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} container gap={1}>
                                {['Congifuración personalizada por zonas', 'Botón de pánico que comparte ubicación',
                                    'Notificaciones inteligentes', 'Diseño intuitivo y fácil de navegar',
                                    'Control 100% remoto', 'Automatización de armado/ desarmado',].map((it, index) => (
                                    <Grid key={index} item xs={12} container gap={2} alignItems='center'>
                                        <Check fontSize='large' sx={{color:colors.orange}}/>
                                        <Typography sx={{fontSize:'15pt'}}>{it}</Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Grid item xs={12}>
                                <CustomButon 
                                    label='MÁS INFORMACIÓN' 
                                    fontSize='13pt' 
                                    onClick={()=>{}}
                                    variant='contained'
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} container justifyContent='center'>
                <Grid item xs={12} md={0} sx={{display:{xs:'block', md:'none'}, textAlign:'center'}}>
                    <ResponsiveImg 
                        imgCell={img6cell}
                        alt='banner'
                        onClick={()=>{}}
                    />
                    <CustomButon 
                        label='COMENZAR' 
                        fontSize='12pt' 
                        onClick={()=>{}}
                        variant='contained'
                    />
                </Grid>
                <Grid item xs={0} md={12} sx={{display:{xs:'none', md:'block'}}}>
                    <Grid container justifyContent='center' alignItems='center'>
                        <Grid item xs={5.2} container gap={3} pl={5}>
                            <Grid item xs={12}>
                                <Typography sx={{fontWeight:700, fontSize:'24pt'}}>
                                    Tu seguridad y la de tu familia <br/> a 3 simples pasos
                                </Typography>
                            </Grid>
                            <Grid item xs={12} container gap={1}>
                                <Grid item xs={12} container alignItems='center' gap={2}>
                                    <Typography sx={{fontWeight:700, fontSize:'17pt', color: colors.orange}}>1</Typography>
                                    <Typography sx={{fontSize:'14pt'}}>Cotactate con un asesor de ventas</Typography>
                                </Grid>
                                <Grid item xs={12} container alignItems='center' gap={2}>
                                    <Typography sx={{fontWeight:700, fontSize:'17pt', color: colors.orange}}>2</Typography>
                                    <Typography sx={{fontSize:'14pt'}}>Coordiná una visita a tu domicilio</Typography>
                                </Grid>
                                <Grid item xs={12} container alignItems='center' gap={2} flexWrap='nowrap'>
                                    <Typography sx={{fontWeight:700, fontSize:'17pt', color: colors.orange}}>3</Typography>
                                    <Typography sx={{fontSize:'14pt'}}>Armá un paquete que se adapte a tus necesidades</Typography>
                                </Grid>
                            </Grid>
                            <CustomButon 
                                label='COMENZAR' 
                                fontSize='13pt' 
                                onClick={()=>{}}
                                variant='contained'
                            />
                        </Grid>
                        <Grid item xs={5.2} container sx={{height:'500px'}}>
                            <img src={img6desk} alt='banner' style={{height:'100%'}}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Home