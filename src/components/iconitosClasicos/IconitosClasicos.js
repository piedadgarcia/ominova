import React from 'react';
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './../../App.css';

function IconitosClasicos() {
  return (
    <nav style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '5px 15px', // Reduce el padding superior e inferior
      backgroundColor: '#fafafa' // Fondo gris muy claro
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold'
      }}>
        <a href="https://api.whatsapp.com/send?phone=+34656xxxx9&text=Chatea%20en%20WhatsApp%20con%20el%20+34%20616khjkhs56" target="_blank" rel="noopener noreferrer" style={{ marginRight: 10 }}>
          <FaWhatsapp style={{ color: 'green', marginRight: 10 }} />
        </a>
        <FaLinkedin style={{ marginRight: 10, color: 'blue' }} />
        <FaInstagram style={{ marginRight: 10, color: 'violet' }} />
      </div>
      <div style={{
        fontSize: 13,
        fontWeight: 'bold',
        color: '#333',
        cursor: 'pointer',
        marginLeft: 'auto' // Empuja el texto a la derecha
      }}>
        <p>
        <Link to="/avisoLegal" style={{ color: '#333', textDecoration: 'none', }}>
          Aviso Legal 
          </Link>
          <span style={{ margin: '0 7px' }}></span> {/* Añadir espacio entre "Aviso Legal" y "Política de Privacidad" */}
          <Link to="/politicaDePrivacidad" style={{ color: '#333', textDecoration: 'none', marginRight: '10px' }}>
            Política de privacidad
          </Link>
          <span style={{ margin: '0 5px' }}></span> {/* Añadir espacio entre "Política de Privacidad" y "Política de Cookies" */}
          <Link to="/politicaDeCookies" style={{ color: '#333', textDecoration: 'none', marginRight: '10px' }}>
            Política de cookies
          </Link>
          <span style={{ margin: '0 5px' }}></span> {/* Añadir espacio entre "Política de Cookies" y el símbolo */}
          © 2025 Ominova. Todos los derechos reservados
        </p>
      </div>
    </nav>
  );
}

export default IconitosClasicos;

