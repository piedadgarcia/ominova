import React from 'react';
import Micomponente from "../micomponente/Micomponente";

function Inicio() {
    return (
        <nav style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 15,
            width: '100%', // Asegura que el componente ocupe todo el ancho del navegador
            boxSizing: 'border-box' // Incluye el padding en el ancho total
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
                width: '100%' // Asegura que el div ocupe todo el ancho del navegador
            }}>
                <div style={{
                    marginTop:50,
                    marginLeft: 90 // Añade espacio a la izquierda de la figura
                }}>
                    <Micomponente />
                </div>
                {/* Aquí puedes poner algo si quieres que aparezca a la derecha de la imagen */}
                <div style={{
                    marginLeft: 200 // Ajusta este valor según sea necesario
                }}>
                    <p>TODO ES PARA LLEGAR A TUS CLIENTES</p>
                    <p className="parrafo-nuevo">Todo es para crear marca</p>
                    <p className="parrafo-nuevo">Todo es para vender más</p>
                </div>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'space bettween', // Asegura que los elementos estén alineados verticalmente
                fontSize: 14,
                fontFamily: 'Arial',
                fontWeight: 'bold',
                padding: '50px 0px',
                width: '100%' // Asegura que el div ocupe todo el ancho del navegador
            }}>
               <div style={{
                    marginLeft: 200 // Ajusta este valor según sea necesario
                }}></div>
                <p className="blue-box">Contáctanos</p>
                <div style={{
                    marginLeft: 20 // Ajusta este valor según sea necesario
                }}>

                </div>
                <p> Nuestros servicios </p>
            </div>
        </nav>
    );
}

export default Inicio;