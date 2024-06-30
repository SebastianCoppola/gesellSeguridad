//Mui:
import { Grid, Typography } from "@mui/material"
//Components:
import CustomButon from "../CustomButton/CustomButton"
import SliderPaquetes from "./SliderPaquetes"
//Utils:
import { colors } from "../../utils/const"


const PaquetePersonalizado = ({ title, text1, text2, labelButton, paquetes }) => {
    
    return (
        <Grid container justifyContent='center' gap={3} sx={{background: colors.greyBackground, padding:'35px 0px'}}>
            <Grid item xs={11}>
                <Typography sx={{fontSize: { xs:'20pt', md: '32pt' }}}>
                   {title}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <SliderPaquetes paquetes={paquetes} />
            </Grid>
            <Grid item xs={11}>
                <Grid container direction='column' alignItems='center' gap={2}>
                    <Typography sx={{fontSize: {xs:'14pt', md:'16pt'}, textAlign:'center'}}>
                        {text1}
                    </Typography>
                    <Typography sx={{fontSize: {xs:'14pt', md:'16pt'}, fontWeight:700, textAlign:'center'}}>
                        {text2}
                    </Typography>
                    <CustomButon 
                        label={labelButton}
                        fontSize='13pt'
                        onClick={()=>console.log('hola!')}
                        variant='contained'
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PaquetePersonalizado