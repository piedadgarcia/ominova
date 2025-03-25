function InicioAgencia() {
    return (
      <div className="inicioAgencia">
        <div className="texto-verde-container" style={{ textAlign: 'left' }}>
          <p
            className="texto-grande"
            style={{
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'left',
              marginLeft: '100px',
              marginTop: '100px',
            }}
          >
            Agencia de marketing digital para líderes
          </p>
          <p
            className="texto-normal"
            style={{
              color: 'grey',
              textAlign: 'left',
              marginLeft: '100px',
              marginTop: '30px',
            }}
          >
            Tan sólo con la mejor calidad se pueden alcanzar los mejores resultados.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li
              className="texto-equipo equipo"
              style={{
                color: 'black',
                marginLeft: '100px',
                marginTop: '30px',
                fontSize: '14',
              }}
            >
              <strong>Nuestro equipo</strong>
              <p
                className="texto-normal"
                style={{
                  color: 'grey',
                  textAlign: 'justify',
                  marginTop: '10px',
                  marginLeft: '-5px',
                  marginBottom: '40px',
                  width: '600px',
                }}
              >
                Resultados, creatividad, emoción, plazos cumplidos, marketing sencillo...todo ello depende de personas y, por eso, apostamos por formar el mejor equipo posible. Todo el equipo reúne los mismos requisitos: buena gente, pasión por su trabajo y especialización absoluta en su oficio. En la Empresa contamos con técnicos especializados en cada área de trabajo.
              </p>
              <p className="conoce-mas">
                <strong
                  style={{
                    color: 'darkgrey',
                    fontSize: '12',
                    marginLeft: '100px',
                    marginTop: '30px',
                  }}
                >
                  Conoce más sobre nosotros <span style={{ marginLeft: '10px' }}>→</span>
                </strong>
              </p>
            </li>
            <li
              className="texto-equipo procesos"
              style={{
                color: 'black',
                marginLeft: '100px',
                fontSize: '14',
                marginTop: '40px',
              }}
            >
              <strong>Nuestros procesos</strong>
            </li>
            <li
              className="texto-equipo clientes"
              style={{
                color: 'black',
                marginLeft: '100px',
                fontSize: '14',
                marginTop: '40px',
              }}
            >
              <strong>Nuestros clientes</strong>
            </li>
          </ul>
        </div>
  
        <div className="texto-e-imagen" style={{ marginTop: '-230px', marginBottom: '160px' }}>
          <p
            className="texto-verde texto-izquierda"
            style={{
              color: 'black',
              textAlign: 'left',
              marginTop: '10px',
              marginLeft: '100px',
            }}
          ></p>
  
          <div className="imagen-contenedor">
            <img src="/imagen2.png" alt="Imagen adicional" className="imagen-lado-derecho" />
            <div className="imagenes-posicionadas">
              <img src="/ACCOUNT MANAGER.png" alt="ACCOUNT MANAGER" className="imagen-centro3" />
              <img src="/LEADER.png" alt="LEADER" className="imagen-centro" />
              <img src="/SPECIALIST.jpg" alt="SPECIALIST" className="imagen-centro4" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default InicioAgencia;