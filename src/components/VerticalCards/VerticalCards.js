import { Grid, Typography } from "@mui/material"

const VerticalCards = ({ data }) => {
    return (
        <Grid container justifyContent='center' alignItems='flex-start' gap={{xs: 0, md: 3}}>
            {data.map((it, index)=>(
                <Grid key={index} item xs={8} md={3} container gap={2} sx={{padding:'20px'}}>
                    <Grid item xs={12} container justifyContent='center' sx={{height:'80px'}}>
                        <img src={it.icon} alt='icons' style={{height:'100%', widht:'100%'}}/>, 
                    </Grid>
                    <Grid item xs={12} container justifyContent='center'>
                        <Typography sx={{fontSize: {xs:'12pt', md:'16pt'}, textAlign: 'center', fontWeight:700}}>
                            {it.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container justifyContent='center'>
                        <Typography sx={{fontSize: {xs:'10pt', md:'13pt'}, textAlign: 'center'}}>
                            {it.text}
                        </Typography>
                    </Grid>
                </Grid>
            ))}
        </Grid>
    )
}

export default VerticalCards