import { useLocation, useNavigate } from "react-router-dom"

export function useHistory(){
    
    const navigate = useNavigate()
    const location = useLocation()
    const rutaActual = location.pathname
    
    const isRutaActual = (route) => {
        return rutaActual === route
    }
    
    const navigateTo = (route, state) => {
        navigate(route, state ?? undefined)
    }

    return { isRutaActual, rutaActual, navigateTo, location }
    
}