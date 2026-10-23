import { useState } from 'react';
import { sucursales, barberos, getProductos, addReserva } from '../data/barberData';
import { Link } from 'react-router-dom';

export const Reservas = () => {
  const listaSucursales = sucursales || [];
  const listaBarberos = barberos || [];
  const todosLosProductos = getProductos ? (getProductos() || []) : [];
  
  // Filtramos todos los servicios y combos (Categorías 1, 2, 3 y 5: Cabello, Barba, Combos VIP y Limpieza Facial)
  const serviciosDisponibles = todosLosProductos.filter(
    p => p && (p.categoriaId === 1 || p.categoriaId === 2 || p.categoriaId === 3 || p.categoriaId === 5)
  );

  const [reservaConfirmada, setReservaConfirmada] = useState(null);

  const [form, setForm] = useState({
    sucursal: listaSucursales[0]?.nombre || 'Asere BarberShop Central',
    servicio: serviciosDisponibles[0]?.nombre || 'Corte Urbano VIP + PS5',
    barbero: listaBarberos[0]?.nombre || 'Kevin Arraya',
    fecha: '',
    hora: '14:00',
    cliente: '',
    correo: '',
    telefono: '',
    metodoPago: 'efectivo'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fecha || !form.cliente || !form.correo || !form.telefono) {
      alert('Por favor completa todos los campos obligatorios (*)');
      return;
    }

    const estadoPago = form.metodoPago === 'tarjeta' ? 'Pagado Online 💳' : 'Pendiente en Local 💵';

    const guardada = addReserva({
      ...form,
      metodoPagoTexto: form.metodoPago === 'tarjeta' ? 'Tarjeta (Webpay/Débito)' : 'Efectivo / Débito en Local',
      estadoPago
    });

    if (guardada && guardada.length > 0) {
      setReservaConfirmada(guardada[0]);
    }
  };

  if (reservaConfirmada) {
    return (
      <div className="bg-dark text-white min-vh-100 py-5 d-flex align-items-center">
        <div className="container col-12 col-md-8 col-lg-6">
          <div className="card p-4 p-md-5 text-center shadow-lg border-success">
            <div className="display-1 text-success mb-3">📅</div>
            <span className="badge bg-success text-black mb-3 text-uppercase mx-auto px-3 py-2 fw-bold">
              CITA AGENDADA CON ÉXITO
            </span>
            <h2 className="text-warning fw-bold mb-3 fs-2">¡TE ESPERAMOS EN ASERE!</h2>
            
            <div className="card p-3 mb-4 text-start">
              <p className="mb-1"><strong>N° Reserva:</strong> #{reservaConfirmada.id}</p>
              <p className="mb-1"><strong>Cliente:</strong> {reservaConfirmada.cliente}</p>
              <p className="mb-1"><strong>Sucursal:</strong> {reservaConfirmada.sucursal}</p>
              <p className="mb-1"><strong>Servicio / Paquete:</strong> {reservaConfirmada.servicio}</p>
              <p className="mb-1"><strong>Barbero:</strong> {reservaConfirmada.barbero}</p>
              <p className="mb-1"><strong>Método de Pago:</strong> {reservaConfirmada.metodoPagoTexto}</p>
              <p className="mb-1"><strong>Estado del Pago:</strong> <span className="badge bg-warning text-dark">{reservaConfirmada.estadoPago}</span></p>
              <p className="mb-0 text-warning fw-bold mt-2"><strong>Fecha & Hora:</strong> {reservaConfirmada.fecha} a las {reservaConfirmada.hora} hrs.</p>
            </div>

            <p className="text-muted small mb-4">
              Recuerda llegar 5 minutos antes para disfrutar de tu bebida de cortesía y tu partida de PS5.
            </p>

            <Link to="/" className="btn btn-warning btn-lg">
              VOLVER AL INICIO
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container col-12 col-lg-8">
        <div className="text-center mb-5">
          <span className="badge badge-gold mb-2 text-uppercase">SISTEMA DE RESERVAS EN LÍNEA</span>
          <h2 className="display-5 text-warning fw-bold mb-2">AGENDA TU CITA VIP</h2>
          <p className="text-muted">Selecciona tu servicio o paquete, barbero de preferencia, horario y método de pago</p>
        </div>

        <div className="card p-4 p-md-5 shadow-lg">
          <form onSubmit={handleSubmit}>
            {/* Paso 1: Sucursal y Servicio/Paquete */}
            <div className="mb-4">
              <h4 className="text-warning fw-bold mb-3 fs-5 border-bottom border-secondary pb-2">
                1. SUCURSAL Y SERVICIO / PAQUETE
              </h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label text-muted small fw-bold text-uppercase">Sucursal</label>
                  <select name="sucursal" className="form-select bg-dark text-white border-secondary p-3" value={form.sucursal} onChange={handleChange}>
                    {listaSucursales.map(s => <option key={s.id} value={s.nombre}>{s.nombre} - {s.direccion}</option>)}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted small fw-bold text-uppercase">Servicio o Paquete VIP</label>
                  <select name="servicio" className="form-select bg-dark text-white border-secondary p-3" value={form.servicio} onChange={handleChange}>
                    {serviciosDisponibles.map(s => (
                      <option key={s.id} value={s.nombre}>
                        {s.nombre} (${s.precio?.toLocaleString()})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Paso 2: Elección de Barbero */}
            <div className="mb-4">
              <h4 className="text-warning fw-bold mb-3 fs-5 border-bottom border-secondary pb-2">
                2. ELIGE TU BARBERO
              </h4>
              <div className="row g-3">
                {listaBarberos.map(b => (
                  <div key={b.id} className="col-12 col-md-6">
                    <div 
                      className={`card p-3 text-center border ${form.barbero === b.nombre ? 'border-warning bg-black' : 'border-secondary'}`}
                      onClick={() => setForm({ ...form, barbero: b.nombre })}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="rounded-circle mx-auto mb-2 d-flex align-items-center justify-content-center bg-dark border border-warning" style={{ width: '60px', height: '60px', fontSize: '1.8rem' }}>
                        💈
                      </div>
                      <h6 className="text-warning fw-bold mb-1 fs-5">{b.nombre}</h6>
                      <small className="text-muted d-block">{b.especialidad}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Paso 3: Fecha, Hora y Contacto */}
            <div className="mb-4">
              <h4 className="text-warning fw-bold mb-3 fs-5 border-bottom border-secondary pb-2">
                3. FECHA, HORA Y DATOS DE CONTACTO
              </h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label text-muted small fw-bold text-uppercase">Fecha de Atención *</label>
                  <input type="date" name="fecha" className="form-control bg-dark text-white border-secondary p-3" required value={form.fecha} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted small fw-bold text-uppercase">Hora de Cita *</label>
                  <select name="hora" className="form-select bg-dark text-white border-secondary p-3" value={form.hora} onChange={handleChange}>
                    <option value="10:00">10:00 hrs</option>
                    <option value="11:30">11:30 hrs</option>
                    <option value="14:00">14:00 hrs</option>
                    <option value="16:00">16:00 hrs</option>
                    <option value="18:00">18:00 hrs</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label text-muted small fw-bold text-uppercase">Nombre Completo *</label>
                  <input type="text" name="cliente" className="form-control bg-dark text-white border-secondary p-3" required value={form.cliente} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label text-muted small fw-bold text-uppercase">Correo Electrónico *</label>
                  <input type="email" name="correo" className="form-control bg-dark text-white border-secondary p-3" required value={form.correo} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label text-muted small fw-bold text-uppercase">Teléfono WhatsApp *</label>
                  <input type="tel" name="telefono" className="form-control bg-dark text-white border-secondary p-3" required value={form.telefono} onChange={handleChange} />
                </div>
              </div>
            </div>

            {/* Paso 4: Método de Pago */}
            <div className="mb-4">
              <h4 className="text-warning fw-bold mb-3 fs-5 border-bottom border-secondary pb-2">
                4. MÉTODO DE PAGO
              </h4>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <div 
                    className={`card p-3 border ${form.metodoPago === 'efectivo' ? 'border-warning bg-black' : 'border-secondary'}`}
                    onClick={() => setForm({ ...form, metodoPago: 'efectivo' })}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="metodoPago" 
                        id="pagoEfectivo" 
                        value="efectivo" 
                        checked={form.metodoPago === 'efectivo'} 
                        onChange={handleChange} 
                      />
                      <label className="form-check-label text-white fw-bold ms-2" htmlFor="pagoEfectivo">
                        💵 Pagar en el Local (Efectivo / Redcompra)
                      </label>
                    </div>
                    <small className="text-muted d-block mt-2 ms-4">
                      Reserva tu hora ahora y cancela en la barbería tras finalizar tu servicio.
                    </small>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div 
                    className={`card p-3 border ${form.metodoPago === 'tarjeta' ? 'border-warning bg-black' : 'border-secondary'}`}
                    onClick={() => setForm({ ...form, metodoPago: 'tarjeta' })}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="metodoPago" 
                        id="pagoTarjeta" 
                        value="tarjeta" 
                        checked={form.metodoPago === 'tarjeta'} 
                        onChange={handleChange} 
                      />
                      <label className="form-check-label text-white fw-bold ms-2" htmlFor="pagoTarjeta">
                        💳 Pagar Online Ahora (Tarjeta / Webpay)
                      </label>
                    </div>
                    <small className="text-muted d-block mt-2 ms-4">
                      Asegura tu cita abonando el total del servicio mediante pago con tarjeta.
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-warning w-100 py-3 fw-bold">
              CONFIRMAR Y AGENDAR CITA ✂️
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};