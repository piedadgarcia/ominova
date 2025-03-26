import React from 'react';
import './../../App.css';
import Info from './../info/Info';

// omentario de bloque para excluir la importación de Micomponente
/*
import Micomponente from './../micomponente/Micomponente';  
*/
import NavMenu from './../navmenu/NavMenu';
import InicioCompleto from '../inicioCompleto/InicioCompleto';

function Principal() {
  return (
    <div className="container">
      <div className="info">
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

      {/*

        */}

      {/*
        <div className="inicio">
      <Inicio />
      </div>
*/}

      {/*  
      <div className="home">
      <Home />
      </div>
{/*

  {/*    
      <div className="casosDeExito1">
      <CasosDeExito1/>   
      </div>
      */}

      <div className="inicioPortada">
        <InicioCompleto />
      </div>
    </div>
  );
}

export default Principal;
