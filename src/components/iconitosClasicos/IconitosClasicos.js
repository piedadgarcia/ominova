import React from 'react';
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';

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
          <FaWhatsapp style={{ color: 'green' }} />
        </a>
        <FaLinkedin style={{ marginRight: 10,color: 'blue' }}  />
        <FaInstagram style={{ marginRight: 10 , color: 'violet' }} />
      </div>
      <div style={{
        fontSize: 13,
        fontWeight: 'bold',
        color: '#333',
        cursor: 'pointer',
        marginLeft: 'auto' // Empuja el texto a la derecha
      }}>
        <p>Aviso Legal Política de privacidad Política de cookies © 2025 Ominova. Todos los derechos reservados</p>
      </div>
    </nav>
  );
}

export default IconitosClasicos;
