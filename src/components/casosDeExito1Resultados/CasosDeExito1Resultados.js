import React from 'react';

import './../../App.css';

function CasosDeExito1Resultados() {
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
          <p> Resultados </p>
          <div
            style={{
              fontSize: 15,
              fontWeight: 'bold',
            }}
          >
            <p> </p>
          </div>
        </div>

        <div
          style={{
            fontSize: 22,
            marginLeft: 490,
            marginRight: 170,
            marginTop: -143,
            width: 850,
            padding: 50,
            fontWeight: 'bold',
            textAlign: 'justify',
          }}
        >
          <p>
            Rebranding de una marca referente a nivel nacional y actualización
            de una web con miles de referencias y áreas privadas.{' '}
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
              Creamos una experiencia cálida y cercana al navegar por las
              plataformas de CHAGAR que transmite la eficiencia y calidad de sus
              suministros industriales y de climatización. Lo conseguimos a
              través de un rebranding y su posterior aplicación a todos los
              soportes.
            </p>

            <div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 15,
                  width: '100%', // Asegura que el componente ocupe el ancho del navegador
                  boxSizing: 'border-box', // Incluye el padding en el ancho total
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: '8px solidhsl(211, 69.60%, 84.50%)', // Borde azul fino
                    borderRadius: '5px', // Bordes redondeados (opcional)
                    padding: '20px', // Espaciado interno
                    marginTop: '20px', // Espaciado superior
                    marginRight: '20px', // Espaciado
                    backgroundColor: 'hsl(211, 90%, 96%)', // Fondo azul clarito
                  }}
                >
                  <p style={{ fontWeight: 'bold' }}>Mejora en el ranking SEO</p>
                  <p style={{ marginTop: '20px' }}>
                    Al desarrollar una web clara, sencilla y fácil de usar por
                    los usuarios en cualquier dispositivo, generamos que la web
                    apareciera en primera página de búsquedas para diversas
                    palabras clave de suministros técnicos industriales y
                    climatización relacionadas con Guadalajara.
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solidhsl(211, 69.60%, 84.50%)', // Borde azul fino
                    borderRadius: '5px', // Bordes redondeados (opcional)
                    padding: '20px', // Espaciado interno
                    marginTop: '20px', // Espaciado superior
                    backgroundColor: 'hsl(211, 90%, 96%)', // Fondo azul clarito
                  }}
                >
                  <p style={{ fontWeight: 'bold' }}>
                    Aumento de solicitudes de asesoría
                  </p>
                  <p style={{ marginTop: '20px' }}>
                    Creamos una experiencia cálida y cercana al navegar por las
                    plataformas de CHAGAR que transmite la eficiencia y calidad
                    de sus suministros industriales y de climatización. Lo
                    conseguimos a través de un rebranding y su posterior
                    aplicación a todos los soportes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CasosDeExito1Resultados;
