import React from 'react';

function Info() {
  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
      }}
    >
      <div
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          marginBottom: 0,
        }}
      >
        65634xxxx9 I info@ominova.com
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        {/* Puedes agregar más contenido aquí si es necesario */}
      </div>
      <div
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          color: '#333',
          cursor: 'pointer',
        }}
      >
        Tu agencia digital
      </div>
    </nav>
  );
}

export default Info;
