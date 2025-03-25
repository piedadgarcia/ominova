import React from 'react';
import './../../App.css';
import Home from './../home/Home';
import Info from './../info/Info';
import CasosDeExito1 from '../casosDeExito1/CasosDeExito1'; 



// omentario de bloque para excluir la importación de Micomponente
/*
import Micomponente from './../micomponente/Micomponente';  
*/
import Inicio from '../inicio/Inicio';
import Mi3Componente from './../mi3componente/Mi3Componente';
import NavMenu from './../navmenu/NavMenu';
import InicioPortada from '../inicioPortada/InicioPortada';
import InicioAgencia from '../inicioAgencia/InicioAgencia'
import InicioCasosDeExito from '../inicioCasosDeExito/InicioCasosDeExito';

function Principal() {
  return (
    <div className='container'>
      <div className='info'>
      <Info />
      </div>

      <div className="navmenu">
      <NavMenu />
      </div>

    

      {/*
      <div className="micomponente-container">
      <Micomponente />
      /</div>
      */}


<div className="mi3componente">
      <Mi3Componente />   
      </div>

{/*
        <div className="inicio">
      <Inicio />
      </div>
*/}
      <div className="home">
      <Home />
      </div>
      
      <div className="casosDeExito1">
      <CasosDeExito1/>   
      </div>

      <div className="inicioPortada">
      <InicioPortada/>   
      </div>     

      <div className="inicioAgencia">
      <InicioAgencia/>   
      </div>                                            

      <div className="inicioCasosDeExito">
      <InicioCasosDeExito/>   
      </div>      

    </div>
  );
}

export default Principal;