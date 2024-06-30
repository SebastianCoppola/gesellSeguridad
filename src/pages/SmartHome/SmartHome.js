//Mui:
import { Grid, Typography } from "@mui/material"
//Componentes:
import ResponsiveVideo from "../../components/VideoPlayer/ResponsiveVideo"
//Assets:
import img1cell from '../../assets/smartHome/01_cell.mp4'
import img1desk from '../../assets/smartHome/01_desk.mp4'
import img2cell from '../../assets/smartHome/02_cell.jpg'
import img2desk from '../../assets/smartHome/02_desk.jpg'
import img3cell from '../../assets/smartHome/03_cell.jpg'
import img3desk from '../../assets/smartHome/03_desk.jpg'
import img4desk from '../../assets/smartHome/04_desk.jpg'
import ResponsiveImg from "../../components/ResponsiveImg/ResponsiveImg"
import { colors } from "../../utils/const"
import CustomButon from "../../components/CustomButton/CustomButton"

const SmartHome = () => {
    return (
        <Grid container justifyContent='center' alignItems='flex-start'>
            <Grid item xs={12}>
                <ResponsiveVideo 
                    vidCell={img1cell}
                    vidDesk={img1desk}
                    onClick={()=>{}}
                    autoplay={true}
                    hideControl={true}
                    loop={true}
                />
            </Grid>
            <Grid item xs={12}>
                <ResponsiveImg 
                    imgCell={img2cell}
                    imgDesk={img2desk}
                    alt='img'
                    onClick={()=>{}}
                />
            </Grid>
            <Grid item xs={12}>
                <ResponsiveImg 
                    imgCell={img3cell}
                    imgDesk={img3desk}
                    alt='img'
                    onClick={()=>{}}
                />
            </Grid>
            <Grid item xs={0} md={12} sx={{display:{xs:'none', md:'block'}}}>
                <ResponsiveImg 
                    imgDesk={img4desk}
                    alt='img'
                    onClick={()=>{}}
                />
            </Grid>
            <Grid item xs={12} container gap={5} sx={{padding:'40px 0 70px 0', background: colors.black}}>
                <Grid item xs={12} container justifyContent='center'>
                    <Typography sx={{fontSize:{xs:'16pt', md:'24pt'}, fontWeight:700, color:colors.white, textAlign:'center'}}>
                        ¡Hacé tu vida más fácil con un hogar inteligente!
                    </Typography>
                </Grid>
                <Grid item xs={12} container justifyContent='center'>
                    <CustomButon 
                        onClick={()=>{}}
                        label='COMENZAR'
                        variant='contained'
                        fontSize={{xs:'10pt', md:'13pt'}}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SmartHome