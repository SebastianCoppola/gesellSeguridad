//Compoenents:
import GhostImgCarousel from "../../components/Sliders/GhostSlidesSlider/GhostSlidesSlider"
//Assets:
import img1cell from '../../assets/home/carouselSoluciones/01_cell.png'
import img1desk from '../../assets/home/carouselSoluciones/01_desk.jpg'
import img2cell from '../../assets/home/carouselSoluciones/02_cell.png'
import img2desk from '../../assets/home/carouselSoluciones/02_desk.jpg'
import img3cell from '../../assets/home/carouselSoluciones/03_cell.png'
import img3desk from '../../assets/home/carouselSoluciones/03_desk.jpg'
import img4cell from '../../assets/home/carouselSoluciones/04_cell.png'
import img4desk from '../../assets/home/carouselSoluciones/04_desk.jpg'
import img5cell from '../../assets/home/carouselSoluciones/05_cell.png'
import img5desk from '../../assets/home/carouselSoluciones/05_desk.jpg'
import img6cell from '../../assets/home/carouselSoluciones/06_cell.png'
import img6desk from '../../assets/home/carouselSoluciones/06_desk.jpg'
import img7cell from '../../assets/home/carouselSoluciones/07_cell.png'
import img7desk from '../../assets/home/carouselSoluciones/07_desk.jpg'
//Mui:
import { useMediaQuery, useTheme } from "@mui/material"

const Slide = ({ img }) => {
    return (
        <img 
            src={img} 
            alt='img' 
            onClick={()=>{}} 
            style={{
                cursor:'pointer',
                minWidth:'100%', width:'100%', maxWidth:'100%',
                minHeight:'100%', height:'100%', maxHeight:'100%',
            }}
        />
    )
}

const SolucionesSlider = () => {
    
    const theme = useTheme()
    const isXs = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <GhostImgCarousel 
            autoplay={true} 
            interval={5000} 
            data={[
                <Slide img={isXs ? img1cell : img1desk}/>,
                <Slide img={isXs ? img2cell : img2desk}/>,
                <Slide img={isXs ? img3cell : img3desk}/>,
                <Slide img={isXs ? img4cell : img4desk}/>,
                <Slide img={isXs ? img5cell : img5desk}/>,
                <Slide img={isXs ? img6cell : img6desk}/>,
                <Slide img={isXs ? img7cell : img7desk}/>,
            ]}
        />
    )
}

export default SolucionesSlider