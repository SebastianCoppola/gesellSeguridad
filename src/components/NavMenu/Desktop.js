import { useEffect, useState } from "react"
//Utils:
import { colors, defaultStyles } from "../../utils/const"
import { getColorByRoute } from "../../utils/utils"
import { routes } from '../../utils/routes'
//Hooks:
import { useHistory } from "../../hooks/useHistory"
//Mui:
import { AppBar, Grid, Menu, Typography } from "@mui/material"
import { KeyboardArrowDown } from "@mui/icons-material"
//Components:
import Logo from "./Logo"

const MenuDesplegableDesktop = ({ routes, handleClick, style, textColor }) => {

    const [openMenu, setOpenMenu] = useState(null)

    return (
        <>
            <KeyboardArrowDown 
                onClick={ e => setOpenMenu(openMenu ? null : e.currentTarget) }
                sx={{
                    color: openMenu !== null ? colors.orange : textColor,
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

const Desktop = ({ handleNavigate }) => {

    const { rutaActual } = useHistory()

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

    const handleClick = (url, section) => {
        handleNavigate(url, section)
    }

    const styles = {
        linksPc: {
            color: textColor,
            fontSize: '9pt',
            cursor: 'pointer',
            display: 'flex',
        }
    }

    return (
        <AppBar sx={{
            boxShadow: 'none', 
            background: background, 
            height: defaultStyles.appbarHeight,
            transition: 'background 0.2s ease-in-out', 
            padding:'10px 15px',
        }}>
            <Grid container sx={{padding:'0 20px', height:'100%'}}>
                <Grid item xs={4} sx={{height: '100%'}} container alignItems='center'>
                    <Logo handleClick={handleClick} textColor={textColor} />
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
                                    textColor={textColor}
                                /> 
                            )}
                        </Grid>
                    ))}
                </Grid> 
            </Grid>
        </AppBar>
    )
}

export default Desktop