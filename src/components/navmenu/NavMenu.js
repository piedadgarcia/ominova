import React from 'react';
import { Link } from 'react-router-dom';
import './../../App.css';

function NavMenu() {
  return (
    <nav style={{
      position: 'absolute', // Posiciona el contenedor de forma absoluta
      top: '60px', // Ajusta este valor para mover el contenedor hacia abajo desde la parte superior
      left: '0',
      right: '0',
      display: 'flex', // Configura el contenedor como un contenedor flexbox
      flexDirection: 'row', // Establece la dirección principal de los elementos flexibles en una fila horizontal
      justifyContent: 'space-between',
      alignContent: 'center',
      padding: '30',// Asegúrate de que el padding sea en píxeles
      width: '97%',
      boxSizing: 'content-box'
      
    }}>
      
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        padding: '0px 0px',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: -2,
        left: 80,
        flex: 0.9// Asigna más espacio a este componente

      }}>
        <div style={{
                    marginLeft: 100, // Ajusta este valor según sea necesario
               }}></div>
        
       
        <Link to="/portada" style={{ textDecoration: 'none' }}>Ominova</Link>
        </div>
      
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: '0px 0px',
        width: '30%', // Ajusta el ancho del segundo div
        fontSize: 14,
        fontWeight: 'bold',
        flex: 0.8 // Asigna menos espacio a este componente
      }}>
        
  
        <Link to="/agencia" className='bold-pointer'> 
          La agencia
        </Link>
        <Link to="/info" className='bold-pointer'>
          Proyectos
        </Link>
        <Link to="/servicios" className='bold-pointer'>
          Servicios
        </Link>
        <Link to="/casos-exito" className='bold-pointer'>
          Casos de éxito
        </Link>
        <Link to="/info" className='bold-pointer'>
          Blog
        </Link>
        <Link to="/contacto" className='bold-pointer'>
          Contacto
        </Link>
        <Link to="/info" className='bold-pointer blue-box'>
          ¿Hablamos?
        </Link>
      </div>


    </nav>
  );
}
export default NavMenu;
