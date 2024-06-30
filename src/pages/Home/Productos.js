//Compoenents:
import { Grid, Typography } from "@mui/material"
//Components:
import CardProducto from "../../components/Cards/CardProducto"
//Data:
import { dataProductos } from "./dataProductos"
import { routes } from "../../utils/routes"
import { colors } from "../../utils/const"

const Productos = () => {
    return (
        <Grid container justifyContent='center' gap={5} sx={{
            background: colors.greyBackground,
            padding: {xs:'10px 0', md:'25px 0'}
        }}>
            <section id={routes.PRODUCTOS.section}/>
            <Grid item xs={11}>
                <Typography sx={{fontSize: {xs:'16pt', md:'24pt'}, fontWeight:700}}>
                    Adquirí Productos por Separado
                </Typography>
            </Grid>
            <Grid item xs={12} md={11} container justifyContent='center' gap={4}>
                {dataProductos.map((it, index) => (
                    <Grid item xs={11} md={5} container>
                        <CardProducto data={it}/>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default Productos