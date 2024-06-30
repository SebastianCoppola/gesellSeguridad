//Mui:
import { Grid, Typography } from "@mui/material"
//Utils:
import { colors } from '../../utils/const'

const CardProducto = ({ data, height, width }) => {
    return (
        <Grid width={width} height={height} bgcolor={colors.white} sx={{
            borderRadius:'25px',
            boxShadow:'1px 1px 7px grey',
            padding:'20px 25px',
            display:'flex',
            gap:'10px',
            flexDirection:'column',
            justifyContent:'space-between',
        }}>
            <Grid container gap={1}>
                <Grid item xs={12} container justifyContent='center'>
                    <img src={data.img} alt='icon' style={{height:'140px'}}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{fontSize: {xs:'13pt', md:'15.5pt'}, textAlign:'center'}}>
                        {data.title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{fontSize: {xs:'13pt', md:'13.7pt'}, textAlign:'center'}}>
                        {data.subtitle}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Typography 
                    onClick={data.buttonAction}
                    sx={{
                        width:'100%',
                        fontWeight:700, 
                        textAlign:'center',
                        fontSize:{xs:'10pt', md:'15.5pt'}, 
                        color: colors.orange, 
                        cursor:'pointer',
                        marginBottom:'20px'
                    }}
                >
                    {data.buttonLabel}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default CardProducto