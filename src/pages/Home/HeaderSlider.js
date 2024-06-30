//Compoenents:
import FullWidthSlider from "../../components/Sliders/FullWidthSlider/FullWidthSlider"
//Assets:
import img1desk from '../../assets/home/carouselHeader/01_desk.jpg'
import img2desk from '../../assets/home/carouselHeader/02_desk.jpg'
import img3desk from '../../assets/home/carouselHeader/03_desk.jpg'
import img4desk from '../../assets/home/carouselHeader/04_desk.jpg'
import img1cell from '../../assets/home/carouselHeader/01_cell.png'
import img2cell from '../../assets/home/carouselHeader/02_cell.png'
import img3cell from '../../assets/home/carouselHeader/03_cell.png'
import img4cell from '../../assets/home/carouselHeader/04_cell.png'
//Mui:
import { useMediaQuery, useTheme } from "@mui/material"

const HeaderSlider = () => {
    
    const theme = useTheme()
    const isXs = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <FullWidthSlider autoplay={true} interval={5000} data={[
            {id: 1, img: isXs ? img1cell : img1desk, action: () => console.log(1)},
            {id: 2, img: isXs ? img2cell : img2desk, action: () => console.log(1)},
            {id: 3, img: isXs ? img3cell : img3desk, action: () => console.log(1)},
            {id: 4, img: isXs ? img4cell : img4desk, action: () => console.log(1)},
        ]}/>
    )
}

export default HeaderSlider