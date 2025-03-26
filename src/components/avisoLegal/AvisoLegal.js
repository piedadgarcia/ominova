import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link para la navegación
import IconitosClasicos from '../iconitosClasicos/IconitosClasicos';

function AvisoLegal() {
  return (
    <div>
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          margin: '0 84px',
          padding: '20px',
        }}
      >
        <h1 style={{ marginBottom: '50px', marginTop: '150px' }}>
          Aviso Legal
        </h1>
        <p style={{ textAlign: 'justify', marginBottom: '50px' }}>
          Se informa que el acceso y uso del sitio web está sujeto al presente
          aviso legal, para dar cumplimiento a las obligaciones dispuestas en la
          Ley 34/2002, de Servicios de la Sociedad de la Información y del
          Comercio Electrónico (LSSI-CE), por lo que recomendamos su lectura.
          Como usuario se compromete a utilizarlo de conformidad con lo aquí
          establecido, así como a la normativa legal vigente en el momento de su
          utilización.
        </p>

        <h2 style={{ marginBottom: '50px' }}>1. Datos de Identificación</h2>
        <p style={{ textAlign: 'justify', marginBottom: '10px' }}>
          Sitio Web:{' '}
          <Link
            to="/inicio"
            style={{ color: '#007bff', textDecoration: 'none' }}
          >
            https://ominova.com/
          </Link>
        </p>
        <p style={{ textAlign: 'justify', marginBottom: '10px' }}>
          Nombre comercial: Ominova{' '}
        </p>
        <p style={{ textAlign: 'justify', marginBottom: '10px' }}>
          Titular del sitio Web: Ominova XXXXX
        </p>
        <p style={{ textAlign: 'justify', marginBottom: '10px' }}>
          NIF:XXXXXX B0197681
        </p>
        <p style={{ textAlign: 'justify', marginBottom: '10px' }}>
          Domicilio: C/Principe de Vergara 210, 28045 (España)
        </p>
        <p style={{ textAlign: 'justify', marginBottom: '50px' }}>
          Email:
          <a
            href="mailto:info@ominovaXXXX.com"
            style={{ color: '#007bff', textDecoration: 'none' }}
          >
            {' '}
            info@ominovaXXXX.com{' '}
          </a>
        </p>

        <h2 style={{ marginBottom: '50px' }}>2. Objeto</h2>
        <p style={{ textAlign: 'justify', marginBottom: '50px' }}>
          Este aviso legal tiene por objeto regular el acceso y la utilización
          del sitio web alojado bajo el nombre de dominio https://ominova.com
          (en adelante Sitio Web así comomlos contenidos que el Prestador pone a
          disposición de sus usuarios usuarios) .
        </p>

        <h2 style={{ marginBottom: '50px' }}>3. Enlaces</h2>
        <p style={{ textAlign: 'justify', marginBottom: '50px' }}>
          El Sitio Web puede contener enlaces a otros sitioss web gesstionados
          por tercerosde cuyos contenidos el Prestador carece de control, por lo
          que no asumirá ningun tipo de responsabilidad frente a ellos. En todo
          caso se procederá a la retirada inmediata de la redirección a dicho
          sitio web y de cualquier contenido que pudiera contravenir la
          legislación nacional o internacional, la moral o el orden público,
          poniendo en conocimiento de las autoridades competentes el
          contenidonen cuestión
        </p>

        <h2 style={{ marginBottom: '50px' }}>
          4. Propiedad Intelectual e industrial
        </h2>
        <p style={{ textAlign: 'justify', marginBottom: '20px' }}>
          El Sitio Web, incluyendo a título enunciativo, pero no limitativo su
          programación, edición, compilación y demás elementos necesarios para
          su funcionamiento, los diseños, logotipos, texto y/o gráficos es
          propiedad del Prestador o en su caso se dispone de licencia o
          autorización por parte de los autores. Todos los contenidos del Sitio
          Web se encuentran debidamente protegidos por la normativa española e
          internacional en materia de propiedad intelectual e industrial, así
          como inscritos en los registros públicos correspondientes.
        </p>
        <p style={{ textAlign: 'justify', marginBottom: '20px' }}>
          Independientemente de la finalidad para la que fueran destinados, la
          reproducción total o parcial, uso, explotación, distribución y
          comercialización, requiere en todo caso de previa autorización
          escrita. Cualquier uso no autorizado será considerado un
          incumplimiento grave de los derechos de propiedad intelectual o
          industrial del autor. Los diseños, logotipos, texto y/o gráficos
          ajenos al Prestador y que pudieran aparecer en el Sitio Web,
          pertenecen a sus respectivos propietarios, siendo ellos mismos
          responsables de cualquier posible controversia que pudiera suscitarse
          respecto a los mismos.
        </p>
        <p style={{ textAlign: 'justify', marginBottom: '20px' }}>
          Para realizar cualquier tipo de observación respecto a posibles
          incumplimientos de los derechos de propiedad intelectual o industrial,
          así como sobre cualquiera de los contenidos del Sitio Web, puede
          dirigir un correo electrónico a{' '}
          <a
            href="mailto:info@ominovaXXXX.com"
            style={{ color: '#007bff', textDecoration: 'none' }}
          >
            info@ominovaXXXX.com{' '}
          </a>
        </p>
        <p style={{ textAlign: 'justify', marginBottom: '50px' }}>
          El Prestador se reserva expresamente cuantas acciones civiles y
          penales pudieran corresponderle como consecuencia de la vulneración de
          la pacífica posesión y/o titularidad no autorizada de los derechos de
          propiedad industrial e intelectual.
        </p>

        <h2 style={{ marginBottom: '20px' }}>5. Política de Privacidad </h2>
        <p style={{ textAlign: 'justify', marginBottom: '20px' }}>
          En virtud de lo establecido por la normativa aplicable en materia de
          protección de datos, todos los datos de carácter personal facilitados
          por el Usuario a través de los correspondientes formularios durante la
          utilización del Sitio Web serán tratados por El Prestador según lo
          dispuesto en la Política de Privacidad del Sitio Web.
        </p>
        <p style={{ textAlign: 'justify', marginBottom: '20px' }}>
          El Prestador tratará los datos personales del Usuario de forma
          confidencial y según la normativa de protección de datos aplicable y
          no los divulgará a terceros, a menos que sea necesario para el
          cumplimiento de las obligaciones contractuales y por obligación legal.
        </p>
      </div>

      <IconitosClasicos />
    </div>
  );
}

export default AvisoLegal;
