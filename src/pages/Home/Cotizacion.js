import { useState } from "react"
//Mui:
import { Grid, TextField, Typography } from "@mui/material"
//Components:
import CustomButon from "../../components/CustomButton/CustomButton"
//Utils:
import { colors } from "../../utils/const"
import { whatsApp } from "../../utils/utils"
import { ErrorOutline } from "@mui/icons-material"

const Cotizacion = () => {

    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [error, setError] = useState(false)

    const sendWhatsApp = () => {
        if(nombre && descripcion){
            setError(false)
            let mensaje = `Hola! Soy ${nombre} y estoy interesado en ${descripcion}.`
            whatsApp(mensaje)
        }else{
            setError(true)
        }
    }

    return (
        <Grid container spacing={2} alignItems='center' gap={{xs: 2, md: 0}} sx={{
            background: colors.lightOrange,
            padding: '20px 15px 20px 15px',
            borderRadius:'7px'
        }}>
            <Grid item xs={12} md={3.8} sx={{padding:'0 10px'}}>
                <Typography fontSize={{sx: '12pt', md: '14pt'}} sx={{textAlign: {xs: 'center', md: 'left'}, fontWeight:700}}>
                    Obtené una cotización sin cargo personalizada que se adapte a tus posibilidades y necesidades.
                </Typography>
            </Grid>
            <Grid item xs={12} md={5.2} container gap={2}>
                <Grid item xs={12} sx={{display:'flex', gap:'10px'}}>
                    <TextField 
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        label='Nombre y Apellido'
                        variant='standard'
                        sx={{minWidth:'50%'}}
                    />
                    <TextField 
                        value={descripcion}
                        onChange={e => setDescripcion(e.target.value)}
                        label='Estoy interesado en...'
                        variant='standard'
                        sx={{minWidth:'50%'}}
                    />
                </Grid>
                { error && (
                    <Grid item xs={12} container gap={1}>
                        <ErrorOutline sx={{color: colors.grey}}/>
                        <Typography>
                            Todos los campos son obligatorios para el envío del mail.
                        </Typography>
                    </Grid>
                )}
            </Grid>
            <Grid item xs={12} md={3} sx={{textAlign: {xs: 'center', md: 'right'}}}>
                <CustomButon 
                    label='OBTENER COTIZACIÓN' 
                    fontSize={{xs:'8pt', md:'10pt'}} 
                    onClick={sendWhatsApp}
                    variant='contained'
                />
            </Grid>
        </Grid>
    )
}

export default Cotizacion