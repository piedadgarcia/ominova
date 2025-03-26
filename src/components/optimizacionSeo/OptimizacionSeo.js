import React, { useState } from 'react';
import './../../App.css';

function OptimizacionSeo() {
  const [showTextLlamada, setShowTextLlamada] = useState(false);
  const [showTextPrebriefing, setShowTextPrebriefing] = useState(false);

  const toggleTextLlamada = () => {
    setShowTextLlamada(!showTextLlamada);
  };

  const toggleTextPrebriefing = () => {
    setShowTextPrebriefing(!showTextPrebriefing);
  };

  return (
    <div>
      <div
        style={{
          fontSize: 27,
          fontFamily: 'Arial',
          fontWeight: 'bold',
        }}
      >
        <p>Briefing </p>
      </div>

      <div
        style={{
          fontFamily: 'Arial',
          fontSize: '15px',
          fontWeight: 'normal',
          textAlign: 'justify', // Justifica el texto
          padding: '0px 0px',
          width: '100%', // Asegura que el div ocupe todo el ancho del navegador
        }}
      >
        <p>
          {' '}
          Una vez tengamos claro cómo funciona tu negocio y qué te gustaría
          conseguir, pasamos a un briefing un poco más profundo con preguntas
          que nos permitirán hacer de tu web una auténtica página corporativa.
        </p>
        <p>
          {' '}
          ¡No te asustes! No todos tienen claras sus ideas y algunas preguntas
          se quedan sin responder, pero eso no detendrá a nuestro equipo de
          diseño y desarrollo web.
        </p>
        <p>
          En el briefing estudiamos cuáles son los puntos fuertes de tu negocio,
          qué puede hacer qué te diferencies y cómo van a encontrarte tus
          clientes para ponérselo fácil.
        </p>

        <div
          style={{
            fontFamily: 'Arial',
            fontSize: '15px',
            textAlign: 'justify', // Justifica el texto
            padding: '0px 0px',
            fontWeight: 'bold',
            width: '80%', // Asegura que el div ocupe todo el ancho del navegador
          }}
        >
          <div
            className="caja-con-lineas"
            style={{ width: '783px', position: 'relative' }}
          >
            <p>Reunión de técnicos & cliente</p>
            <span
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
              }}
              onClick={toggleTextLlamada}
            >
              +
            </span>
          </div>
          {showTextLlamada && (
            <div style={{ marginTop: '10px', width: '124%' }}>
              <p style={{ color: 'grey' }}>
                Con todos los datos recogidos sobre el papel, o sobre la
                pantalla, el equipo de técnicos de ómibu se reunirá contigo para
                discutir cómo van a ser las siguientes fases, qué va a incluir
                la web y cuáles van a ser los objetivos que queremos conseguir.
              </p>
              <p style={{ color: 'grey' }}>
                Nuestro{' '}
                <strong style={{ color: 'black' }}>
                  equipo de desarrolladores web
                </strong>{' '}
                diseñarán el tipo de web que necesites, ya sea una{' '}
                <strong style={{ color: 'black' }}>
                  página web corporativa
                </strong>
                , una{' '}
                <strong style={{ color: 'black' }}>
                  tienda online con miles de productos
                </strong>{' '}
                o una{' '}
                <strong style={{ color: 'black' }}>
                  página de aterrizaje específica
                </strong>{' '}
                para tus campañas de marketing online.
              </p>
            </div>
          )}
          <div
            className="caja-con-lineas"
            style={{ width: '783px', position: 'relative' }}
          >
            <p>Inmersión en el Proyecto</p>
            <span
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
              }}
              onClick={toggleTextPrebriefing}
            >
              +
            </span>
          </div>
          {showTextPrebriefing && (
            <div style={{ marginTop: '10px', width: '124%' }}>
              <p style={{ color: 'grey' }}>
                Si hablamos del{' '}
                <strong style={{ color: 'black' }}>
                  {' '}
                  diseño de web corporativa{' '}
                </strong>{' '}
                no hablamos de una{' '}
                <strong style={{ color: 'black' }}> página web </strong> que
                está orientada a la venta o a hacer un muestrario de catálogo de
                productos, sino el objetivo principal de{' '}
                <strong style={{ color: 'grey' }}>
                  {' '}
                  una página web corporativa{' '}
                </strong>{' '}
                es mostrar a cada uno de los visitantes un escaparate de tu
                empresa que sea acorde a tu imagen de marca, tus valores como
                empresa, tus servicios y que responda siempre a las necesidades
                de información o dudas que pueda presentar tu cliente potencial.
              </p>
              <p style={{ color: 'grey' }}>
                Todos nuestros proyectos de{' '}
                <strong style={{ color: 'black' }}>
                  {' '}
                  diseño de web corporativa{' '}
                </strong>{' '}
                buscan potenciar tus cualidades y servicios para diferenciarte
                de tu competencia, realizándose con un diseño que sea muy visual
                y sencillo para hacerla lo más práctica y funcional.
              </p>
            </div>
          )}
          <div
            className="caja-con-lineas"
            style={{ width: '783px', position: 'relative' }}
          >
            <p>
              Definición de servicios, productos del sitio web, formas de pago y
              transportistas
            </p>
            <span
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
              }}
              onClick={toggleTextLlamada}
            >
              +
            </span>
          </div>
          {showTextLlamada && (
            <div style={{ marginTop: '10px', width: '124%' }}>
              <p style={{ color: 'grey' }}>
                A la hora de{' '}
                <strong style={{ color: 'black' }}>crear una web</strong>, hay
                que especificar todos y cada uno de los servicios que ofreces o
                de los productos que vas a vender a través de ella. Esto permite
                tener claro qué producto o servicio desea comprar el cliente y
                personalizar mejor su experiencia.
              </p>
              <p style={{ color: 'grey' }}>
                Por otra parte, hay que establecer todas las{' '}
                <strong style={{ color: 'black' }}>facilidades de pago</strong>{' '}
                posibles para evitar que un posible cliente abandone justo antes
                de finalizar una compra. Las{' '}
                <strong style={{ color: 'black' }}>condiciones de envío</strong>{' '}
                deberán estar reflejadas en la web y visibles para los usuarios,
                por ello debemos conocer todas ellas con certeza.
              </p>
            </div>
          )}
          <div
            className="caja-con-lineas"
            style={{ width: '783px', position: 'relative' }}
          >
            <p>Definición de objetivos del proyecto</p>
            <span
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
              }}
              onClick={toggleTextLlamada}
            >
              +
            </span>
          </div>
          {showTextLlamada && (
            <div style={{ marginTop: '10px', width: '124%' }}>
              <p style={{ color: 'grey' }}>
                Puede haber muchos tipos de web y cada una de ellas puede
                perseguir alcanzar diversos objetivos. Es clave definir tras una
                investigación del mercado y de tus recursos qué conversiones
                queremos que hagan los visitantes: pedir presupuesto, comprar,
                solicitar una reunión, visitar tu tienda o potenciar la marca.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OptimizacionSeo;
