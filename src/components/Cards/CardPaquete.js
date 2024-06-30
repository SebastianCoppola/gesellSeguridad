//Mui:
import { Grid, Typography } from "@mui/material"
//Utils:
import { colors } from '../../utils/const'
//Components:
import CustomButon from "../CustomButton/CustomButton"

const CardPaquete = ({ data, height, width }) => {
    return (
        <Grid width={width} height={height} bgcolor={colors.white} sx={{
            borderRadius:'25px',
            boxShadow:'1px 1px 7px grey',
            padding:'20px 25px',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between',
        }}>
            <Grid container gap={2}>
                <Grid item xs={12}>
                    <img src={data.img} alt='icon' style={{height:'60px'}}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{fontWeight: 700, fontSize: {xs:'13pt', md:'15pt'}}}>
                        {data.title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container gap={1}>
                        {data.items?.map((it, index) => (
                            <Grid key={index} item xs={12} sx={{display:'flex', gap:'10px', alignItems:'flex-start'}}>
                                {it.number && (
                                    <Typography sx={{
                                        fontWeight:700, 
                                        fontSize: {xs:'10pt', md:'12pt'}
                                    }}>
                                        {it.number}
                                    </Typography>
                                )}
                                {it.text && (
                                    <Typography sx={{
                                        fontSize:{xs:'10pt', md:'12pt'}, 
                                        ...(it.color && {color: it.color, fontWeight:700})
                                    }}>
                                        {it.text}
                                    </Typography>
                                )}
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                {data.secondButtonLabel && (
                    <Grid>
                        <CustomButon 
                            label={data.secondButtonLabel}
                            fontSize={{xs:'8pt',md:'10pt'}}
                            onClick={data.secondButtonAction} 
                            variant='contained'
                            style={{borderRadius:'25px'}}
                        />  
                    </Grid>
                )}
            </Grid>
            <Grid container justifyContent='space-between'>
                <Grid item>
                    {data.price && (
                        <Typography sx={{fontWeight:700, fontSize:{xs:'10pt', md:'12pt'}}}>
                            {data.price}
                        </Typography>
                    )}
                </Grid>
                <Grid item>
                    {data.buttonLabel && (
                        <Typography onClick={data.buttonAction} sx={{
                            fontWeight: 700, 
                            fontSize: {xs: '10pt', md: '12pt'}, 
                            color: colors.orange,
                            cursor: 'pointer',
                            ':hover': {opacity: '0.8'}
                        }}>{data.buttonLabel}</Typography>  
                    )}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CardPaquete