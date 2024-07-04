import { useState } from "react"
//Mui:
import { Grid, Typography } from "@mui/material"
import { KeyboardArrowDown, LocalPhone, LocalPostOffice, LocationOn, WhatsApp } from "@mui/icons-material"
//Utils:
import { colors } from "../../utils/const"
import { routes, seccionesNoMapeables } from "../../utils/routes"
//React Icons:
import { IoLogoFacebook } from "react-icons/io"
import { FaWhatsapp } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
//Hooks:
import { useHistory } from "../../hooks/useHistory"
import { whatsApp } from "../../utils/utils"

const Icons = () => {

    const nav = (url) => window.open(url, '_blank')

    return (
        <>
            <IoLogoFacebook style={{color:colors.white, cursor:'pointer'}} fontSize='25px' onClick={()=>nav('https://www.facebook.com/GesellSeguridad/')}/>
            <FaWhatsapp style={{color:colors.white, cursor:'pointer'}} fontSize='25px' onClick={()=>whatsApp()}/>
            <FaInstagram style={{color:colors.white, cursor:'pointer'}} fontSize='25px' onClick={()=>nav('https://www.instagram.com/gesellseg')}/>
            <FaYoutube style={{color:colors.white, cursor:'pointer'}} fontSize='25px' onClick={()=>{}}/>
        </>
    )
}

const MenuDesplegableMobile = ({ title, items, style }) => {

    const [openMenu, setOpenMenu] = useState(null)

    return (
        <>
            <Grid container justifyContent='space-between'>
                <Typography sx={style}>{title}</Typography>
                <KeyboardArrowDown 
                    onClick={ () => setOpenMenu(!openMenu) }
                    sx={{
                        ...style,
                        color: colors.white,
                        transform: openMenu ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease-in-out',
                    }} 
                />
            </Grid>
            { openMenu && (
                <Grid container direction='column' sx={{marginBottom:'20px'}}>
                    {items.map((item, key) => (
                        <Typography 
                            key={key}    
                            sx={{...style}} 
                            onClick={() => {
                                setOpenMenu(false)                                
                                item.action()
                            }}
                        >
                            {item.text}
                        </Typography>
                    ))}
                </Grid>
            )}
        </>
    )
}

