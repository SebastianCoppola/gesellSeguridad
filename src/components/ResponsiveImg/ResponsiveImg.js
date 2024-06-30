//Mui:
import { Grid, useMediaQuery, useTheme } from "@mui/material"

const ResponsiveImg = ({imgCell, imgDesk, alt, onClick}) => {
    
    const theme = useTheme()
    const isXs = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Grid container sx={{maxWidth:'100%', overflow:'hidden'}}>
            <img 
                src={isXs ? imgCell : imgDesk} 
                alt={alt}
                style={{
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    objectPosition: 'center',
                }}
                onClick={onClick ?? null}
            />
        </Grid>
    )
}

export default ResponsiveImg