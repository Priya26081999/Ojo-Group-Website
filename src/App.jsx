
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Technologies from './pages/Technologies'
import DigitalMarketing from './pages/DigitalMarketing'
import AgroProducts from './pages/AgroProducts'
import FinservPage from './pages/FinservPage'
import RealEstateSection from './pages/RealEstateSection'
import MediaRelations from './pages/MediaRelations'
import AcademySection from './pages/AcademySection'
import BusinessPromotion from './pages/BusinessPromotion'
import Footer from './components/Footer'
import ChatBox from './components/ChatBox'

function App() {
  

  return (
    <>
      <div>
       <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/technology" element={<Technologies />} />
         <Route path="/agro" element={<AgroProducts />} />
         <Route path='/finance' element={<FinservPage/>} />
         <Route path="/real-estate" element={<RealEstateSection />} /> 
         <Route path="/media" element={<MediaRelations/>} />
         <Route path="/academy" element={<AcademySection/>} /> 
         <Route path="/growth" element={<BusinessPromotion />} />  
        <Route path="/digital" element={<DigitalMarketing />} />  
      </Routes>
      </BrowserRouter>
      <Footer/>
      <ChatBox/>
  
      </div>
      
     
      
    </>
  )
}

export default App
