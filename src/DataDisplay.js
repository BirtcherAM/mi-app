import { useEffect } from 'react'; 
 
function DataDisplay() { 
  useEffect(() => { 
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Reemplaza con la URL de tu API real 
 
    fetch(apiUrl) 
      .then(response => { 
        if (!response.ok) { 
          throw new Error('Network response was not ok'); 
        } 
        return response.json(); 
      }) 
      .then(data => { 
        // Maneja los datos de la API aquí, sin renderizarlos en la UI 
        console.log('Datos de la API:', data); 
      }) 
      .catch(error => { 
        console.error('Error fetching data:', error); 
      }); 
  }, []); // Solo se ejecuta al montar el componente 
 
  // El componente no renderiza nada 
  return null; 
} 
 
export default DataDisplay;