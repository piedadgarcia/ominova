import React from 'react';
import { FaWhatsapp, FaCalendarAlt, FaArrowUp } from 'react-icons/fa'; // Importación corregida

function InicioAgencia() {
  // Función para volver al inicio de la página
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="inicioAgencia">
      <div className="texto-verde-container" style={{ textAlign: 'left' }}>
        <p
          className="texto-grande"
          style={{
            color: 'black',
            fontWeight: 'bold',
            textAlign: 'left',
            marginLeft: '100px',
            marginTop: '100px',
            fontSize: '36px', // Cambié el tamaño de fuente para hacerlo más grande
          }}
        >
          Agencia de marketing digital para líderes
        </p>
        <p
          className="texto-normal"
          style={{
            color: 'grey',
            textAlign: 'left',
            marginLeft: '100px',
            marginTop: '30px',
          }}
        >
          Tan sólo con la mejor calidad se pueden alcanzar los mejores
          resultados.
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li
            className="texto-equipo equipo"
            style={{
              color: 'black',
              marginLeft: '100px',
              marginTop: '30px',
              fontSize: '20px',
            }}
          >
            <strong>Nuestro equipo</strong>
            <p
              className="texto-normal"
              style={{
                color: 'grey',
                textAlign: 'justify',
                marginTop: '10px',
                marginLeft: '-5px',
                marginBottom: '40px',
                width: '600px',
              }}
            >
              Resultados, creatividad, emoción, plazos cumplidos, marketing
              sencillo...todo ello depende de personas y, por eso, apostamos por
              formar el mejor equipo posible. Todo el equipo reúne los mismos
              requisitos: buena gente, pasión por su trabajo y especialización
              absoluta en su oficio. En la Empresa contamos con técnicos
              especializados en cada área de trabajo.
            </p>
            <p className="conoce-mas">
              <strong
                style={{
                  color: 'darkgrey',
                  fontSize: '15px',
                  marginLeft: '100px',
                  marginTop: '30px',
                }}
              >
                Conoce más sobre nosotros{' '}
                <span style={{ marginLeft: '10px', marginRight: '300' }}>
                  →
                </span>
              </strong>
            </p>
          </li>
          <li
            className="texto-equipo procesos"
            style={{
              position: 'absolute',
              color: 'black',
              marginLeft: '100px',
              fontSize: '20px',
              marginTop: '200px',
            }}
          >
            <strong>Nuestros procesos</strong>
            <p
              className="texto-normal"
              style={{
                color: 'grey',
                textAlign: 'justify',
                marginTop: '10px',
                marginLeft: '-5px',
                marginBottom: '40px',
                width: '600px',
              }}
            >
              Damos servicio al cliente incluso antes de que nos conozca. Es
              algo que repetimos mucho, y es que es cierto. Invertimos mucho
              personal y recursos en optimizar los procesos de la compañía:
              desde la creación de una web, una campaña o una marca, hasta la
              gestión diaria de la estrategia social media o del posicionamiento
              SEO de una tienda online. El mejor funcionamiento depende de unos
              procesos optimizados.
            </p>
            <p className="conoce-mas">
              <strong
                style={{
                  color: 'darkgrey',
                  fontSize: '15px',
                  marginLeft: '100px',
                  marginTop: '30px',
                }}
              >
                Conoce más a fondo{' '}
                <span style={{ marginLeft: '10px', marginRight: '300' }}>
                  →
                </span>
              </strong>
            </p>
          </li>
          <li
            className="texto-equipo clientes"
            style={{
              position: 'absolute',
              color: 'black',
              marginLeft: '100px',
              fontSize: '20px',
              marginTop: '600px',
            }}
          >
            <strong>Nuestros clientes</strong>
            <p
              className="texto-normal"
              style={{
                color: 'grey',
                textAlign: 'justify',
                marginTop: '10px',
                marginLeft: '-5px',
                marginBottom: '40px',
                width: '600px',
              }}
            >
              Nuestro foco: los clientes. Nos obsesionamos con dar valor a los
              clientes, ya que sois la razón de nuestra compañía. Desde el
              inicio del proyecto, durante su desarrollo y en su finalización,
              cuidamos cada etapa con el máximo esmero para ofrecer la mejor
              calidad posible, tanto en el producto como en la comunicación, que
              es igual de importante. Nos esforzamos al máximo porque seáis
              partícipes en todo momento.
            </p>
            <p className="conoce-mas">
              <strong
                style={{
                  color: 'darkgrey',
                  fontSize: '15px',
                  marginLeft: '100px',
                  marginTop: '30px',
                }}
              >
                Conviértete en cliente ya{' '}
                <span style={{ marginLeft: '10px', marginRight: '300' }}>
                  →
                </span>
              </strong>
            </p>
          </li>
        </ul>
      </div>

      <div
        className="texto-e-imagen"
        style={{ marginTop: '-230px', marginBottom: '160px' }}
      >
        <p
          className="texto-verde texto-izquierda"
          style={{
            color: 'black',
            textAlign: 'left',
            marginTop: '10px',
            marginLeft: '100px',
          }}
        ></p>

        <div
          className="imagen-contenedor"
          style={{
            marginTop: '80px',
            marginLeft: '10px',
            marginRight: '400px',
          }}
        >
          <img
            src="/imagen2.png"
            alt="Imagen adicional"
            className="imagen-lado-derecho"
          />
          <div className="imagenes-posicionadas">
            <img
              src="/ACCOUNT MANAGER.png"
              alt="ACCOUNT MANAGER"
              className="imagen-centro3"
            />
            <img src="/LEADER.png" alt="LEADER" className="imagen-centro" />
            <img
              src="/SPECIALIST.jpg"
              alt="SPECIALIST"
              className="imagen-centro4"
            />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: '-730px',
            marginTop: '420px',
            marginRight: '1090px',
          }}
        >
          <img
            src="/Cover1.png"
            alt="Imagen de portada 1"
            style={{
              width: '550px',
              height: 'auto',
              marginBottom: '10px',
              position: 'absolute',
            }}
          />
          <img
            src="/Cover3.png"
            alt="Imagen de portada 3"
            style={{
              width: '100px',
              height: 'auto',
              marginTop: '140px',
              marginLeft: '-200px',
              position: 'absolute',
            }}
          />
        </div>

        {/* Contenedor independiente para "Sin título" */}
        <div
          style={{
            position: 'relative',
            marginTop: '80px',
            texAlign: 'center',
          }}
        >
          <img
            src="/Sin título.png"
            alt="Imagen sin título"
            style={{
              width: '550px',
              height: 'auto',
              position: 'absolute',
              marginLeft: '-1370px',
              marginTop: '750px',
            }}
          />
        </div>
        {/* Contenedor independiente para Cover2 */}
        <div
          style={{
            position: 'relative',
            marginTop: '-600px',
            textAlign: 'center',
          }}
        >
          <img
            src="/Cover2.png"
            alt="Imagen de portada 2"
            style={{
              width: '100px',
              height: 'auto',
              position: 'absolute',
              marginLeft: '-1240px',
              marginTop: '1250px',
            }}
          />
        </div>

        {/* Contenedor independiente para Cover4 */}
        <div
          style={{
            position: 'relative',
            marginTop: '-30px',
            textAlign: 'center',
            marginLeft: '-800px',
          }}
        >
          <img
            src="/Cover4.png"
            alt="Imagen de portada 4"
            style={{
              width: '100px',
              height: 'auto',
              position: 'absolute',
              marginLeft: '-220px',
              marginTop: '590px',
            }}
          />
        </div>

        {/* Contenedor independiente para Cover5 */}
        <div
          style={{
            position: 'absolute',
            marginTop: '-150px',
            textAlign: 'center',
          }}
        >
          <img
            src="/Cover5.png"
            alt="Imagen de portada 5"
            style={{
              width: '100px',
              height: 'auto',
              position: 'absolute',
              marginTop: '800px',
              marginLeft: '1125px',
            }}
          />
        </div>
      </div>

      {/* Íconos fijos en la parte inferior derecha */}
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px', // Espaciado entre los íconos
          zIndex: 1000,
        }}
      >
        {/* Ícono de WhatsApp */}
        <a
          href="https://wa.me/1234567890" // Reemplaza con tu número de WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#25d366',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
          }}
        >
          <FaWhatsapp style={{ color: 'white', fontSize: '20px' }} />
        </a>
        {/* Ícono de Calendario */}
        <a
          href="https://calendar.google.com/" // Reemplaza con el enlace a tu calendario
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#4285F4',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
          }}
        >
          <FaCalendarAlt style={{ color: 'white', fontSize: '20px' }} />
        </a>
        {/* Ícono para volver arriba */}
        <button
          onClick={scrollToTop}
          style={{
            backgroundColor: '#555',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            border: 'none',
          }}
        >
          <FaArrowUp style={{ color: 'white', fontSize: '20px' }} />
        </button>
      </div>
    </div>
  );
}

export default InicioAgencia;
