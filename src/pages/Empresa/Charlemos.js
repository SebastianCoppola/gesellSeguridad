//Mui:
import { Grid, Typography } from "@mui/material"
//Utils:
import { colors } from "../../utils/const"
import { whatsApp } from "../../utils/utils"
//Components:
import CustomButon from "../../components/CustomButton/CustomButton"

const Charlemos = () => {

    return (
        <Grid container gap={4} sx={{background:colors.lightOrange, borderRadius:'25px', padding:'20px'}}>
            <Grid item xs={12} container justifyContent='center'>
                <Typography sx={{fontSize:'1.5rem', fontWeight:700, textAlign:'center'}}>¿Alguna duda? Charlemos</Typography>
            </Grid>
            <Grid item xs={12} container justifyContent='center' gap={2}>
                <CustomButon
                    label='11 2376-9822'
                    variant='outlined'
                    onClick={() => whatsApp()}
                    fontSize={{xs:'10pt', md:'13pt'}}
                    style={{width: {xs: '70%', md: '35%'}}}
                />
                <CustomButon
                    label='CHATEÁ CON NOSOTROS'
                    variant='contained'
                    onClick={() => whatsApp()}
                    fontSize={{xs:'10pt', md:'13pt'}}
                    style={{width: {xs: '70%', md: '35%'}}}
                />
            </Grid>
            <Grid item xs={12} container justifyContent='center'>
                <Typography sx={{fontSize:'1rem', textAlign:'center'}}>
                    O mandanos un mail a <b>ventas@gesellseguridad.com.ar</b>.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Charlemos