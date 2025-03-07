import React, { useState } from 'react';
import Info from '../info/Info'; // Asegúrate de que la ruta sea correcta
import './../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
    mensaje: '',
    privacidad: false
  });

  const [startDate, setStartDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a un servidor
    console.log('Datos del formulario:', formData);
    // Puedes usar fetch o axios para enviar los datos a un servidor
    // fetch('/api/contacto', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(formData)
    // }).then(response => {
    //   // Maneja la respuesta del servidor
    // });
  };

  return (
    <div>
      <Info />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start', // Alinea los elementos a la izquierda
          padding: 30,
          marginTop: 45,
          marginLeft: 35,
          textAlign: 'left' // Alinea el texto a la izquierda
        }}>
          <div style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 0,
            marginTop:10 // Ajusta este valor para reducir el espacio
          }}>
            ¿En qué podemos ayudarte?
            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'left',
                fontSize: 15,
                fontFamily: 'Arial',
                color: 'black',
                fontWeight: 'bold',
                padding: 15,
                marginTop: 15,
                marginBottom: 10,
                width:600
              }}>
                <div>
                  <p>Nombre</p>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Escribe tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    style={{ width: '250px', padding: '5px',marginTop: '-10px' , marginBottom: '10px' }}
                  />
                </div>
                <div>
                  <p>Empresa</p>
                  <input
                    type="text"
                    name="empresa"
                    placeholder="Escribe tu empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    style={{ width: '250px', padding: '5px',marginTop: '-10px', marginBottom: '10px' }}
                  />
                </div>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'left',
                fontSize: 15,
                fontFamily: 'Arial',
                color: 'black',
                fontWeight: 'bold',
                padding: 15,
                marginTop: -40,
                marginBottom: 20
              }}>
                <div>
                  <p>Teléfono</p>
                  <input
                    type="text"
                    name="telefono"
                    placeholder="Escribe tu teléfono"
                    value={formData.telefono}
                    onChange={handleChange}
                    style={{ width: '250px', padding: '5px', marginTop: '-10px',marginBottom: '10px' }}
                  />
                </div>
                <div>
                  <p>Email</p>
                  <input
                    type="email"
                    name="email"
                    placeholder="Escribe tu email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{ width: '250px', padding: '5px',marginTop: '-10px', marginBottom: '10px' }}
                  />
                </div>
              </div>
              <div style={{
                fontSize: 15,
                fontFamily: 'Arial',
                color: 'black',
                fontWeight: 'bold',
                padding: 15,
                marginBottom: 20,
                marginTop: -50,
               
              }}>
                <p>Mensaje</p>
                <textarea
                  name="mensaje"
                  placeholder="Escribe tu mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  style={{ width: '96%', height: '55px', padding: '10px' }}
                ></textarea>
              </div>
              <div style={{
                fontSize: 12,
                fontWeight: 'bold',
                padding: 10,
                display: 'flex',
                alignItems: 'center', // Alinea el checkbox y el texto verticalmente
                marginTop:-20,
             }}>
                <input
                  type="checkbox"
                  id="privacy-policy"
                  name="privacidad"
                  checked={formData.privacidad}
                  onChange={handleChange}
                  style={{ marginRight: '10px' }}
                />
                <label htmlFor="privacy-policy" className="texto-gris">He leído y acepto la política de privacidad y el aviso legal</label>
              </div>
              <div style={{
                fontSize: 15,
                fontFamily: 'Arial',
                fontWeight: 'bold',
                padding: 10,
                width: '150px', // Ajusta este valor para hacer más estrecha la caja azul, al poner el boto´n esto ya no sirve, lo que vale es lo del boton
                height: '50px', // Ajusta este valor para hacer más alta la caja azul
                display: 'flex', // Añade flexbox
                justifyContent: 'center', // Centra horizontalmente
                alignItems: 'center' // Centra verticalmente
              }}>
                <button type="submit" className="blue-box" style={{ justifyContent: 'center', width: '100px', height: '40px', border: 'none', font: 'inherit', cursor: 'pointer' }}>Enviar</button>
              </div>
            </form>
          </div>
          <div style={{
            fontFamily: 'Arial',
            fontSize: 16,
            color: 'black',
            fontWeight: 'bold',
            padding: 15,
            marginBottom: 0,
            marginTop: -35
          }}>
            <p> Otras formas de contacto</p>
            <div style={{
              fontSize: 14,
              padding: 1,
              marginBottom: 20,
            marginTop: -20
            }}>
              <p>656xxxxx09 | info@omibu.com</p>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              marginBottom: 0,
              marginTop: -25
            }}>
              <p style={{ marginBottom: '3px' }}>¿Quieres empezar un proyecto con nosotros?</p>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className='texto-rojo' style={{ marginTop: '2px', marginRight: '10px' }}>Agenda una cita</p>
                <FontAwesomeIcon icon={faCalendarAlt} style={{ cursor: 'pointer', marginLeft: '5px' }} onClick={() => setShowCalendar(!showCalendar)} />
              </div>
              {showCalendar && (
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  inline
                />
              )}
              {/* Puedes agregar más contenido aquí si es necesario */}
            </div>
            <div style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#333',
              cursor: 'pointer'
            }}>
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 30,
          marginTop: 45,
          marginLeft: 5,
          textAlign: 'left', // Alinea el texto a la izquierda
          fontSize: 35,
          fontWeight: 'bold',
          marginRight: 65,
          marginBottom: 0
        }}>
          <div style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 0,
            marginTop:10,
          }}>
            Dónde encontrarnos
          </div>
          <div className="grey-box" style={{
            padding: 15,
            textAlign: 'left',            fontSize: 15,
            fontWeight: 'bold',
            marginRight: 65,
            marginTop: 0,            marginBottom: 0,
            flex: 0.5
          }}>
            <div style={{
              fontSize: 20,
              color: '#333',
              fontWeight: 'bold',
            }}>
              <i className="fas fa-map-marker-alt" style={{ marginRight: 10 }}></i>
              <span>Madrid</span>
            </div>
            <p>c/ Principe de Vergara 210, 28040 Madrid</p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 10            }}>
              <i className="fas fa-phone icon-blue" style={{ marginRight: 10 }}></i>
              <p className="texto-azul"> 656xxxxx09</p>
            </div>
          </div>
          <div style={{
            padding: 100,
            textAlign: 'left',            fontSize: 15,
            fontWeight: 'bold',
            marginRight: 65,
            marginTop: 0,            marginBottom: 0,
            flex: -0.5
          }}>
            {/* Puedes agregar más contenido aquí si es necesario */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;