import React from 'react';

import CasosDeExito1DYDesaWeb from '../casosDeExito1DYDesaWeb/CasosDeExito1DYDesaWeb';  
import CasosDeExito1BrandIdent from '../casosDeExito1BrandIdent/CasosDeExito1BrandIdent';  
import CasosDeExito1Resultados from '../casosDeExito1Resultados/CasosDeExito1Resultados';
import CasosDeExito1Retos from '../casosDeExito1Retos/CasosDeExito1Retos'; 
import CasosDeExito1Titulo from '../casosDeExito1Titulo/CasosDeExito1Titulo';
import './../../App.css';

function CasosDeExito1() {
    return (
        <div style={{ width: '100%', margin: 0, padding: 0 }}>

            
            <div className="imagen-CasoDeExito1">
                <img 
                    src="/PHOTO-2025-03-19-22-29-04.jpg" 
                    alt="FotoCasoDeExito1CHAGAR" 
                        style={{ 
                            width: '100%', // La imagen ocupará todo el ancho de la página
                            height: '600px', // Altura fija
                            objectFit: 'cover', // Recorta la imagen para ajustarse al contenedor
                            display: 'block', // Elimina espacios extra alrededor de la imagen
                    }} 
                    
              />
            </div>
        
            <CasosDeExito1Titulo />
            <CasosDeExito1Retos />

            <div className="imagen-CasoDeExito1">
                <img 
                    src="/PHOTO-2025-03-20-09-15-09.jpg" 
                    alt="FotoCasoDeExito1Aros" 
                    style={{ 
                        width: '100%', // La imagen ocupará todo el ancho de la página
                        height: '600px', // Altura fija
                        objectFit: 'cover', // Recorta la imagen para ajustarse al contenedor
                        display: 'block', // Elimina espacios extra alrededor de la imagen
                }} 
                />
            </div>

            <CasosDeExito1BrandIdent />

            <div className="imagen-CasoDeExito1">
                <img 
                    src="/PHOTO-2025-03-20-09-23-02.jpg" 
                    alt="FotoCasoDeExitoMontaña" 
                    style={{ 
                        width: '100%', // La imagen ocupará todo el ancho de la página
                        height: '600px', // Altura fija
                        objectFit: 'cover', // Recorta la imagen para ajustarse al contenedor
                        display: 'block', // Elimina espacios extra alrededor de la imagen
                }} 
                />
            </div>

            <CasosDeExito1DYDesaWeb />
            <div className="imagen-CasoDeExito1">
                <img 
                    src="/PHOTO-2025-03-20-09-32-14.jpg" 
                    alt="FotoCasoDeExitoIcono" 
                    style={{ 
                        width: '100%', // La imagen ocupará todo el ancho de la página
                        height: '600px', // Altura fija
                        objectFit: 'cover', // Recorta la imagen para ajustarse al contenedor
                        display: 'block', // Elimina espacios extra alrededor de la imagen
                }} 
                />
            </div>
            <CasosDeExito1Resultados />

        </div>
    );
}

export default CasosDeExito1;