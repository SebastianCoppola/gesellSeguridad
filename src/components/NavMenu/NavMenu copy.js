import { useEffect, useState } from "react"
//Mui:
import { AppBar, Grid, Menu, Typography } from "@mui/material"
import { KeyboardArrowDown, Menu as MenuIcon } from "@mui/icons-material"
//Utils:
import { colors, defaultStyles } from "../../utils/const"
import { routes } from '../../utils/routes'
//Hooks:
import { useHistory } from "../../hooks/useHistory"
//Assets:
import logoBlack from '../../assets/logos/logo2.png'

const MenuDesplegableDesktop = ({ routes, handleClick, style, linksColors }) => {

    const [openMenu, setOpenMenu] = useState(null)

    return (
        <>
            <KeyboardArrowDown 
                onClick={ e => setOpenMenu(openMenu ? null : e.currentTarget) }
                sx={{
                    color: openMenu !== null ? colors.orange : linksColors,
                    fontSize: '20px',
                    cursor: 'pointer',    
                    margin: '0 0 0 10px',
                    transform: openMenu !== null ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease-in-out',
                }} 
            />
            <Menu
                elevation={0}
                anchorEl={openMenu}
                open={openMenu !== null}
                onClose={() => setOpenMenu(null)}
                sx={{
                    marginLeft:'-105px',
                    marginTop:'12px',
                    '.MuiPaper-root': {
                        background: 'white',
                    }
                }}
            >
                <Grid sx={{display:'flex', flexDirection:'column', gap:'5px', padding:'5px 15px'}}>
                    {Object.entries(routes).map(([key, route])=>(
                        <Typography 
                            key={key}    
                            sx={{...style, color: colors.black}} 
                            onClick={() => {
                                setOpenMenu(null)                                
                                handleClick(route.url, route.section)
                            }}
                        >
                            {route.title}
                        </Typography>
                    ))}
                </Grid>
            </Menu>
        </>
    )
}

const MenuDesplegableMobile = ({ routes, handleClick, style }) => {

    const [openMenu, setOpenMenu] = useState(null)

    return (
        <>
            <Grid item sx={{display:'flex', alignItems:'center'}}>
                <KeyboardArrowDown 
                    onClick={ () => setOpenMenu(!openMenu) }
                    sx={{
                        ...style,
                        marginLeft:'20px',
                        color: openMenu ? colors.orange : colors.black,
                        transform: openMenu ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease-in-out',
                    }} 
                />
            </Grid>
            <Grid item container>
                { openMenu && (
                    <Grid container direction='column'>
                        {Object.entries(routes).map(([key, route])=>(
                            <Typography 
                                key={key}    
                                sx={style} 
                                onClick={() => {
                                    setOpenMenu(false)                                
                                    handleClick(route.url, route.section)
                                }}
                            >
                                {route.title}
                            </Typography>
                        ))}
                    </Grid>
                )}
            </Grid>
        </>
    )
}

