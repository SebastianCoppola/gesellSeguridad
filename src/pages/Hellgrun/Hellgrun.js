import { Grid, Typography } from "@mui/material"
//Components:
import ResponsiveImg from "../../components/ResponsiveImg/ResponsiveImg"
//Assets:
import img01cell from '../../assets/hellgrun/01_cell.jpg'
import img01desk from '../../assets/hellgrun/01_desk.jpg'
import img02cell from '../../assets/hellgrun/02_cell.jpg'
import img02desk from '../../assets/hellgrun/02_desk.jpg'
import img03cell from '../../assets/hellgrun/03_cell.jpg'
import img03desk from '../../assets/hellgrun/03_desk.jpg'
import img04cell from '../../assets/hellgrun/04_cell.jpg'
import img04desk from '../../assets/hellgrun/04_desk.jpg'
import img05cell from '../../assets/hellgrun/05_cell.jpg'
import img05desk from '../../assets/hellgrun/05_desk.jpg'
import img06desk from '../../assets/hellgrun/06_desk.jpg'
//Utils:
import { colors } from "../../utils/const"

const Hellgrun = () => {

    const textos = {
        text1: 'Junto a Hellgrün, proporcionamos protección integral a hogares y negocios, asegurando productos de seguridad electrónica de alta calidad a precios competitivos.',
        text2: {
            title: 'Tu hogar monitoreado 24/7',
            body1: 'El sistema proporciona monitoreo constante, asegurando que tu propiedad esté protegida todo el tiempo.',
            body2: 'Un equipo de expertos está siempre listo para responder a cualquier emergencia de manera rápida y eficiente.'
        },
        text3: {
            title:'Tecnología avanzada de detección',
            body1: 'Sensores de alta precisión y cámaras de gran definición detectan cualquier actividad sospechosa y alertan de inmediato.',
            body2: [
                'Sensor piroeléctrico (Dual PIR)',
                'Banda 915 Mhz',
                'Detección de intrusión y de control',
                'Distancia a campo abierto de 300 mts',
                'Pila CR-123 con una duración de hasta 4 años'
            ]
        },
        text4: {
            title: 'Automatización del Hogar',
            body: 'La seguridad y la inteligencia se combinan convirtiendo tu hogar en un bastión impenetrable de tranquilidad y protección. Con Hellgrün, tu casa no solo está protegida contra intrusos, sino que también puedes controlar y automatizar diversos aspectos de tu hogar. Desde la iluminación y la climatización hasta las cerraduras y cámaras de seguridad, todo está conectado y gestionado desde una única plataforma. ',
        },
        text5: {
            title: 'Control total de tu hogar con Hellgrün Check',
            body1: 'Recibí notificaciones en tiempo real; accede a tus cámaras; activá y descativá tu alarma. El control total de tu hogar en tu dispositivo móvil, estes donde estes.',
            body2: [
                'Multi Alarma: 8 alarmas en una sola App',
                'Comandos inmeditos',
                'Fácil usabilidad y navegación',
                'Distintos niveles de acceso según el usuario',
            ]
        },
        text6: {
            title: 'Control total de tu hogar con Hellgrün Check',
            body: 'La conectividad 4G asegura una comunicación constante, incluso cuando la red WiFi puede no estar disponible, garantizando así una respuesta rápida y efectiva ante cualquier eventualidad, proporcionando una capa adicional de seguridad. ',
        },
    }

    return (
        <Grid container alignItems='flex-start' sx={{paddingBottom:'30px'}}>
                
            <Grid item xs={12} container alignItems='flex-end'>
                <ResponsiveImg 
                    imgCell={img01cell}
                    imgDesk={img01desk}
                    alt='banner'
                    onClick={()=>{}}
                />
            </Grid>

            <Grid item xs={12} container alignItems='flex-end'>
                <Typography sx={{
                    padding: {xs:'5% 7%', md:'4% 15%'},
                    fontSize: {xs:'14pt', md:'24pt'},
                    textAlign: 'center',
                    fontWeight: 700
                }}>
                    {textos.text1}
                </Typography>
            </Grid>

            <Grid item xs={12} container alignItems='flex-end' sx={{background: colors.black}}>
                <Grid item xs={12} md={0} sx={{display:{xs:'block', md:'none'}}}>
                    <ResponsiveImg 
                        imgCell={img02cell}
                        alt='banner'
                        onClick={()=>{}}
                    />
                    <Grid container gap={3} sx={{padding:'7% 5%'}}>
                        <Typography sx={{
                            width:'100%',
                            fontSize:'12pt',
                            textAlign:'center',
                            color: colors.white,
                            fontWeight:700,
                        }}>
                            {textos.text2.title}
                        </Typography>
                        <Typography sx={{
                            fontSize:'11pt',
                            textAlign:'center',
                            color: colors.white,
                        }}>
                            {textos.text2.body1}<br/>{textos.text2.body2}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={0} md={12} sx={{display:{xs:'none', md:'block'}}}>
                    <Grid container alignItems='center' justifyContent='flex-end' pr={13} sx={{
                        backgroundImage: `url(${img02desk})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center', 
                        height: '600px',
                        width: 'auto'
                    }}>
                        <Grid item xs={4} container justifyContent='flex-end' gap={5}>
                            <Typography sx={{
                                width:'100%',
                                fontSize:'22pt',
                                textAlign:'right',
                                color: colors.white,
                                fontWeight: 700,
                            }}>
                                {textos.text2.title}
                            </Typography>
                            <Typography sx={{
                                fontSize:'20pt',
                                textAlign:'right',
                                color: colors.white,
                            }}>
                                {textos.text2.body1}<br/>{textos.text2.body2}
                            </Typography>    
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} container alignItems='flex-end' sx={{background: colors.black}}>
                <Grid item xs={12} md={0} sx={{display:{xs:'block', md:'none'}}}>
                    <ResponsiveImg 
                        imgCell={img03cell}
                        alt='banner'
                        onClick={()=>{}}
                    />
                    <Grid container gap={3} sx={{padding:'7% 7%'}}>
                        <Typography sx={{
                            width:'100%',
                            fontSize:'12pt',
                            textAlign:'center',
                            color: colors.white,
                            fontWeight:700,
                        }}>
                            {textos.text3.title}
                        </Typography>
                        <Typography sx={{
                            fontSize:'11pt',
                            textAlign:'center',
                            color: colors.white,
                        }}>
                            {textos.text3.body1}
                        </Typography>
                        {textos.text3.body2.map((it, index) => (
                            <Typography key={index} sx={{
                                fontSize:'11pt',
                                color: colors.white,
                                display:'flex',
                                gap:'5px'
                            }}>
                                • {it}
                            </Typography>
                        ))}
                        
                    </Grid>
                </Grid>
                <Grid item xs={0} md={12} sx={{display:{xs:'none', md:'block'}}}>
                    <Grid container alignItems='center' pl={13} sx={{
                        backgroundImage: `url(${img03desk})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center', 
                        height: '600px',
                        width: 'auto'
                    }}>
                        <Grid item xs={6} container gap={3}>
                            <Typography sx={{
                                width:'100%',
                                fontSize:'22pt',
                                color: colors.white,
                                fontWeight:700,
                            }}>
                                {textos.text3.title}
                            </Typography>
                            <Typography sx={{
                                fontSize:'20pt',
                                color: colors.white,
                            }}>
                                {textos.text3.body1}
                            </Typography>
                            <Grid container direction='column' gap={1}>
                                {textos.text3.body2.map((it, index) => (
                                    <Typography key={index} sx={{
                                        fontSize:'16pt',
                                        color: colors.white,
                                        display:'flex',
                                        gap:'5px',
                                        widht:'100%'
                                    }}>
                                        • {it}
                                    </Typography>
                                ))}
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} container alignItems='flex-end' sx={{background: colors.black}}>
                <Grid item xs={12} md={0} sx={{display:{xs:'block', md:'none'}}}>
                    <ResponsiveImg 
                        imgCell={img04cell}
                        alt='banner'
                        onClick={()=>{}}
                    />
                    <Grid container gap={3} sx={{padding:'7% 5%'}}>
                        <Typography sx={{
                            width:'100%',
                            fontSize:'12pt',
                            textAlign:'center',
                            color: colors.white,
                            fontWeight:700,
                        }}>
                            {textos.text4.title}
                        </Typography>
                        <Typography sx={{
                            fontSize:'11pt',
                            textAlign:'center',
                            color: colors.white,
                        }}>
                            {textos.text4.body}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={0} md={12} sx={{display:{xs:'none', md:'block'}}}>
                    <Grid container alignItems='center' justifyContent='flex-end' pr={13} sx={{
                        backgroundImage: `url(${img04desk})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center', 
                        height: '800px',
                        width: 'auto'
                    }}>
                        <Grid item xs={5} container justifyContent='flex-end' gap={6}>
                            <Typography sx={{
                                width:'100%',
                                fontSize:'22pt',
                                textAlign:'right',
                                color: colors.white,
                                fontWeight: 700,
                            }}>
                                {textos.text4.title}
                            </Typography>
                            <Typography sx={{
                                fontSize:'20pt',
                                textAlign:'right',
                                color: colors.white,
                            }}>
                                {textos.text4.body}
                            </Typography>    
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} container alignItems='flex-end' sx={{background: colors.black}}>
                <Grid item xs={12} md={0} sx={{display:{xs:'block', md:'none'}}}>
                    <ResponsiveImg 
                        imgCell={img05cell}
                        alt='banner'
                        onClick={()=>{}}
                    />
                    <Grid container gap={3} sx={{padding:'7% 7%'}}>
                        <Typography sx={{
                            width:'100%',
                            fontSize:'12pt',
                            textAlign:'center',
                            color: colors.white,
                            fontWeight:700,
                        }}>
                            {textos.text5.title}
                        </Typography>
                        <Typography sx={{
                            fontSize:'11pt',
                            textAlign:'center',
                            color: colors.white,
                        }}>
                            {textos.text5.body1}
                        </Typography>
                        {textos.text5.body2.map((it, index) => (
                            <Typography key={index} sx={{
                                fontSize:'11pt',
                                color: colors.white,
                                display:'flex',
                                gap:'5px'
                            }}>
                                • {it}
                            </Typography>
                        ))}
                        
                    </Grid>
                </Grid>
                <Grid item xs={0} md={12} sx={{display:{xs:'none', md:'block'}}}>
                    <Grid container alignItems='center' pl={13} sx={{
                        backgroundImage: `url(${img05desk})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center', 
                        height: '600px',
                        width: 'auto'
                    }}>
                        <Grid item xs={6} container gap={3}>
                            <Typography sx={{
                                width:'100%',
                                fontSize:'22pt',
                                color: colors.white,
                                fontWeight:700,
                            }}>
                                {textos.text5.title}
                            </Typography>
                            <Typography sx={{
                                fontSize:'20pt',
                                color: colors.white,
                            }}>
                                {textos.text5.body1}
                            </Typography>
                            <Grid container direction='column' gap={1}>
                                {textos.text5.body2.map((it, index) => (
                                    <Typography key={index} sx={{
                                        fontSize:'16pt',
                                        color: colors.white,
                                        display:'flex',
                                        gap:'5px',
                                        widht:'100%'
                                    }}>
                                        • {it}
                                    </Typography>
                                ))}
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container 
                    justifyContent={{xs:'center', md:'flex-end'}} 
                    alignItems='center' 
                    sx={{
                        backgroundImage: `url(${img06desk})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center', 
                        height: '500px',
                        width: 'auto'
                    }}
                >
                    <Grid item xs={9} md={6} container gap={4} sx={{paddingRight:{xs:0, md:'4%'}}}>
                        <Typography sx={{
                            width: '100%',
                            fontSize: {xs:'12pt', md:'22pt'},
                            textAlign: {xs:'center', md:'right'},
                            color: colors.white,
                            fontWeight: 700,
                        }}>
                            {textos.text6.title}
                        </Typography>
                        <Typography sx={{
                            fontSize: {xs:'11pt', md:'20pt'},
                            textAlign: {xs:'center', md:'right'},
                            color: colors.white,
                            fontWeight: {xs:700, md:400}
                        }}>
                            {textos.text6.body}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
           
        </Grid>
    )
}

export default Hellgrun