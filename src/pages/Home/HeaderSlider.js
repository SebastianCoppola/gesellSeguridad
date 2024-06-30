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

const HeaderSlider = () => {
    
    const theme = useTheme()
    const isXs = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <FullWidthSlider 
            autoplay={true} 
            interval={5000} 
            data={[
                <Slide img={isXs ? img1cell : img1desk}/>,
                <Slide img={isXs ? img2cell : img2desk}/>,
                <Slide img={isXs ? img3cell : img3desk}/>,
                <Slide img={isXs ? img4cell : img4desk}/>,
            ]}
        />
    )
}

export default HeaderSlider