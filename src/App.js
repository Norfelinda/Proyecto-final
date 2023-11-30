
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

import HomePege from './pages/HomePage';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Contactos from './pages/Contactos';
import Galeria from './pages/Galeria';
import Ubicacion from './pages/Ubicacion';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePege />}></Route>
          <Route path='/nosotros' element={<Nosotros />}></Route>
          <Route path='/servicios' element={<Servicios />}></Route>
          <Route path='/contactos' element={<Contactos />}></Route>
          <Route path='/galeria' element={<Galeria />}></Route>
          <Route path='/ubicacion' element={<Ubicacion />}></Route>



        </Routes>
      </BrowserRouter>
      <Footer />


    </div>

  );
}
export default App;
