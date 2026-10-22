
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
      <div className="bg-dark text-white min-vh-100 py-5 text-center">
        <div className="container py-5">
          <h3 className="text-warning">No hay productos para procesar el pago</h3>
          <button onClick={() => navigate('/categorias')} className="btn btn-warning mt-3 fw-bold">
            Ir a Servicios
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container">
        <h2 className="text-warning fw-bold mb-4">💳 Proceso de Pago / Reserva</h2>

        <div className="row g-4">
          {/* Resumen del Carrito */}
          <div className="col-12 col-lg-5 order-lg-2">
            <div className="bg-black p-4 rounded border border-warning shadow">
              <h4 className="text-warning fw-bold mb-3">Resumen del Pedido</h4>
              <ul className="list-group list-group-flush mb-3">
                {carrito.map((item) => (
                  <li key={item.id} className="list-group-item bg-transparent text-white d-flex justify-content-between align-items-center px-0 border-secondary">
                    <div>
                      <span className="fw-bold">{item.nombre}</span>
                      <small className="d-block text-secondary">Cantidad: {item.cantidad}</small>
                    </div>
                    <span className="text-warning font-monospace">${(item.precio * item.cantidad).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
              <hr className="border-secondary" />
              <div className="d-flex justify-content-between fs-4 fw-bold text-light">
                <span>Total a pagar:</span>
                <span className="text-warning">${total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="col-12 col-lg-7 order-lg-1">
            <form onSubmit={(e) => handleSubmit(e, false)} className="bg-black p-4 rounded border border-secondary shadow">
              <h4 className="text-warning fw-bold mb-3">Información del cliente</h4>
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label text-secondary">Nombre *</label>
                  <input type="text" name="nombre" className="form-control bg-dark text-white border-secondary" required value={form.nombre} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-secondary">Apellidos *</label>
                  <input type="text" name="apellidos" className="form-control bg-dark text-white border-secondary" required value={form.apellidos} onChange={handleChange} />
                </div>
                <div className="col-12">
                  <label className="form-label text-secondary">Correo Electrónico *</label>
                  <input type="email" name="correo" className="form-control bg-dark text-white border-secondary" required value={form.correo} onChange={handleChange} />
                </div>
              </div>

              <h4 className="text-warning fw-bold mb-3">Dirección de entrega o atención</h4>
              <div className="row g-3 mb-4">
                <div className="col-md-8">
                  <label className="form-label text-secondary">Calle y Número *</label>
                  <input type="text" name="calle" className="form-control bg-dark text-white border-secondary" required value={form.calle} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label text-secondary">Depto / Casa (Opcional)</label>
                  <input type="text" name="depto" className="form-control bg-dark text-white border-secondary" value={form.depto} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-secondary">Región</label>
                  <select name="region" className="form-select bg-dark text-white border-secondary" value={form.region} onChange={handleChange}>
                    <option value="Región Metropolitana de Santiago">Región Metropolitana de Santiago</option>
                    <option value="Valparaíso">Valparaíso</option>
                    <option value="Biobío">Biobío</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label text-secondary">Comuna</label>
                  <input type="text" name="comuna" className="form-control bg-dark text-white border-secondary" value={form.comuna} onChange={handleChange} />
                </div>
                <div className="col-12">
                  <label className="form-label text-secondary">Indicaciones especiales (opcional)</label>
                  <textarea name="indicaciones" className="form-control bg-dark text-white border-secondary" rows="2" value={form.indicaciones} onChange={handleChange}></textarea>
                </div>
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-success btn-lg fw-bold">
                  Pagar ahora ${total.toLocaleString()}
                </button>
                <button type="button" onClick={(e) => handleSubmit(e, true)} className="btn btn-outline-danger btn-sm">
                  Simular Fallo en el Pago ⚠️
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};