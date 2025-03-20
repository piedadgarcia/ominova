import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Info from '../info/Info'; // Asegúrate de que la ruta sea correcta
import TomaDeContacto from '../tomaDeContacto/TomaDeContacto';
import Briefing from '../briefing/Briefing';
import Estrategia from '../estrategia/Estrategia';
import Contenidos from '../contenidos/Contenidos';
import DiseñoFase1 from '../diseñoFase1/DiseñoFase1';
import DiseñoFase2 from '../diseñoFase2/DiseñoFase2';
import Desarrollo from '../desarrollo/Desarrollo';
import Lanzamiento from '../lanzamiento/Lanzamiento';
import Usabilidad from '../usabilidad/Usabilidad'; // Importa el componente Usabilidad
import AuditoriaWeb from '../auditoriaWeb/AuditoriaWeb'; // Importa el componente AuditoriaWeb
import OptimizacionSeo from '../optimizacionSeo/OptimizacionSeo'; // Importa el componente OptimizacionSeo
import './../../App.css';

function ServicioWeb() {
  const location = useLocation();
  const [showServicioWeb, setShowServicioWeb] = useState(false);
  const [showConsultoria, setShowConsultoria] = useState(false);

  useEffect(() => {
    if (location.state) {
      setShowServicioWeb(location.state.showServicioWeb || false);
      setShowConsultoria(location.state.showConsultoria || false);
    }
  }, [location.state]);

  const toggleServicioWeb = () => {
    setShowServicioWeb(!showServicioWeb);
    setShowConsultoria(false); // Asegúrate de cerrar Consultoria si se abre Servicio Web
  };

  const toggleConsultoria = () => {
    setShowConsultoria(!showConsultoria);
    setShowServicioWeb(false); // Asegúrate de cerrar Servicio Web si se abre Consultoria
  };

  return (
    <div>
      <Info />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline', // Alinea los elementos verticalmente al centro
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
          width: '50%', // Asegura que el componente ocupe la mitad del ancho del navegador
          boxSizing: 'border-box' // Incluye el padding en el ancho total
        }}>
          <div style={{
            marginTop: 50,
            marginLeft: -420 // Añade espacio a la izquierda de la figura
          }}>
            <div style={{  
              fontFamily: 'Arial',
              fontSize: 28,
              fontWeight: 'bold',
              padding: '15px 0px',
              marginLeft: 250,
            }}>
              <p>Nuestros <span style={{ color: 'grey' }}>Servicios</span></p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start', // Alinea los elementos a la izquierda
                marginTop: 20,
                marginLeft: 2, // Ajusta este valor según sea necesario
                fontSize: 16,
                fontWeight: 'bold',
              }}>
                <div className="caja-con-lineas" style={{ width: '450px', position: 'relative' }} onClick={toggleServicioWeb}>
                  <p>Servicio Web</p>
                  <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}></span>
                </div>
                {showServicioWeb && (
                  <div style={{ marginTop: '0px', width: '450px' }}>
                    <div className="caja-con-lineas" style={{ width: '450px', position: 'relative' }} onClick={toggleServicioWeb}>
                      <p style={{ marginLeft: '30px', color: 'grey' }}><span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>{'<'}</span> Ver todos</p>
                    </div>
                    <div className="caja-con-lineas" style={{ width: '450px' }}>
                      <p>Toma de Contacto</p>
                    </div>
                    <div className="caja-con-lineas" style={{ width: '450px' }}>
                      <p>Briefing</p>
                    </div>
                    <div className="caja-con-lineas" style={{ width: '450px' }}>
                      <p>Estrategia</p>
                    </div>
                    <div className="caja-con-lineas" style={{ width: '450px' }}>
                      <p>Contenidos</p>
                    </div>
                    <div className="caja-con-lineas" style={{ width: '450px' }}>
                      <p>Diseño Fase 1</p>
                    </div>
                    <div className="caja-con-lineas" style={{ width: '450px' }}>
                      <p>Diseño Fase 2</p>
                    </div>
                    <div className="caja-con-lineas" style={{ width: '450px' }}>
                      <p>Desarrollo</p>
                    </div>
                    <div className="caja-con-lineas" style={{ width: '450px' }}>
                      <p>Lanzamiento</p>
                    </div>
                  </div>
                )}
                <div className="caja-con-lineas" style={{ width: '450px', position: 'relative' }} onClick={toggleConsultoria}>
                  <p>Consultoría</p>
                  <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}></span>
                </div>
                {showConsultoria && (
                  <div style={{ marginTop: '0px', width: '450px' }}>
                    <div className="caja-con-lineas" style={{ width: '450px', position: 'relative' }} onClick={toggleConsultoria}>
                      <p style={{ marginLeft: '30px', color: 'grey' }}><span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}>{'<'}</span> Ver todos</p>
                    </div>
                    <div className="caja-con-lineas" style={{ width: '450px' }}>
                      <p>Usabilidad</p>
                    </div>
                    <div className="caja-con-lineas" style={{ width: '450px' }}>
                      <p>Auditoria Web</p>
                    </div>
                    <div className="caja-con-lineas" style={{ width: '450px' }}>
                      <p>Posicionamiento SEO</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start', // Alinea los elementos hacia el inicio del contenedor
          alignItems: 'flex-start', // Alinea los elementos a la izquierda
          padding: 15,
          width: '50%', // Asegura que el componente ocupe la mitad del ancho del navegador
          boxSizing: 'border-box', // Incluye el padding en el ancho total
        }}>
          {showServicioWeb && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start', // Alinea los elementos hacia el inicio del contenedor
              alignItems: 'flex-start', // Asegura que los elementos estén alineados a la izquierda
              fontSize: 40,
              fontFamily: 'Arial',
              fontWeight: 'bold',
              padding: '50px 0px',
              width: '120%', // Asegura que el div ocupe todo el ancho del navegador
              marginLeft: -170,
            }}>
              <p> Servicio Web </p>
              <div style={{  
                fontFamily: 'Arial',
                fontSize: '15px',
                fontWeight: 'normal',
                textAlign: 'justify', // Justifica el texto
                padding: '0px 0px',
                width: '95%' // Asegura que el div ocupe el 80% del ancho del navegador
              }}>
                <p> En Ominova estamos especializados en diseño y desarrollo web. Trabajamos con los principales CMS del mercado y ofrecemos páginas web a medida, de una alta calidad y con un enorme rendimiento. Tanto si buscas un ecommerce como una web corporativa sencilla, nos adaptamos a tus necesidades. </p>
                <p> Descubre cómo hacemos que ocurra: </p>
              </div>

              <div style={{
                fontSize: 27,
                fontFamily: 'Arial',
                fontWeight: 'bold',
                width: '95%' 
              }}>
                <TomaDeContacto />
                <Briefing />
                <Estrategia />
                <Contenidos />
                <DiseñoFase1 />
                <DiseñoFase2 />
                <Desarrollo />
                <Lanzamiento />
              </div>
            </div>
          )}
          {showConsultoria && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start', // Alinea los elementos hacia el inicio del contenedor
              alignItems: 'flex-start', // Asegura que los elementos estén alineados a la izquierda
              fontSize: 40,
              fontFamily: 'Arial',
              fontWeight: 'bold',
              padding: '50px 0px',
              width: '120%', // Asegura que el div ocupe todo el ancho del navegador
              marginLeft: -170,
            }}>
              <p> Consultoría </p>
              <div style={{  
                fontFamily: 'Arial',
                fontSize: '15px',
                fontWeight: 'normal',
                textAlign: 'justify', // Justifica el texto
                padding: '0px 0px',
                width: '95%' // Asegura que el div ocupe el 80% del ancho del navegador
              }}>
                <p> En Ominova estamos especializados en diseño y desarrollo web. Trabajamos con los principales CMS del mercado y ofrecemos páginas web a medida, de una alta calidad y con un enorme rendimiento. Tanto si buscas un ecommerce como una web corporativa sencilla, nos adaptamos a tus necesidades. </p>
                <p> Descubre cómo hacemos que ocurra: </p>
              </div>

              <div style={{
                fontSize: 27,
                fontFamily: 'Arial',
                fontWeight: 'bold',
                width: '95%' 
              }}>
                <Usabilidad />
                <AuditoriaWeb />
                <OptimizacionSeo />
              </div>
            </div>
          )}
        </div> 
      </div>
    </div>
  );
}

export default ServicioWeb;