import { useState } from 'react';

export const Contacto = () => {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    asunto: 'Consulta General',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container">
        {/* Encabezado FreshCut */}
        <div className="text-center mb-5">
          <span className="badge badge-gold mb-2 text-uppercase">ESTAMOS PARA ATENDERTE</span>
          <h2 className="display-5 text-warning fw-bold mb-2">CONTACTO & SUCURSAL</h2>
          <p className="text-muted">Visítanos en nuestra casa matriz o envíanos un mensaje directo</p>
        </div>

        <div className="row g-4">
          {/* Información de la Sucursal Única y Barberos */}
          <div className="col-12 col-lg-5">
            <div className="card p-4 shadow-lg h-100 d-flex flex-column justify-content-between">
              <div>
                <h4 className="text-warning fw-bold mb-3 fs-4 border-bottom border-secondary pb-2">
                  📍 SUCURSAL CENTRAL
                </h4>
                <p className="fs-5 fw-bold text-white mb-1">Asere BarberShop Central</p>
                <p className="text-muted mb-4">Av. Providencia 1234, Providencia, Santiago</p>

                <div className="mb-4">
                  <h6 className="text-warning text-uppercase small fw-bold mb-2">Horarios de Atención</h6>
                  <p className="mb-1 text-white">🗓️ Lunes a Sábado: 10:00 - 20:00 hrs</p>
                  <p className="mb-0 text-muted">🗓️ Domingos y Festivos: Cerrado</p>
                </div>

                <div className="mb-4">
                  <h6 className="text-warning text-uppercase small fw-bold mb-2">Contacto Directo</h6>
                  <p className="mb-1 text-white">📞 WhatsApp: +56 9 1122 3344</p>
                  <p className="mb-0 text-white">✉️ Correo: contacto@aserebarbershop.cl</p>
                </div>

                <div>
                  <h6 className="text-warning text-uppercase small fw-bold mb-2">Barberos Oficiales</h6>
                  <p className="mb-1 text-white">💈 Kevin Arraya <small className="text-muted">(Master Barber)</small></p>
                  <p className="mb-0 text-white">💈 Rafael Miotta <small className="text-muted">(Especialista en Barba)</small></p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-top border-secondary">
                <span className="badge bg-warning text-black w-100 py-2 text-uppercase font-monospace fw-bold">
                  🎮 Incluye Zona VIP PS5 & Bebida de Cortesía
                </span>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="col-12 col-lg-7">
            <div className="card p-4 p-md-5 shadow-lg">
              <h4 className="text-warning fw-bold mb-4 fs-4 border-bottom border-secondary pb-2">
                ✉️ ENVÍANOS UN MENSAJE
              </h4>

              {enviado ? (
                <div className="text-center py-5">
                  <div className="display-1 text-success mb-3">✅</div>
                  <h3 className="text-warning fw-bold mb-2">¡MENSAJE ENVIADO!</h3>
                  <p className="text-muted mb-4">
                    Gracias por contactarte con Asere BarberShop. Te responderemos a la brevedad.
                  </p>
                  <button 
                    onClick={() => setEnviado(false)} 
                    className="btn btn-outline-warning fw-bold px-4"
                  >
                    ENVIAR OTRO MENSAJE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label text-muted small fw-bold text-uppercase">Nombre Completo *</label>
                      <input 
                        type="text" 
                        name="nombre" 
                        className="form-control bg-dark text-white border-secondary p-3" 
                        required 
                        value={form.nombre} 
                        onChange={handleChange} 
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-muted small fw-bold text-uppercase">Correo Electrónico *</label>
                      <input 
                        type="email" 
                        name="correo" 
                        className="form-control bg-dark text-white border-secondary p-3" 
                        required 
                        value={form.correo} 
                        onChange={handleChange} 
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label text-muted small fw-bold text-uppercase">Asunto</label>
                      <select 
                        name="asunto" 
                        className="form-select bg-dark text-white border-secondary p-3"
                        value={form.asunto}
                        onChange={handleChange}
                      >
                        <option value="Consulta General">Consulta General</option>
                        <option value="Dudas sobre Servicios">Dudas sobre Servicios</option>
                        <option value="Convenios / Empresas">Convenios / Empresas</option>
                        <option value="Sugerencias">Sugerencias</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label text-muted small fw-bold text-uppercase">Mensaje *</label>
                      <textarea 
                        name="mensaje" 
                        className="form-control bg-dark text-white border-secondary p-3" 
                        rows="5" 
                        required 
                        value={form.mensaje} 
                        onChange={handleChange}
                        placeholder="Escribe tu mensaje aquí..."
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-warning w-100 py-3 fw-bold text-uppercase mt-4">
                    ENVIAR MENSAJE
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};