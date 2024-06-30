//Mui:
import { Grid } from "@mui/material"
//Components:
import CardPaquete from "../Cards/CardPaquete"
import LittleSlider from "../Sliders/LittleSlider/LittleSlider"

const SliderPaquetes = ({ paquetes }) => {
    
    return (
        <Grid sx={{display:'flex', gap:'10px', justifyContent:'center', flexWrap:'wrap'}}>
            <LittleSlider 
                autoplay={true} 
                interval={4000}
                data={paquetes?.map(it => <CardPaquete data={it} width={'350px'} height={'420px'} />)}
            />
        </Grid>
    )
}

export default SliderPaquetes