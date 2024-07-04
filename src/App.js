//Mui:
import { Grid } from '@mui/material'
//Routes:
import { Route, Routes } from 'react-router-dom'
//Components:
import NavMenu from './components/NavMenu/NavMenu'
import Footer from './components/Footer/Footer'
import WhatsAppFlotante from './components/WhatsAppFlotante/WhatsAppFlotante'
//Pages:
import Home from './pages/Home/Home'
import Ajax from './pages/Ajax/Ajax'
import Risco from './pages/Risco/Risco'
import Empresa from './pages/Empresa/Empresa'
import Tips from './pages/Tips/Tips'
import SmartPanicsFlota from './pages/SmartPanicsFlota/SmartPanicsFlota'
import PersonalCustodias from './pages/PersonalCustodias/PersonalCustodias'
import SmartHome from './pages/SmartHome/SmartHome'
import Hellgrun from './pages/Hellgrun/Hellgrun'

const App = () => {

    return (
        <Grid container minHeight='100vh'>
            <NavMenu />
            <Grid container minHeight='60vh'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/smart-panics-flota' element={<SmartPanicsFlota />} />
                    <Route path='/ajax' element={<Ajax />} />
                    <Route path='/risco' element={<Risco />} />
                    <Route path='/personal-custodias' element={<PersonalCustodias />} />
                    <Route path='/smart-home' element={<SmartHome />} />
                    <Route path='/hellgrun' element={<Hellgrun />} />
                    <Route path='/empresa' element={<Empresa />} />
                    <Route path='/tips' element={<Tips />} />
                    <Route path='/*' element={<Home />} />
                </Routes>
                <WhatsAppFlotante />
            </Grid>
            <Footer />
        </Grid>
    )
}

export default App;
