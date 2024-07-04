import { colors } from "./const"
import { routes } from "./routes"
//Email:
import emailjs from 'emailjs-com'

export const whatsApp = (message) => {
    let phoneNumber = process.env.REACT_APP_WHATSAPP_NUMBER
    let finalMessage = message ?? 'Hola! Te escribo desde el sitio web de Gesell Seguridad!'
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`
    window.open(url, '_blank')
}

export const sendMail = async (nombreApellido, email, telefono, mensaje) => {
    let serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID
    let templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    let userID = process.env.REACT_APP_EMAILJS_USER_ID
    let req = {
        from_name: nombreApellido,
        from_email: email,
        from_telefono: telefono,
        from_message: mensaje,
    }
    return emailjs.send(serviceID, templateID, req, userID)
        .then(() => { return true })
        .catch(() => { return false})
}

export const getColorByRoute = (rutaActual) => {
    let whiteRoutes = [
        '',
        routes.SOLUCIONES.children.SMART_PANICS.url,
        routes.SOLUCIONES.children.RISCO.url,
        routes.SOLUCIONES.children.AJAX.url,
        routes.SOLUCIONES.children.MONITOREO_FLOTA.url,
    ]
    let blackRoutes = [
        routes.SOLUCIONES.children.CUSTODIAS.url,
        routes.EMPRESA.url,
        routes.CONTACTO.url,
        routes.TIPS.url,
        routes.SOLUCIONES.children.SMART_HOME.url,
        routes.SOLUCIONES.children.HELLGRUN.url,
    ]
    let color = whiteRoutes.includes(rutaActual) ? colors.white
        : blackRoutes.includes(rutaActual) ? colors.black
        : colors.white
    return color
}