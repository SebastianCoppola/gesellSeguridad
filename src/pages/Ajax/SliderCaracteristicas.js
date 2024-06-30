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

const SliderCaracteristicas = () => {
    return (
        <FullWidthSlider autoplay={true} interval={5000} data={[
            {id: 1, img: img1, action: () => console.log(1)},
            {id: 2, img: img2, action: () => console.log(1)},
            {id: 3, img: img3, action: () => console.log(1)},
            {id: 4, img: img4, action: () => console.log(1)},
            {id: 5, img: img5, action: () => console.log(1)},
            {id: 6, img: img6, action: () => console.log(1)},
            {id: 7, img: img7, action: () => console.log(1)},
        ]}/>
    )
}

export default SliderCaracteristicas