//Components:
import FullWidthSlider from "../../components/Sliders/FullWidthSlider/FullWidthSlider"
//Assets:
import img1 from '../../assets/ajax/carouselCarateristicas/01.jpg'
import img2 from '../../assets/ajax/carouselCarateristicas/02.jpg'
import img3 from '../../assets/ajax/carouselCarateristicas/03.jpg'
import img4 from '../../assets/ajax/carouselCarateristicas/04.jpg'
import img5 from '../../assets/ajax/carouselCarateristicas/05.jpg'
import img6 from '../../assets/ajax/carouselCarateristicas/06.jpg'
import img7 from '../../assets/ajax/carouselCarateristicas/07.jpg'

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

const SliderCaracteristicas = () => {
    return (
        <FullWidthSlider 
            autoplay={true} 
            interval={5000} 
            data={[
                <Slide img={img1}/>,
                <Slide img={img2}/>,
                <Slide img={img3}/>,
                <Slide img={img4}/>,
                <Slide img={img5}/>,
                <Slide img={img6}/>,
                <Slide img={img7}/>,
            ]}
        />
    )
}

export default SliderCaracteristicas