const NavMenu = () => {

    const { navigateTo, rutaActual } = useHistory()

    const [openMenuCell, setOpenMenuCell] = useState(false)
    const [background, setBackground] = useState(colors.transparent)
    const [linksColors, setLinkColors] = useState(colors.white)
    const [logo, setLogo] = useState(logoBlack)

    useEffect(() => {
        let handleScroll = () => {
            let offset = window.scrollY
            if (offset > 0) {
                setBackground(colors.white)
                setLinkColors(colors.black)
                setLogo(logoBlack)
            }else{
                setBackground(colors.transparent)
                handleTextColorSelection()
            } 
        }
        window.addEventListener('scroll', handleScroll)
        return () => { window.removeEventListener('scroll', handleScroll) }
    }, [])

    useEffect(() => {
        handleTextColorSelection()
    },[rutaActual])

    const handleTextColorSelection = () => {
        let whiteRoutes = [
            '',
            routes.SOLUCIONES.children.SMART_PANICS.url,
            routes.SOLUCIONES.children.RISCO.url,
            routes.SOLUCIONES.children.AJAX.url,
            routes.SOLUCIONES.children.CUSTODIAS.url,
            routes.SOLUCIONES.children.MONITOREO_FLOTA.url,
            routes.SOLUCIONES.children.CUSTODIAS.url,
        ]
        let blackRoutes = [
            routes.EMPRESA.url,
            routes.CONTACTO.url,
            routes.TIPS.url,
            routes.SOLUCIONES.children.SMART_HOME.url
        ]
        let color = whiteRoutes.includes(rutaActual) ? colors.white
            : blackRoutes.includes(rutaActual) ? colors.black
            : colors.white
        setLinkColors(color)
        setLogo(color === colors.black ? logoBlack : logoBlack)
    }

    const styles = {
        linksPc: {
            color: linksColors,
            fontSize: '9pt',
            cursor: 'pointer',
            display: 'flex',
        },
        linksCelu: {
            color: colors.black,
            fontSize: '18pt',
            cursor: 'pointer',
            marginBottom: '20px'
        },
    }

    const handleClick = (url, idSection) => {
        //Close Menu:
        setOpenMenuCell(false)
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

    const handleOpenMenuCell = () => {
        setBackground(openMenuCell ? colors.transparent : colors.white)
        setLinkColors(openMenuCell ? colors.black : colors.white)
        setOpenMenuCell(!openMenuCell)
    }

    const logoCompo = (
        <Grid container alignItems='center' onClick={()=>handleClick('/', null)}>
            <img 
                src={logo} 
                alt='gesell-seguridad' 
                style={{
                    width:'40px', 
                    height:'40px', 
                    marginRight:'10px', 
                    ...(background === colors.transparent ? {
                        boxShadow: '0 0 10px #FFE2CD, 0 0 20px #FFE2CD, 0 0 30px #FFE2CD, 0 0 40px #FFE2CD',
                        borderRadius: '50px',
                        padding: '1px',
                        background: colors.white,
                    } : {})
                }} 
            />
            <Typography sx={{
                display: {xs:'none', md:'block'},
                color: linksColors,
                fontSize: '10pt',
                cursor: 'pointer'
            }}>GESELL SEGURIDAD</Typography>
        </Grid>
    )

    return (
        <AppBar sx={{background, boxShadow: 'none', transition: 'background 0.2s ease-in-out', maxWidth:'100%'}}>
            <Grid container sx={{height: defaultStyles.appbarHeight, maxWidth:'100%'}}>
                
                {/* CELULAR */}
                <Grid item xs={12} md={0} sx={{display:{xs:'block', md:'none'}, height:'100%', maxWidth:'100%'}}>
                    <Grid container sx={{height:'100%'}}>

                        <Grid item xs={12} container justifyContent='space-between' sx={{height:'100%', maxWidth:'100%', padding:'0 15px'}}>
                            <Grid item sx={{height:'100%', display: 'flex', alignItems: 'center'}}>
                                {logoCompo}
                            </Grid>
                            <Grid item sx={{height:'100%', display: 'flex', alignItems: 'center'}} >
                                <MenuIcon 
                                    fontSize='large' 
                                    sx={{color: linksColors}}
                                    onClick={handleOpenMenuCell}
                                />
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sx={{
                            padding:'0 15px',
                            background: colors.white,
                            height: openMenuCell ? '100vh' : '0', 
                            transition: 'height 0.7s ease-in-out', 
                            overflow: 'hidden' 
                        }}>
                            <Grid container direction='column' sx={{marginTop:'20px'}}>
                                {Object.entries(routes).map(([key, route]) => (
                                    <Grid key={key} item xs={12} container alignItems='center'>
                                        <Grid item sx={{display:'flex', alignItems:'center'}}>
                                            <Typography 
                                                sx={styles.linksCelu} 
                                                onClick={() => handleClick(route.url, route.section)}
                                            >
                                                {route.title}
                                            </Typography>
                                        </Grid>
                                        {route.children && (
                                            <MenuDesplegableMobile
                                                routes={route.children} 
                                                handleClick={handleClick}
                                                style={styles.linksCelu}
                                            /> 
                                        )}
                                    </Grid>
                                ))}
                            </Grid> 
                        </Grid>

                    </Grid>
                </Grid>

                {/* DESKTOP */}
                <Grid item xs={0} md={12} sx={{display:{xs:'none', md:'block'}, height:'100%'}}>
                    <Grid container sx={{padding:'0 20px', height:'100%'}}>
                        <Grid item xs={4} sx={{height: '100%'}} container alignItems='center'>
                            {logoCompo}
                        </Grid>
                        <Grid item xs={8} sx={{height: '100%'}} container alignItems='center' justifyContent='flex-end' gap={3}>
                            {Object.entries(routes).map(([key, route]) => (
                                <Grid item sx={{display:'flex', alignItems:'center'}} key={key}>
                                    <Typography 
                                        sx={styles.linksPc} 
                                        onClick={() => handleClick(route.url, route.section)}
                                    >
                                        {route.title}
                                    </Typography>
                                    {route.children && (
                                        <MenuDesplegableDesktop 
                                            routes={route.children} 
                                            handleClick={handleClick}
                                            style={styles.linksPc}
                                            linksColors={linksColors}
                                        /> 
                                    )}
                                </Grid>
                            ))}
                        </Grid> 
                    </Grid>
                </Grid>                        
                
            </Grid>
        </AppBar>
    )
}

export default NavMenu