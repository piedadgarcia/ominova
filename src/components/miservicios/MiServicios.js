import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import MiComServicios from "../micomservicios/MiComServicios"; // Corregir la ruta de importación
import Info from '../info/Info';

function MiServicios() {
    return (
        <div>
            <Info />
            <nav style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
                width: '100%', // Asegura que el componente ocupe todo el ancho del navegador
                boxSizing: 'border-box' // Incluye el padding en el ancho total
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    fontSize: 35,
                    fontFamily: 'Bebas Neue',
                    color: 'black',
                    fontWeight: 'bold',
                    marginBottom: 0,
                    width: '100%' // Asegura que el div ocupe todo el ancho del navegador
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        marginLeft: '50px' // Ajusta este valor según sea necesario
                    }}>
                        <p>Nuestros <span style={{ color: 'grey' }}>Servicios</span></p>
                        <div style={{
                            maxWidth: '650px', // Ajusta el ancho máximo del contenedor
                            textAlign: 'justify', // Justifica el texto
                            margin: '0 auto' // Centra el contenedor horizontalmente
                        }}>
                            <p style={{ color: 'grey', fontSize: '22px' }}>Nos esforzamos diariamente en mejorar nuestros productos y procesos, para que cuando llegue tu proyecto, tengamos ya definido el camino hacia el éxito.</p>
                        </div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-start', // Alinea los elementos hacia la izquierda
                            alignItems: 'center', // Asegura que los elementos estén alineados verticalmente
                            fontSize: 14,
                            fontFamily: 'Arial',
                            fontWeight: 'bold',
                            padding: '20px 0px', // Reduce el padding para disminuir el espacio
                            width: '100%', // Asegura que el div ocupe todo el ancho del navegador
                            marginLeft: 200,
                            marginTop: 10
                        }}>
                            <Link to="/contacto" className="blue-box" style={{ marginRight: 20 }}>Contáctanos</Link> {/* Ajusta el margen izquierdo */}
                            <p style={{ marginLeft: 20 }}>Nuestros servicios</p>
                        </div>
                    </div>

                    <div style={{
                        marginTop: 100,
                        marginLeft: 130 // Añade espacio a la izquierda de la figura
                    }}>
                        <MiComServicios />
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center', // Asegura que los elementos estén alineados verticalmente
                    fontSize: 30,
                    fontFamily: 'Arial',
                    fontWeight: 'bold',
                    padding: '50px 0px',
                    width: '100%', // Asegura que el div ocupe todo el ancho del navegador
                    marginTop: '-80px'
                }}>
                    <div style={{
                        padding: '0px', // Ajusta el padding según sea necesario
                        border: '1px solid transparent', // Crea una caja invisible
                        width: '600px', // Ajusta el ancho según sea necesario
                        textAlign: 'left' // Centra el texto dentro de la caja
                    }}>
                        <p style={{ marginLeft: -360 }}>Damos servicio al cliente antes de que nos conozca</p>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row', // Alinea las cajas en una fila
                    justifyContent: 'space-between', // Espacio entre las cajas
                    alignItems: 'flex-start', // Alinea los elementos a la izquierda
                    fontFamily: 'Arial',
                    padding: '40px 0px',
                    marginTop: -70,
                    marginLeft: 0 // Ajusta este valor según sea necesario para desplazar la fila hacia la izquierda
                }}>
                    <div style={{
                        border: '1px solid lightgrey', // Borde gris claro
                        padding: '24px', // Ajusta el padding según sea necesario
                        backgroundColor: 'transparent', // Fondo transparente
                        maxWidth: '290px', // Ajusta el ancho máximo del contenedor para dividir el texto en dos líneas
                        textAlign: 'justify', // Justifica el texto
                        marginBottom: '0px'
                    }}>
                        <p style={{ marginLeft: 0, marginTop: 0, color: 'black', fontWeight: 'bold', fontFamily: 'Arial' }}>Branding</p>
                        <p>Crea una marca única y atractiva que identifique quién eres.</p>
                        <div style={{
                            fontSize: 14,
                            fontFamily: 'Arial',
                            fontWeight: 'bold',
                            padding: '7px 0px',
                        }}>
                            <Link to="/branding" style={{ marginLeft: 0, marginTop: 10, textDecoration: 'none', color: 'black' }}>
                                Mas info <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>
                    </div>

                    <div style={{
                        border: '1px solid lightgrey', // Borde gris claro
                        padding: '24px', // Ajusta el padding según sea necesario
                        backgroundColor: 'transparent', // Fondo transparente
                        maxWidth: '290px', // Ajusta el ancho máximo del contenedor para dividir el texto en dos líneas
                        textAlign: 'justify', // Justifica el texto
                        marginBottom: '0px'
                    }}>
                        <p style={{ marginLeft: 0, marginTop: 0, color: 'black', fontWeight: 'bold', fontFamily: 'Arial' }}>Marketing</p>
                        <p>Desarrolla estrategias efectivas para llegar a tu audiencia.</p>
                        <div style={{
                            fontSize: 14,
                            fontFamily: 'Arial',
                            fontWeight: 'bold',
                            padding: '7px 0px',
                        }}>
                            <Link to="/otro-componente" style={{ marginLeft: 0, marginTop: 10, textDecoration: 'none', color: 'black' }}>
                                Mas info <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>
                    </div>

                    <div style={{
                        border: '1px solid lightgrey', // Borde gris claro
                        padding: '24px', // Ajusta el padding según sea necesario
                        backgroundColor: 'transparent', // Fondo transparente
                        maxWidth: '290px', // Ajusta el ancho máximo del contenedor para dividir el texto en dos líneas
                        textAlign: 'justify', // Justifica el texto
                        marginBottom: '0px'
                    }}>
                        <p style={{ marginLeft: 0, marginTop: 0, color: 'black', fontWeight: 'bold', fontFamily: 'Arial' }}>Consultoría</p>
                        <p>Obtén asesoramiento experto para tu negocio.</p>
                        <div style={{
                            fontSize: 14,
                            fontFamily: 'Arial',
                            fontWeight: 'bold',
                            padding: '7px 0px',
                        }}>
                            <Link to="/otro-componente" style={{ marginLeft: 0, marginTop: 10, textDecoration: 'none', color: 'black' }}>
                                Mas info <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>
                    </div>

                    <div style={{
                        border: '1px solid lightgrey', // Borde gris claro
                        padding: '24px', // Ajusta el padding según sea necesario
                        backgroundColor: 'transparent', // Fondo transparente
                        maxWidth: '290px', // Ajusta el ancho máximo del contenedor para dividir el texto en dos líneas
                        textAlign: 'justify', // Justifica el texto
                        marginBottom: '0px'
                    }}>
                        <p style={{ marginLeft: 0, marginTop: 0, color: 'black', fontWeight: 'bold', fontFamily: 'Arial' }}>Desarrollo</p>
                        <p>Implementa soluciones tecnológicas innovadoras.</p>
                        <div style={{
                            fontSize: 14,
                            fontFamily: 'Arial',
                            fontWeight: 'bold',
                            padding: '7px 0px',
                        }}>
                            <Link to="/otro-componente" style={{ marginLeft: 0, marginTop: 10, textDecoration: 'none', color: 'black' }}>
                                Mas info <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default MiServicios;