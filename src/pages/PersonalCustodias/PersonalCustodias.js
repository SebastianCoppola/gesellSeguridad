//Mui:
import { Grid } from "@mui/material"
//Utils:
import { routes } from "../../utils/routes"
//Components:
import ResponsiveImg from "../../components/ResponsiveImg/ResponsiveImg"
import PaquetePersonalizado from "../../components/PaquetePersonalizado/PaquetePersonalizado"
//Data:
import { dataPaquetes } from "../../components/PaquetePersonalizado/dataPaquetes"
//Assets:
import img1cell from '../../assets/personalSeguridad/01_cell.jpg'
import img1desk from '../../assets/personalSeguridad/01_desk.jpg'
import img2cell from '../../assets/personalSeguridad/02_cell.jpg'
import img2desk from '../../assets/personalSeguridad/02_desk.jpg'
import img3cell from '../../assets/personalSeguridad/03_cell.jpg'
import img3desk from '../../assets/personalSeguridad/03_desk.jpg'

const PersonalCustodias = () => {

    return (
        <Grid container gap={2}>
            {/* Personal de Seguridad */}           
            <Grid item xs={12}>
                <section id={routes.SOLUCIONES.children.PERSONAR_DE_SEGURIDAD.section}/>
                <ResponsiveImg 
                    imgCell={img1cell}
                    imgDesk={img1desk}
                    alt={'img'}
                />                
            </Grid>
            <Grid item xs={12}>
                <ResponsiveImg 
                    imgCell={img2cell}
                    imgDesk={img2desk}
                    alt={'img'}
                />                
            </Grid>
            <Grid item xs={12}>
                <PaquetePersonalizado 
                    title='Nuestros Planes'                       
                    text1='¿No encontrás el paquete que necesitas? '
                    text2='Ayudanos a diseñar uno personalizado para vos'
                    labelButton='COMENZAR'
                    paquetes={[
                        dataPaquetes.SEGURIDAD_INDIVIDUAL,
                        dataPaquetes.SEGURIDAD_COMPARTIDA,
                        dataPaquetes.SEGURIDAD_BARRIO,
                    ]} 
                />
            </Grid>
            {/* Custodios Especiales */}
            <Grid item xs={12}>
                <section id={routes.SOLUCIONES.children.CUSTODIAS.section}/>
                <ResponsiveImg 
                    imgCell={img3cell}
                    imgDesk={img3desk}
                    alt={'img'}
                />                
            </Grid>
        </Grid>
    )
}

export default PersonalCustodias