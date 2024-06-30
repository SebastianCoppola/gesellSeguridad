//Mui:
import { Grid, useMediaQuery, useTheme } from "@mui/material"
import VideoPlayer from "./VideoPlayer"

const ResponsiveVideo = ({vidCell, vidDesk, onClick, autoplay, hideControl, loop}) => {
    
    const theme = useTheme()
    const isXs = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Grid container sx={{maxWidth:'100%', overflow:'hidden'}} onClick={onClick}>
            <VideoPlayer 
                src={isXs ? vidCell : vidDesk} 
                autoplay={autoplay} 
                hideControl={hideControl}
                videoStyle={{}}
                loop={loop}
            />
        </Grid>
    )
}

export default ResponsiveVideo