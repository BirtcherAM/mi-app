import { useEffect } from 'react'; 
 
function DataDisplay() { 
  useEffect(() => { 
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 
 
    fetch(apiUrl) 
      .then(response => { 
        if (!response.ok) { 
          throw new Error('La respuesta de la red no fue ok'); 
        } 
        return response.json(); 
      }) 
      .then(data => { 
        // Maneja los datos de la API sin renderizar en la UI 
        console.log('Datos de la API:', data); 
      }) 
      .catch(error => { 
        console.error('Error fetching data:', error); 
      }); 
  }, []); // Se ejecuta al montar el componente 
 
  // Componente no renderiza nada 
  return null; 
} 
 
export default DataDisplay;