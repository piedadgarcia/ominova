import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa Link

function InicioPortada() {
    const [texto, setTexto] = useState("AYUDARTE");
    const textos = [
        "AYUDARTE",
        "CONSTRUIR MARCA",
        "LLEGAR A TUS CLIENTES"
    ];

    const colores = {
        "AYUDARTE": "green", // Color gris
        "CONSTRUIR MARCA": "darkgrey", // Gris más oscuro
        "LLEGAR A TUS CLIENTES": "darkorange" // Naranja
    };

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % textos.length;
            setTexto(textos[index]);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <nav style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 15,
            width: '100%',
            height:'600',
            boxSizing: 'border-box'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                fontSize: 30,
                fontFamily: 'Bebas Neue',
                color: 'blue',
                fontWeight: 'bold',
                marginBottom: 0,
                width: '100%'
            }}>
                <div style={{
                    marginTop: 50,
                    marginLeft: 150
                }}>
                    
                        
                            <div className="circunferenciaPortada-container">
                                <img src="/PHOTO-2025-02-08-15-02-00.jpg" 
                                    alt="Htas_IA" 
                                    className="imagenPortada-circular" />
                            </div>
                    
                
                </div>
                <div style={{
                    marginLeft: 200
                }}>
                     {/* Parte fija con color constante */}
    <p style={{ color: "darkblue", fontSize: 40, margin: 0 }}>TODO ES PARA</p>
    {/* Parte dinámica con color cambiante */}
    <p style={{ color: colores[texto], margin: "20px 0 0 0", fontSize: 40  }}>{texto}</p>
   
</div>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'space-between',
                fontSize: 14,
                fontFamily: 'Arial',
                fontWeight: 'bold',
                padding: '50px 0px',
                width: '100%',
                marginTop: '-130px',
                 marginLeft: '230px'
            }}>
                <div style={{ marginLeft: 250}}></div>

                
                <Link to="/contacto" className="blue-box" style={{ textDecoration: 'none', color: 'white' }}>
          Contáctanos
        </Link>

                <div style={{ marginLeft: 20}}></div>

                <Link to="/servicios" >
                Nuestros Servicios
                </Link>

            </div>
        </nav>
    );
}

export default InicioPortada;

