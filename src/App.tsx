import { Routes, Route } from 'react-router-dom'
import Item from './pages/Item'
import Homepage from './pages/Homepage'
import Shopping from './pages/Shopping'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import './App.css'
import Contact from './pages/Contact'
import { ShoppingContextProvider } from './context/ShoppingContext'



function App() {

  return (
    <>
      <ShoppingContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/shopping' element={<Shopping />} />
          <Route path='/item/:id/:name' element={<Item />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </ShoppingContextProvider>
    </>
  )
}

export default App
