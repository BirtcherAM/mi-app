import 'whatwg-fetch'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap 
import React from 'react'; 
import ReactDOM from 'react-dom/client'; // Importa el módulo de createRoot 
import './index.css';  // Asegúrate de que este archivo contenga CSS válido 
import App from './App'; 
import reportWebVitals from './reportWebVitals'; 
 
// Crea el root de React 18 
const root = ReactDOM.createRoot(document.getElementById('root')); 
 
// Renderiza la aplicación 
root.render( 
  <React.StrictMode> 
    <App /> 
  </React.StrictMode> 
); 
 
reportWebVitals();