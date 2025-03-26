import React from 'react';

import './../../App.css';

function CasosDeExito1BrandIdent() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
          width: '100%', // Asegura que el componente ocupe el ancho del navegador
          boxSizing: 'border-box', // Incluye el padding en el ancho total
        }}
      >
        {/* Título principal */}
        <div
          style={{
            marginTop: 50,
            marginBottom: 25,
            marginLeft: -1100,
            fontSize: 20,
            fontFamily: 'Arial',
            fontWeight: 'bold',
            textAlign: 'left', // Centra el texto
          }}
        >
          <p> Brand Identity </p>
          <div
            style={{
              fontSize: 15,
              fontWeight: 'bold',
            }}
          >
            <p> SOLUCIÓN </p>
          </div>
        </div>

        <div
          style={{
            fontSize: 22,
            marginLeft: 490,
            marginRight: 170,
            marginTop: -173,
            width: 850,
            padding: 50,
            fontWeight: 'bold',
            textAlign: 'justify',
          }}
        >
          <p>
            Equilibrio y Cercanía. Construyendo una identidad de Marca Duradera.
            La Evolución Creativa y Estratégica de CHAGAR{' '}
          </p>
          <div
            style={{
              fontFamily: 'Arial',
              fontSize: '15px',
              fontWeight: 'normal',
              textAlign: 'justify', // Justifica el texto
              padding: '0px 0px',
              width: '95%', // Asegura que el div ocupe el 80% del ancho del navegador
            }}
          >
            <p>
              Diseñamos la identidad de SOTEC fusionando precisión e innovación.
              Una paleta cromática que emerge del termómetro de color, con tonos
              fríos y cálidos en equilibrio, representa su versatilidad. El
              isotipo combina aspas de ventilador, símbolos de calor y frío. Más
              que un logotipo, es una declaración visual de calidad y
              eficiencia, reflejando el compromiso inquebrantable con la
              satisfacción del cliente. La marca de SOTEC no solo representa
              productos, sino también el compromiso inquebrantable con la
              satisfacción del cliente y la excelencia en suministros técnicos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CasosDeExito1BrandIdent;
