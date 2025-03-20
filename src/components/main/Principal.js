import React from 'react';
import './../../App.css';
import Home from './../home/Home';
import Info from './../info/Info';



// omentario de bloque para excluir la importación de Micomponente
/*
import Micomponente from './../micomponente/Micomponente';  
*/
import Inicio from '../inicio/Inicio';
import Mi3Componente from './../mi3componente/Mi3Componente';
import NavMenu from './../navmenu/NavMenu';

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
      
    </div>
  );
}

export default Principal;