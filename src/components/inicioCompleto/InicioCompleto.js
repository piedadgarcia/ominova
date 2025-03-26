import React from 'react';
import InicioPortada from '../inicioPortada/InicioPortada';
import InicioAgencia from '../inicioAgencia/InicioAgencia';
import InicioCasosDeExito from '../inicioCasosDeExito/InicioCasosDeExito';
import InicioServicios from '../inicioServicios/InicioServicios';

function InicioCompleto() {
  return (
    <div style={{ marginTop: '100px' }}> {/* Ajusta el margen superior */}
      <InicioPortada />
      <InicioAgencia />
      <InicioCasosDeExito />
      <InicioServicios />
    </div>
  );
}

export default InicioCompleto;