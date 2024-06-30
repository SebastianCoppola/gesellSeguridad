//Mui:
import { Grid, Typography } from "@mui/material"
//Utils:
import { colors } from "../../utils/const"
//Assets:
import logoBlack from '../../assets/logos/logo2.png'
import logoWhite from '../../assets/logos/logo1.png'

const Logo = ({ handleClick, textColor }) => {
        
    return (
        <Grid container alignItems='center' onClick={()=>handleClick('/', null)}>
            <img 
                src={textColor === colors.black ? logoBlack : logoWhite} 
                alt='gesell-seguridad' 
                style={{
                    width:'40px', 
                    height:'40px', 
                    marginRight:'10px', 
                }} 
            />
            <Typography sx={{
                display: {xs:'none', md:'block'},
                color: textColor,
                fontSize: '10pt',
                cursor: 'pointer'
            }}>GESELL SEGURIDAD</Typography>
        </Grid>
    )
}

export default Logo