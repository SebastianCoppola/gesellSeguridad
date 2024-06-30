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

const SolucionesSlider = () => {
    
    const theme = useTheme()
    const isXs = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <GhostImgCarousel autoplay={true} interval={5000} data={[
            {id: 1, img: isXs ? img1cell : img1desk, action: () => console.log(1)},
            {id: 2, img: isXs ? img2cell : img2desk, action: () => console.log(1)},
            {id: 3, img: isXs ? img3cell : img3desk, action: () => console.log(1)},
            {id: 4, img: isXs ? img4cell : img4desk, action: () => console.log(1)},
            {id: 5, img: isXs ? img5cell : img5desk, action: () => console.log(1)},
            {id: 6, img: isXs ? img6cell : img6desk, action: () => console.log(1)},
            {id: 7, img: isXs ? img7cell : img7desk, action: () => console.log(1)},
        ]}/>
    )
}

export default SolucionesSlider