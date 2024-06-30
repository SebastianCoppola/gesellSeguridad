import { useState } from "react"
//Mui:
import { Grid, TextField, Typography } from "@mui/material"
import { Check, ErrorOutline } from "@mui/icons-material"
//Components:
import CustomButon from "../../components/CustomButton/CustomButton"
import CustomLoading from "../../components/CustomLoading/CustomLoading"
//Utils:
import { colors } from "../../utils/const"
import { sendMail } from "../../utils/utils"

const initialStateAlert = {
    mensaje: null,
    icon: null,
    isError: false
}
const initialStateRequest = {
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: ''
}

const Form = () => {

    const [alert, setAlert ] = useState(initialStateAlert)
    const [loading, setLoading] = useState(false)
    const [request, setRequest] = useState(initialStateRequest)

    const handleEnviar = async () => {
        if(isError()) {
            setAlert({
                mensaje: 'Todos los campos son obligatorios para el envío del mail.',
                icon: <ErrorOutline sx={{color: colors.grey}}/>,
                isError: true
            })
        }else{
            setAlert(initialStateAlert)
            setLoading(true)
            await sendMail(
                `${request.nombre} ${request.apellido}`,
                request.email,
                request.telefono,
                request.mensaje,
            ).then(success => {
                setAlert({
                    mensaje: success ? '¡Gracias por contactarnos! En breve nos comunicaremos con usted.'
                        : 'Ocurrió un error al intentar enviar el correo. Por favor, intente nuevamente.',
                    icon: success ? <Check sx={{color: colors.grey}}/>
                        : <ErrorOutline sx={{color: colors.grey}}/>,
                    isError: !success
                })
                setLoading(false)
                if(success) setRequest(initialStateRequest)
            })

        }
    }

    const isError = () => {
        return ( !request.nombre 
            || !request.apellido 
            || !request.email 
            || !request.telefono 
            || !request.mensaje
        )
    }

    return (
        <Grid container gap={2}>
            <Grid item xs={12} container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        value={request.nombre}                
                        onChange={e => setRequest({...request, nombre: e.target.value})}
                        error={alert.isError && !request.nombre}
                        variant='standard'
                        fullWidth
                        label='Nombre *'
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        value={request.apellido}                
                        onChange={e => setRequest({...request, apellido: e.target.value})}
                        error={alert.isError && !request.apellido}
                        variant='standard'
                        fullWidth
                        label='Apellido *'
                    />
                </Grid>
            </Grid>
            <Grid item xs={8}>
                <TextField
                    value={request.email}                
                    onChange={e => setRequest({...request, email: e.target.value})}
                    error={alert.isError && !request.email}
                    variant='standard'
                    fullWidth
                    label='Correo Electrónico *'
                    type='email'
                />
            </Grid>
            <Grid item xs={8}>
                <TextField
                    value={request.telefono}                
                    onChange={e => setRequest({...request, telefono: e.target.value})}
                    error={alert.isError && !request.telefono}
                    variant='standard'
                    fullWidth
                    label='Teléfono *'
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    value={request.mensaje}                
                    onChange={e => setRequest({...request, mensaje: e.target.value})}
                    error={alert.isError && !request.mensaje}
                    multiline
                    rows={4}
                    fullWidth
                    label='Mensaje *'
                />
            </Grid>
            {alert?.mensaje && alert?.icon && (
                <Grid item xs={12} container flexWrap='nowrap' justifyContent='center' alignItems='flex-start' gap={1}>
                    <Grid item>
                        {alert.icon}
                    </Grid>
                    <Grid item>
                        <Typography sx={{color: colors.grey, fontWeight:700, fontSize:'10pt', marginTop:'2px'}}>
                            {alert.mensaje}    
                        </Typography>
                    </Grid>
                </Grid>
            )}
            <Grid item xs={12} container justifyContent='center'>
                <CustomButon
                    label='ENVIAR' 
                    fontSize='10pt' 
                    onClick={handleEnviar}
                    disabled={false}
                    variant='contained'
                />
            </Grid>
            <CustomLoading loading={loading}/>
        </Grid>
    )
}

export default Form