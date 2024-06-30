//Hooks:
import { useHistory } from "../../hooks/useHistory"
//Mui:
import { Grid } from "@mui/material"
//Components:
import Mobile from "./Mobile"
import Desktop from "./Desktop"

const NavMenu = () => {

    const { navigateTo } = useHistory()

    const handleNavigate = (url, idSection) => {
        //Navigate:
        navigateTo(url, idSection)
        //Go to Section:        
        setTimeout(()=>{
            if(idSection){
                let section = document.getElementById(idSection)
                let topOffset = section.offsetTop - 100
                window.scrollTo({top: topOffset, behavior: 'smooth'})
            }else{
                window.scrollTo({top: 0, behavior: 'smooth'})
            }
        },200)
    }

    return (
        <>
            {/* MOBILE */}
            <Grid item xs={12} md={0} sx={{display:{xs:'block', md:'none'}}}>
                <Mobile handleNavigate={handleNavigate} />
            </Grid>

            {/* DESKTOP */}
            <Grid item xs={0} md={12} sx={{display:{xs:'none', md:'block'}}}>
                <Desktop handleNavigate={handleNavigate} />
            </Grid>
        </>
    )
}

export default NavMenu