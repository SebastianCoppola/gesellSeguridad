//Mui:
import { Grid, Typography } from '@mui/material'
import { LocalPhone, LocationOn } from '@mui/icons-material'
//Utils:
import { colors } from '../../utils/const'
import { routes } from '../../utils/routes'
//Assets:
import icon1 from '../../assets/icons/time.png'
import icon2 from '../../assets/icons/location.png'
import icon3 from '../../assets/icons/check.png'
import img1desk from '../../assets/empresa/01_desk.jpg'
import img1cell from '../../assets/empresa/01_cell.jpg'
import img2 from '../../assets/empresa/02.jpg'
import img3 from '../../assets/empresa/03.jpg'
import img4 from '../../assets/empresa/04.jpg'
import img5 from '../../assets/empresa/05.mp4'
//Components:
import VerticalCards from '../../components/VerticalCards/VerticalCards'
import MainBodyInfo from './MainBodyInfo'
import Charlemos from './Charlemos'
import Form from './Form'
import ResponsiveImg from '../../components/ResponsiveImg/ResponsiveImg'

const Empresa = () => {

    const cardsData = [
        { icon: icon1, title: 'Trayectoria', text: 'Acompañamos a más de 3400 familias desde hace más de 34 años.' },
        { icon: icon2, title: 'Cobertura', text: 'Nuestro área de cobertura abarca todo el partido de Villa Gesell (Villa Gesell, Mar de las Pampas, Las Gaviotas y Mar Azul).' },
        { icon: icon3, title: 'Habilitación', text: 'Estamos autorizados para trabajar en todo el territorio de la provincia de Buenos Aires.' },
    ]
    const infoData = [
        { img:img2, section:'porQueLoHacemos', title:'POR QUÉ LO HACEMOS', subtitle:'Porque sabemos que lafamilia es lo más importante', text:'Sabemos lo importante que es la seguridad de nuestros hogares y familias, por lo que nos dedicamos a proporcionar soluciones de seguridad confiables y efectivas que brinden tranquilidad a nuestros clientes. Cada instalación que realizamos y cada sistema que diseñamos tiene como objetivo principal garantizar la protección de quienes más valoramos.' },
        { img:img3, section:null, title: 'POR QUÉ LO HACEMOS', subtitle:'Porque queremos unacomunidad más segura', text: 'Entendemos que la seguridad no solo se trata de proteger propiedades individuales, sino también de crear un entorno seguro y pacífico para todos. Al proporcionar servicios de seguridad confiables y estar disponibles para ayudar en situaciones de emergencia, contribuimos a fortalecer el tejido social y a promover la tranquilidad en nuestra comunidad.' },
        { img:img4, section:null, title: 'POR QUÉ LO HACEMOS', subtitle:'Porque la innovación y laexcelencia nos impulsan', text:'En Gesell Seguridad, nos inspira el deseo de innovar y sobresalir en el campo de la seguridad. Nos comprometemos a buscar continuamente nuevas formas de mejorar nuestros servicios y sistemas de seguridad, superando los estándares de la industria y brindando así a nuestros clientes la mejor experiencia posible en seguridad.'},
        { vid:img5, section:'nuestraHistoria', title: 'NUESTRA HISTORIA', subtitle:'Desde 1987 protegiendo a las familias de Villa Gesell', text:'Gesell Seguridad S.A. nace del deseo de crear un entorno seguro y confiable para la comunidad de Villa Gesell y sus alrededores. Inspirada por la necesidad de proteger hogares, negocios y familias, la empresa ha crecido combinando tecnología de punta con un equipo humano comprometido. La pasión por la seguridad y el bienestar de sus clientes impulsa cada una de sus acciones, buscando siempre ofrecer soluciones personalizadas y efectivas.'},
    ]

    const desktopStyles = {
        contactIcons:{
            color: colors.orange,
            fontSize: '30px',
        },
        contactText:{
            fontSize: {xs:'10pt', md:'13pt'},
        },
    }

    return (
        <Grid container justifyContent='center' gap={{xs: 4, md: 4}} sx={{marginBottom:'50px'}}>
            
            {/* Img */}
            <Grid item xs={12}>
                <section id={routes.EMPRESA.section}/>
                <ResponsiveImg 
                    imgCell={img1cell}
                    imgDesk={img1desk}
                    alt='empresa'
                />
            </Grid>
            
            {/* Titles */}
            <Grid item xs={12}>
                <Grid container justifyContent='center'>
                    <Typography sx={{color:colors.orange, textAlign:'center'}}>
                        QUÉ HACEMOS
                    </Typography>
                </Grid>
                <Grid container justifyContent='center'>
                    <Typography sx={{fontSize:'25px', fontWeight:700, marginTop:'10px', textAlign:'center'}}>
                        Protegemos hogares, negocios y personas
                    </Typography>
                </Grid>
            </Grid>
            
            {/* Cards */}
            <Grid item xs={12}>
                <VerticalCards data={cardsData}/>
            </Grid>
            
            {/* Data */}
            <Grid item xs={12}>
                <MainBodyInfo data={infoData}/>
            </Grid>

            {/* Alguna Ayuda */}
            <Grid item xs={11} md={9}>
                <section id={routes.CONTACTO.section}/>
                <Charlemos />
            </Grid>

            {/* Form Correo */}
            <Grid item xs={10} md={5}>
                <Form />
            </Grid>

            {/* Contactos */}
            <Grid item xs={10} md={9}>
                <Grid container gap={3}>
                    <Grid item xs={12} container alignItems='flex-end' justifyContent='flex-start' gap={1}>
                        <LocalPhone sx={desktopStyles.contactIcons}/>
                        <Typography sx={desktopStyles.contactText}>02255 46-0606</Typography>
                    </Grid>
                    <Grid item xs={12} container alignItems='flex-end' justifyContent='flex-start' gap={1}>
                        <LocationOn sx={desktopStyles.contactIcons}/>
                        <Typography sx={desktopStyles.contactText}>Av. 5 803, 7165 Villa Gesell, Buenos Aires</Typography>
                    </Grid>
                    <Grid item xs={12} container direction='column' justifyContent={{xs:'center', md:'flex-start'}} >
                        <Typography sx={desktopStyles.contactText}>Agencia de Seguriodad Privada</Typography>
                        <Typography sx={desktopStyles.contactText}>Matricula Nº.62094 – Legajo Nº 1/116743</Typography>
                        <Typography sx={desktopStyles.contactText}>Expediente 21100 Nº.327216/03 Resolución 2430</Typography>
                        <Typography sx={desktopStyles.contactText}>Prestadora servicio Nº. 1425</Typography>
                        <Typography sx={desktopStyles.contactText}>Ministerio de Seguridad de la Provincia de Bs.As.</Typography>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Empresa