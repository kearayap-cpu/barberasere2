import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Checkout = ({ carrito = [], onVaciarCarrito }) => {
  const navigate = useNavigate();
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const [form, setForm] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    calle: '',
    depto: '',
    region: 'Región Metropolitana de Santiago',
    comuna: 'Santiago',
    indicaciones: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e, simularError = false) => {
    e.preventDefault();
    // eslint-disable-next-line react-hooks/purity
    const orderNum = Date.now();
    const orderData = { orderNum, cliente: form, carrito, total };

    if (simularError) {
      navigate('/pago-error', { state: orderData });
    } else {
      if (onVaciarCarrito) onVaciarCarrito();
      navigate('/pago-exitoso', { state: orderData });
    }
  };

  if (!carrito || carrito.length === 0) {
    return (
      <div className="bg-dark text-white min-vh-100 py-5 text-center d-flex align-items-center">
        <div className="container py-5">
          <div className="card p-5 mx-auto shadow-lg" style={{ maxWidth: '550px' }}>
            <span className="fs-1 text-warning mb-3 d-block">💳</span>
            <span className="badge badge-gold mb-3 text-uppercase mx-auto">CARRITO VACÍO</span>
            <h3 className="text-warning fw-bold mb-3 fs-2">NO HAY PRODUCTOS PARA PROCESAR EL PAGO</h3>
            <p className="text-muted mb-4 fs-6">Agrega algunos servicios o productos antes de iniciar la reserva.</p>
            <div>
              <button onClick={() => navigate('/categorias')} className="btn btn-warning btn-lg fw-bold">
                IR A SERVICIOS Y CATEGORÍAS
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container">
        {/* Encabezado FreshCut Style */}
        <div className="text-center mb-5">
          <span className="badge badge-gold mb-2 text-uppercase">PROCESO DE PAGO</span>
          <h2 className="display-5 text-warning fw-bold mb-2">💳 CONFIRMA TU RESERVA / COMPRA</h2>
          <p className="text-muted">Ingresa tus datos de contacto y dirección para completar tu solicitud</p>
        </div>

        <div className="row g-4">
          {/* Resumen del Pedido */}
          <div className="col-12 col-lg-5 order-lg-2">
            <div className="card p-4 shadow-lg sticky-lg-top" style={{ top: '100px' }}>
              <h4 className="text-warning fw-bold mb-3 fs-4">RESUMEN DEL PEDIDO</h4>
              <ul className="list-group list-group-flush mb-3">
                {carrito.map((item) => (
                  <li key={item.id} className="list-group-item bg-transparent text-white d-flex justify-content-between align-items-center px-0 border-secondary">
                    <div>
                      <span className="fw-bold d-block">{item.nombre}</span>
                      <small className="text-muted">Cantidad: {item.cantidad}</small>
                    </div>
                    <span className="text-warning fw-bold font-monospace">${(item.precio * item.cantidad).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
              <hr className="border-secondary my-3" />
              <div className="d-flex justify-content-between align-items-center fs-4 fw-bold text-white">
                <span>Total a pagar:</span>
                <span className="text-warning">${total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Formulario de Cliente y Dirección */}
          <div className="col-12 col-lg-7 order-lg-1">
            <div className="card p-4 p-md-5 shadow-lg">
              <form onSubmit={(e) => handleSubmit(e, false)}>
                <h4 className="text-warning fw-bold mb-4 fs-4 border-bottom border-secondary pb-2">1. INFORMACIÓN DEL CLIENTE</h4>
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold text-uppercase">Nombre *</label>
                    <input type="text" name="nombre" className="form-control bg-dark text-white border-secondary p-3" required value={form.nombre} onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold text-uppercase">Apellidos *</label>
                    <input type="text" name="apellidos" className="form-control bg-dark text-white border-secondary p-3" required value={form.apellidos} onChange={handleChange} />
                  </div>
                  <div className="col-12">
                    <label className="form-label text-muted small fw-bold text-uppercase">Correo Electrónico *</label>
                    <input type="email" name="correo" className="form-control bg-dark text-white border-secondary p-3" required value={form.correo} onChange={handleChange} />
                  </div>
                </div>

                <h4 className="text-warning fw-bold mb-4 fs-4 border-bottom border-secondary pb-2">2. DIRECCIÓN DE ENTREGA O ATENCIÓN</h4>
                <div className="row g-3 mb-4">
                  <div className="col-md-8">
                    <label className="form-label text-muted small fw-bold text-uppercase">Calle y Número *</label>
                    <input type="text" name="calle" className="form-control bg-dark text-white border-secondary p-3" required value={form.calle} onChange={handleChange} />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label text-muted small fw-bold text-uppercase">Depto / Casa (Opcional)</label>
                    <input type="text" name="depto" className="form-control bg-dark text-white border-secondary p-3" value={form.depto} onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold text-uppercase">Región</label>
                    <select name="region" className="form-select bg-dark text-white border-secondary p-3" value={form.region} onChange={handleChange}>
                      <option value="Región Metropolitana de Santiago">Región Metropolitana de Santiago</option>
                      <option value="Valparaíso">Valparaíso</option>
                      <option value="Biobío">Biobío</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold text-uppercase">Comuna</label>
                    <input type="text" name="comuna" className="form-control bg-dark text-white border-secondary p-3" value={form.comuna} onChange={handleChange} />
                  </div>
                  <div className="col-12">
                    <label className="form-label text-muted small fw-bold text-uppercase">Indicaciones especiales (Opcional)</label>
                    <textarea name="indicaciones" className="form-control bg-dark text-white border-secondary p-3" rows="2" value={form.indicaciones} onChange={handleChange}></textarea>
                  </div>
                </div>

                <div className="d-grid gap-3 pt-2">
                  <button type="submit" className="btn btn-warning btn-lg py-3 fw-bold text-dark">
                    PAGAR AHORA ${total.toLocaleString()}
                  </button>
                  <button type="button" onClick={(e) => handleSubmit(e, true)} className="btn btn-outline-danger btn-sm py-2">
                    Simular Fallo en el Pago ⚠️
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};