import React, { Suspense, lazy } from 'react'; 
import './App.css'; 
import logo from './assets/Web5.0.png';

 
// Cargar el componente About de manera perezosa (lazy loading) 
const About = lazy(() => import('./About')); 
const DataDisplay = lazy(() => import('./DataDisplay')); 
 
function App() { 
  return ( 
    <div className="App"> 
      <header className="App-header"> 
        <h1>Bienvenidos a Mi-Proyecto-Web PURA PERDIDA</h1> 
        <nav> 
          <ul className="nav justify-content-left"> 
            <li className="nav-item"> 
            <img src={logo} className="App-logo" alt="Logo" /> {/* Usa la imagen */}
              <a className="nav-link" href="#about">Conócenos</a> 
            </li> 
            <li className="nav-item"> 
              <a className="nav-link" href="#services">Servicios</a> 
            </li> 
            <li className="nav-item"> 
              <a className="nav-link" href="#contact">Contacto</a> 
            </li> 
          </ul> 
        </nav> 
      </header> 
 
      <main className="container"> 
        {/* Componente About cargado con lazy y Suspense */} 
        <Suspense fallback={<div>Cargando...</div>}> 
          <About /> 
        </Suspense> 
 
        {/* Componente DataDisplay cargado con lazy y Suspense */} 
        <Suspense fallback={<div>Cargando datos...</div>}> 
          <DataDisplay /> 
        </Suspense> 
 
        <section id="services" className="my-5"> 
          <h2 className="text-left">Servicios que ofrecemos</h2> 
          <ul className="list-group"> 
            <li className="list-group-item">Aplicaciones IOS y Android</li> 
            <li className="list-group-item">Paginas Web</li> 
            <li className="list-group-item">Soporte Web</li> 
          </ul> 
        </section> 
 
        <section id="contact" className="my-5"> 
          <h2 className="text-left">Contáctanos</h2> 
          <form id="contactForm" className="text-left"> 
            <div className="form-group"> 
              <label htmlFor="name">Nombre:</label> 
              <input type="text" className="form-control" id="name" name="name" /> 
            </div> 
            <div className="form-group"> 
              <label htmlFor="message">Mensaje:</label> 
              <textarea className="form-control" id="message" name="message"></textarea> 
            </div> 
            <button type="submit" className="btn btn-primary">Enviar</button> 
          </form> 
        </section> 
      </main> 
 
      <footer className="bg-dark text-white text-center p-3"> 
        <p>&copy; 2024 "(Reserved rights)" Todos los derechos reservados.</p> 
      </footer> 
    </div> 
  ); 
} 
 
export default App;