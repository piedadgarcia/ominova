import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Info from '../info/Info';
import IconitosClasicos from '../iconitosClasicos/IconitosClasicos';

function Servicios() {
  const navigate = useNavigate();

  const handleConsultoriaClick = () => {
    navigate('/servicioWeb', { state: { showConsultoria: true } });
  };

  const handleServicioWebClick = () => {
    navigate('/servicioWeb', { state: { showServicioWeb: true } });
  };

  return (
    <div>
      <Info />
      <nav
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          width: '100%', // Asegura que el componente ocupe todo el ancho del navegador
          boxSizing: 'border-box', // Incluye el padding en el ancho total
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            fontSize: 35,
            fontFamily: 'Bebas Neue',
            color: 'black',
            fontWeight: 'bold',
            marginBottom: 0,
            width: '100%', // Asegura que el div ocupe todo el ancho del navegador
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              marginLeft: '50px', // Ajusta este valor según sea necesario
              marginTop: -250,
            }}
          >
            <p>
              Nuestros <span style={{ color: 'grey' }}>Servicios</span>
            </p>
            <div
              style={{
                maxWidth: '650px', // Ajusta el ancho máximo del contenedor
                textAlign: 'justify', // Justifica el texto

                margingTop: '500px',
              }}
            >
              <p style={{ color: 'grey', fontSize: '22px' }}>
                Aplicamos diariamente la mejora contínua en productos y
                procesos, para ofrecerte el camino al éxito cuando nos presentes
                tu proyecto.
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: 160,
              marginLeft: 130, // Añade espacio a la izquierda de la figura
            }}
          >
            <div className="micomponente-container">
              <div className="elipse-container">
                <img
                  src="/PHOTO-2025-02-12-12-21-57.jpg"
                  alt="Htas_IA"
                  className="elipse-container.img"
                />
              </div>
              {/*
                <p>Este es mi elcomponente para poner foto en pestaña serviciosMiComFotoServicios</p>
                </div>
                */}
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row', // Alinea las cajas en una fila
            justifyContent: 'space-between', // Espacio entre las cajas
            alignItems: 'flex-start', // Alinea los elementos a la izquierda
            fontFamily: 'Arial',
            padding: '40px 0px',
            marginTop: -330,
            marginLeft: -650, // Ajusta este valor según sea necesario para desplazar la fila hacia la izquierda
          }}
        >
          <div
            style={{
              border: '4px solid white', // Borde naranja
              padding: '24px', // Ajusta el padding según sea necesario
              backgroundColor: 'rgb(207, 210, 218)', // Fondo transparente
              maxWidth: '290px', // Ajusta el ancho máximo del contenedor para dividir el texto en dos líneas
              textAlign: 'justify', // Justifica el texto
              marginBottom: '0px',
            }}
          >
            <p
              style={{
                marginLeft: 0,
                marginTop: 0,
                color: 'black',
                fontWeight: 'bold',
                fontFamily: 'Arial',
                fontSize: '20px',
              }}
            >
              Consultoría
            </p>
            <p>Consigue asesoramiento personalizado para tu negocio.</p>
            <div
              style={{
                fontSize: 14,
                fontFamily: 'Arial',
                fontWeight: 'bold',
                padding: '7px 0px',
              }}
            >
              <span
                onClick={handleConsultoriaClick}
                style={{
                  marginLeft: 0,
                  marginTop: 10,
                  textDecoration: 'none',
                  color: 'black',
                  cursor: 'pointer',
                }}
              >
                Mas info <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>

          <div
            style={{
              border: '4px solid white', // Borde gris claro
              padding: '24px', // Ajusta el padding según sea necesario
              backgroundColor: 'rgb(207, 210, 218)', // Fondo gris
              maxWidth: '290px', // Ajusta el ancho máximo del contenedor para dividir el texto en dos líneas
              textAlign: 'justify', // Justifica el texto
              marginBottom: '0px',
            }}
          >
            <p
              style={{
                marginLeft: 0,
                marginTop: 0,
                color: 'black',
                fontWeight: 'bold',
                fontFamily: 'Arial',
                fontSize: '20px',
              }}
            >
              Servicio Web
            </p>
            <p>Adecúa tus páginas web para llegar a tu audiencia objetivo.</p>
            <div
              style={{
                fontSize: 14,
                fontFamily: 'Arial',
                fontWeight: 'bold',
                padding: '7px 0px',
              }}
            >
              <span
                onClick={handleServicioWebClick}
                style={{
                  marginLeft: 0,
                  marginTop: 10,
                  textDecoration: 'none',
                  color: 'black',
                  cursor: 'pointer',
                }}
              >
                Mas info <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center', // Asegura que los elementos estén alineados verticalmente
            fontSize: 28,
            fontFamily: 'Arial',
            fontWeight: 'bold',
            padding: '50px 0px',
            width: '100%', // Asegura que el div ocupe todo el ancho del navegador
            marginTop: '-55px', // Ajusta el margen superior según sea necesario
          }}
        >
          <div
            style={{
              padding: '0px', // Ajusta el padding según sea necesario
              border: '1px solid transparent', // Crea una caja invisible
              width: '300px', // Ajusta el ancho según sea necesario
              textAlign: 'left', // Centra el texto dentro de la caja
            }}
          >
            <p
              style={{
                marginLeft: -515,
                color: 'grey',
                fontFamily: 'Bebas Neue',
                fontSize: 22,
                textAlign: 'left',
              }}
            >
              Estamos presentes para el cliente incluso antes de que se acerque
              a nosotros
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start', // Alinea los elementos hacia la izquierda
                alignItems: 'center', // Asegura que los elementos estén alineados verticalmente
                fontSize: 14,
                fontFamily: 'Arial',
                fontWeight: 'bold',
                padding: '20px 0px', // Reduce el padding para disminuir el espacio
                width: '100%', // Asegura que el div ocupe todo el ancho del navegador
                marginLeft: -120,
                marginTop: 10,
                marginBottom: 25,
              }}
            >
              <p
                className="yellow-box blinking-text"
                style={{
                  padding: 10,
                  marginLeft: -350,
                  color: 'black',
                  fontSize: 20,
                }}
              >
                Transforma tu idea en realidad
              </p>
              <Link
                to="/contacto"
                className="blue-box"
                style={{ marginRight: 40, marginLeft: 40, fontSize: 17 }}
              >
                Contáctanos
              </Link>{' '}
              {/* Ajusta el margen izquierdo */}
              <p style={{ marginLeft: 20, color: 'transparent' }}>
                Nuestros servicios
              </p>
            </div>

            <div></div>
          </div>
        </div>
      </nav>
      <div
        style={{
          marginTop: -30,
        }}
      ></div>
      <IconitosClasicos />
    </div>
  );
}

export default Servicios;
