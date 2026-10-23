import { Link } from 'react-router-dom';

export const Carrito = ({ carrito = [], onUpdateCantidad, onEliminar, onVaciar }) => {
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  if (carrito.length === 0) {
    return (
      <div className="bg-dark text-white min-vh-100 py-5 text-center d-flex align-items-center">
        <div className="container py-5">
          <div className="card p-5 mx-auto shadow-lg" style={{ maxWidth: '550px' }}>
            <span className="fs-1 text-warning mb-3 d-block">🛒</span>
            <span className="badge badge-gold mb-3 text-uppercase mx-auto">RESERVA VACÍA</span>
            <h2 className="text-warning fw-bold mb-3 fs-2">TU CARRITO ESTÁ VACÍO</h2>
            <p className="text-muted mb-4 fs-6">Aún no has agregado servicios o productos a tu reserva.</p>
            <div>
              <Link to="/categorias" className="btn btn-warning btn-lg">
                VER CATEGORÍAS Y SERVICIOS
              </Link>
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
          <span className="badge badge-gold mb-2 text-uppercase">REVISA TU PEDIDO</span>
          <h2 className="display-5 text-warning fw-bold mb-2">🛒 TU CARRITO DE COMPRAS</h2>
          <p className="text-muted">Gestiona tus servicios o productos antes de proceder al pago o reserva</p>
        </div>

        {/* Tabla de Productos / Servicios */}
        <div className="card p-3 shadow-lg mb-4">
          <div className="table-responsive">
            <table className="table table-dark table-hover align-middle mb-0">
              <thead>
                <tr className="text-warning border-bottom border-secondary text-uppercase small">
                  <th className="py-3">Producto / Servicio</th>
                  <th className="py-3">Precio Unitario</th>
                  <th className="py-3">Cantidad</th>
                  <th className="py-3">Subtotal</th>
                  <th className="py-3 text-end">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((item) => (
                  <tr key={item.id} className="border-bottom border-dark">
                    <td className="fw-bold py-3 text-white">{item.nombre}</td>
                    <td className="py-3 text-muted">${item.precio.toLocaleString()}</td>
                    <td className="py-3">
                      <div className="d-flex align-items-center gap-2">
                        <button
                          onClick={() => onUpdateCantidad(item.id, item.cantidad - 1)}
                          className="btn btn-sm btn-outline-warning px-2 py-0 fw-bold"
                        >
                          -
                        </button>
                        <span className="fw-bold px-2 text-white">{item.cantidad}</span>
                        <button
                          onClick={() => onUpdateCantidad(item.id, item.cantidad + 1)}
                          className="btn btn-sm btn-outline-warning px-2 py-0 fw-bold"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="fw-bold text-warning py-3">
                      ${(item.precio * item.cantidad).toLocaleString()}
                    </td>
                    <td className="text-end py-3">
                      <button
                        onClick={() => onEliminar(item.id)}
                        className="btn btn-sm btn-outline-danger"
                      >
                        🗑️ Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Resumen del Total y Navegación */}
        <div className="card p-4 shadow-lg d-flex flex-column flex-md-row justify-content-between align-items-center">
          <button onClick={onVaciar} className="btn btn-outline-danger mb-3 mb-md-0">
            VACIAR CARRITO
          </button>
          <div className="text-center text-md-end">
            <h3 className="fw-bold text-white mb-3 fs-3">
              Total: <span className="text-warning">${total.toLocaleString()}</span>
            </h3>
            <Link to="/checkout" className="btn btn-warning btn-lg">
              IR A PAGAR / RESERVAR 💳
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};