const Footer = () => {

    const { navigateTo } = useHistory()

    const handleNavigate = (url, idSection) => {
        //Navigate:
        navigateTo(url, idSection)
        //Go to Section:        
        setTimeout(()=>{
            if(idSection){
                let section = document.getElementById(idSection)
                let topOffset = section.offsetTop - 100
                window.scrollTo({top: topOffset, behavior: 'smooth'})
            }else{
                window.scrollTo({top: 0, behavior: 'smooth'})
            }
        },200)
    }

    const mobileStyles = {
        links:{
            color: colors.white,
            fontSize: '9pt',
            marginBottom: '10px',
            cursor:'pointer'
        },
        contactIcons:{
            color: colors.white,
            fontSize: '15px',
        },
        contactText:{
            color: colors.white,
            fontSize: '9pt',
        },
    }

    const desktopStyles = {
        title:{
            color: colors.white,
            fontSize: '11pt',
            marginBottom: '20px',
            fontWeight: 700
        },
        links:{
            color: colors.white,
            fontSize: '11pt',
            marginBottom: '10px',
            cursor: 'pointer'
        },
        contactIcons:{
            color: colors.white,
            fontSize: '15px',
        },
        contactText:{
            color: colors.white,
            fontSize: '10pt',
        },
    }

    return (
        <Grid container justifyContent='center' gap={{xs:5, md:0}} sx={{background: colors.orange, padding: {xs:'30px 40px', md:'50px'}}}>
            
            {/* CELULAR */}
            <Grid item xs={12} md={0} sx={{display:{xs:'block', md:'none'}}}>
                <Grid container>
                    <MenuDesplegableMobile
                        title='Soluciones para tu Hogar'
                        items={[
                            {text: 'Alarma Ajax', action: () => handleNavigate(routes.SOLUCIONES.children.AJAX.url, routes.SOLUCIONES.children.AJAX.section)},
                            {text: 'Alarma Risco', action: () => handleNavigate(routes.SOLUCIONES.children.RISCO.url, routes.SOLUCIONES.children.RISCO.section)},
                            {text: 'Accesorios de Seguridad', action: ()=>{}},
                            {text: 'Smart Panics App', action: () => handleNavigate(routes.SOLUCIONES.children.SMART_PANICS.url, routes.SOLUCIONES.children.SMART_PANICS.section)}
                        ]}
                        style={mobileStyles.links}
                    />
                    <MenuDesplegableMobile
                        title='Soluciones Vecinales'
                        items={[
                            {text: 'Alarma Ajax Vecinal', action: () => {}},
                            {text: 'Alarma Risco Vecinal', action: () => {}},
                            {text: 'Recorridos Preventivos',action: () => {}},
                        ]}
                        style={mobileStyles.links}
                    />
                    <MenuDesplegableMobile
                        title='Soluciones para tu Comercio'
                        items={[
                            {text: 'Alarma Ajax', action: () => handleNavigate(routes.SOLUCIONES.children.AJAX.url, routes.SOLUCIONES.children.AJAX.section)},
                            {text: 'Alarma Risco', action: () => handleNavigate(routes.SOLUCIONES.children.RISCO.url, routes.SOLUCIONES.children.RISCO.section)},
                            {text: 'Personal de Seguridad', action: () => handleNavigate(routes.SOLUCIONES.children.PERSONAR_DE_SEGURIDAD.url, routes.SOLUCIONES.children.PERSONAR_DE_SEGURIDAD.section)},
                            {text: 'Recorridos Preventivos', action: () => {}},
                        ]}
                        style={mobileStyles.links}
                    />
                    <MenuDesplegableMobile
                        title='Empresa'
                        items={[
                            {text: 'Qué Hacemos', action: () => handleNavigate(routes.EMPRESA.url, routes.EMPRESA.section)},
                            {text: 'Por qué lo Hacemos', action: () => handleNavigate(seccionesNoMapeables.POR_QUE_LO_HACEMOS.url, seccionesNoMapeables.POR_QUE_LO_HACEMOS.section)},
                            {text: 'Nuestra Historia', action: () => handleNavigate(seccionesNoMapeables.NUESTRA_HISTORIA.url, seccionesNoMapeables.NUESTRA_HISTORIA.section)},
                            {text: 'Contacto', action: () => handleNavigate(routes.CONTACTO.url, routes.CONTACTO.section)},
                        ]}
                        style={mobileStyles.links}
                    />
                </Grid>
                <Grid container gap={2} sx={{marginTop:'20px'}}>
                    <Grid container alignItems='center' gap={2}>
                        <LocalPhone sx={mobileStyles.contactIcons}/>
                        <Typography sx={mobileStyles.contactText}>02255 46-0606</Typography>
                    </Grid>
                    <Grid container alignItems='center' gap={2}>
                        <WhatsApp sx={mobileStyles.contactIcons}/>
                        <Typography sx={mobileStyles.contactText}>11 2376-9822</Typography>
                    </Grid>
                    <Grid container alignItems='center' gap={2}>
                        <LocalPostOffice sx={mobileStyles.contactIcons}/>
                        <Typography sx={mobileStyles.contactText}>
                            ventas@gesellseguridad.com.ar
                        </Typography>
                    </Grid>
                    <Grid container alignItems='center' gap={2}>
                        <LocationOn sx={mobileStyles.contactIcons}/>
                        <Typography sx={mobileStyles.contactText}>
                            Av. 5 803, 7165 Villa Gesell, Buenos Aires
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent='center' gap={2} sx={{marginTop:'40px'}}>
                    <Icons />
                </Grid>
                <Grid container justifyContent='center' sx={{marginTop:'30px'}}>
                    <Typography sx={{color: colors.white, fontSize: '6pt', textAlign:'center'}}>
                        Copyright © 2024 Gesell Seguridad S.A. Todos los derechos reservados.
                    </Typography>
                </Grid>
            </Grid>
            
            {/* DESKTOP */}
            <Grid item xs={0} md={12} sx={{display:{xs:'none', md:'block'}}}>
                <Grid container>
                    <Grid item xs={2.25}>
                        <Typography sx={desktopStyles.title}>Soluciones para tu Hogar</Typography>
                        <Typography sx={desktopStyles.links} onClick={()=>handleNavigate(routes.SOLUCIONES.children.AJAX.url, routes.SOLUCIONES.children.AJAX.section)}>Alarma Ajax</Typography>
                        <Typography sx={desktopStyles.links} onClick={()=>handleNavigate(routes.SOLUCIONES.children.RISCO.url, routes.SOLUCIONES.children.RISCO.section)}>Alarma Risco</Typography>
                        <Typography sx={desktopStyles.links} onClick={()=>handleNavigate(routes.PRODUCTOS.url, routes.PRODUCTOS.section)}>Accesorios de Seguridad</Typography>
                        <Typography sx={desktopStyles.links} onClick={()=>handleNavigate(routes.SOLUCIONES.children.SMART_PANICS.url, routes.SOLUCIONES.children.SMART_PANICS.section)}>Smart Panics App</Typography>
                    </Grid>
                    <Grid item xs={2.25}>
                        <Typography sx={desktopStyles.title}>Soluciones Vecinales</Typography>
                        <Typography sx={desktopStyles.links}  onClick={()=>handleNavigate(seccionesNoMapeables.AJAX_VECINAL.url, seccionesNoMapeables.AJAX_VECINAL.section)}>Alarma Ajax Vecinal</Typography>
                        <Typography sx={desktopStyles.links} onClick={()=>handleNavigate(seccionesNoMapeables.RISCO_VECINAL.url, seccionesNoMapeables.RISCO_VECINAL.section)}>Alarma Risco Vecinal</Typography>
                        <Typography sx={desktopStyles.links} onClick={()=>handleNavigate(seccionesNoMapeables.RECORRIDO_PREVENTIVOS.url, seccionesNoMapeables.RECORRIDO_PREVENTIVOS.section)}>Recorridos Preventivos</Typography>
                    </Grid>
                    <Grid item xs={2.5}>
                        <Typography sx={desktopStyles.title} >Soluciones para tu Comercio</Typography>
                        <Typography sx={desktopStyles.links} onClick={()=>handleNavigate(routes.SOLUCIONES.children.AJAX.url, routes.SOLUCIONES.children.AJAX.section)}>Alarma Ajax</Typography>
                        <Typography sx={desktopStyles.links} onClick={()=>handleNavigate(routes.SOLUCIONES.children.RISCO.url, routes.SOLUCIONES.children.RISCO.section)}>Alarma Risco</Typography>
                        <Typography sx={desktopStyles.links} onClick={()=>handleNavigate(routes.SOLUCIONES.children.PERSONAR_DE_SEGURIDAD.url, routes.SOLUCIONES.children.PERSONAR_DE_SEGURIDAD.section)}>Personal de Seguridad</Typography>
                        <Typography sx={desktopStyles.links} onClick={()=>handleNavigate(seccionesNoMapeables.RECORRIDO_PREVENTIVOS.url, seccionesNoMapeables.RECORRIDO_PREVENTIVOS.section)}>Recorridos Preventivos</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography sx={desktopStyles.title}>Empresa</Typography>
                        <Typography sx={desktopStyles.links} onClick={()=>handleNavigate(routes.EMPRESA.url, routes.EMPRESA.section)}>Qué Hacemos</Typography>
                        <Typography sx={desktopStyles.links} onClick={()=>handleNavigate(seccionesNoMapeables.POR_QUE_LO_HACEMOS.url, seccionesNoMapeables.POR_QUE_LO_HACEMOS.section)}>Por qué lo Hacemos</Typography>
                        <Typography sx={desktopStyles.links} onClick={()=>handleNavigate(seccionesNoMapeables.NUESTRA_HISTORIA.url, seccionesNoMapeables.NUESTRA_HISTORIA.section)}>Nuestra Historia</Typography>
                        <Typography sx={desktopStyles.links} onClick={()=>handleNavigate(routes.CONTACTO.url, routes.CONTACTO.section)}>Contacto</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid container alignItems='flex-end' justifyContent={{xs:'center', md:'flex-start'}} gap={1} sx={{marginBottom:'15px'}}>
                            <LocalPhone sx={desktopStyles.contactIcons}/>
                            <Typography sx={desktopStyles.contactText}>02255 46-0606</Typography>
                        </Grid>
                        <Grid container alignItems='flex-end' justifyContent={{xs:'center', md:'flex-start'}} gap={1} sx={{marginBottom:'15px'}}>
                            <WhatsApp sx={desktopStyles.contactIcons}/>
                            <Typography sx={desktopStyles.contactText}>11 2376-9822</Typography>
                        </Grid>
                        <Grid container alignItems='flex-end' justifyContent={{xs:'center', md:'flex-start'}} gap={1} sx={{marginBottom:'15px'}}>
                            <LocalPostOffice sx={desktopStyles.contactIcons}/>
                            <Typography sx={desktopStyles.contactText}>
                                ventas@gesellseguridad.com.ar
                            </Typography>
                        </Grid>
                        <Grid container alignItems='flex-end' justifyContent={{xs:'center', md:'flex-start'}} gap={1} sx={{marginBottom:'15px'}}>
                            <LocationOn sx={desktopStyles.contactIcons}/>
                            <Typography sx={desktopStyles.contactText}>
                                Av. 5 803, 7165 Villa Gesell, Buenos Aires
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container sx={{marginTop:'30px'}}>
                    <Grid item xs={9}>
                        <Typography sx={{color: colors.white, fontSize: '8pt'}}>
                            Copyright © 2024 Gesell Seguridad S.A. Todos los derechos reservados.
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{display:'flex', justifyContent:'center', gap:'15px'}}>
                        <Icons />
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Footer