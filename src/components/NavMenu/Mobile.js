import { useEffect, useState } from "react"
//Mui:
import { AppBar, Grid, Typography } from "@mui/material"
import { KeyboardArrowDown, Menu as MenuIcon } from "@mui/icons-material"
//Utils:
import { colors, defaultStyles } from "../../utils/const"
import { getColorByRoute } from "../../utils/utils"
import { routes } from '../../utils/routes'
//Hooks:
import { useHistory } from "../../hooks/useHistory"
//Components:
import Logo from "./Logo"

const MenuDesplegableMobile = ({ routes, handleClick, style }) => {

    const [openMenu, setOpenMenu] = useState(null)

    return (
        <>
            <Grid sx={{display:'flex', alignItems:'center'}}>
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
            { openMenu && (
                <Grid container direction='column' gap={3} sx={{marginTop:'20px'}}>
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
        </>
    )
}

const Mobile = ({ handleNavigate }) => {

    const { rutaActual } = useHistory()

    const [openMenu, setOpenMenu] = useState(false)
    const [background, setBackground] = useState(colors.transparent)
    const [textColor, setTextColor] = useState(colors.white)

    useEffect(() => {
        let handleScroll = () => {
            let offset = window.scrollY
            if (offset > 0) {
                setBackground(colors.white)
                setTextColor(colors.black)
            }else{
                setBackground(colors.transparent)
                setTextColor(getColorByRoute(rutaActual))
            } 
        }
        window.addEventListener('scroll', handleScroll)
        return () => { window.removeEventListener('scroll', handleScroll) }
    }, [])

    useEffect(() => {
        setBackground(colors.transparent)
        setTextColor(getColorByRoute(rutaActual))
    },[rutaActual])

    const handleOpenMenuCell = () => {
        setBackground(openMenu ? (window.scrollY > 0 ? colors.white : colors.transparent) : colors.white)
        setTextColor(openMenu ? getColorByRoute(rutaActual) : colors.black)
        setOpenMenu(!openMenu)
    }
    
    const handleClick = (url, section) => {
        setOpenMenu(false)
        handleNavigate(url, section)
    }

    const styles = {
        linksCelu: {
            color: colors.black,
            fontSize: '18pt',
            cursor: 'pointer',
        },
    }

    return (
        <AppBar sx={{
            boxShadow: 'none', 
            background: background, 
            height: openMenu ? '100vh' : defaultStyles.appbarHeight,
            overflow:'hidden',
            transition: openMenu ? 'height 0.7s ease-in-out' : 'background 1s ease-in-out, height 0.4s ease-in-out', 
        }}>
            <Grid container justifyContent='space-between' sx={{background, padding:'10px 15px'}}>
                <Grid item sx={{height:'100%', display: 'flex', alignItems: 'center'}}>
                    <Logo handleClick={handleClick} textColor={textColor}/>
                </Grid>
                <Grid item sx={{height:'100%', display: 'flex', alignItems: 'center'}} >
                    <MenuIcon 
                        fontSize='large' 
                        sx={{color: textColor}}
                        onClick={handleOpenMenuCell}
                    />
                </Grid>
            </Grid>
            <Grid container direction='column' gap={4} sx={{marginTop:'40px', padding:'10px 15px'}}>
                {Object.entries(routes).map(([key, route]) => (
                    <Grid item container key={key}>
                        <Typography 
                            sx={styles.linksCelu} 
                            onClick={() => handleClick(route.url, route.section)}
                        >
                            {route.title}
                        </Typography>
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
        </AppBar>
    )
}

export default Mobile