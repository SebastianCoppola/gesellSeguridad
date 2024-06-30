//Compoenents:
import { Grid } from "@mui/material"
//Components:
import LittleSlider from "../../components/Sliders/LittleSlider/LittleSlider"
import CardProducto from "../../components/Cards/CardProducto"
//Data:
import { dataProductos } from "./dataProductos"

const ProductosSlider = () => {

    return (
        <Grid container>
            <LittleSlider 
                autoplay={false} 
                interval={null} 
                data={dataProductos?.map( it => <CardProducto data={it} width={'300px'} height={'400px'} />)}
            />
        </Grid>
    )
}

export default ProductosSlider