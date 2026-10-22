
import { Link } from 'react-router-dom';

export const Carrito = ({ carrito = [], onUpdateCantidad, onEliminar, onVaciar }) => {
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  if (carrito.length === 0) {
    return (
      <div className="bg-dark text-white min-vh-100 py-5 text-center">
        <div className="container py-5">
          <h2 className="text-warning fw-bold mb-3">Tu Carrito está vacío 🛒</h2>
          <p className="text-secondary mb-4">Aún no has agregado servicios o productos a tu reserva.</p>
          <Link to="/categorias" className="btn btn-warning fw-bold btn-lg">
            Ver Categorías y Servicios
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container">
        <h2 className="text-warning fw-bold mb-4">🛒 Tu Carrito de Compras</h2>
        
        <div className="table-responsive bg-black p-3 rounded border border-secondary shadow mb-4">
          <table className="table table-dark table-hover align-middle mb-0">
            <thead>
              <tr className="text-warning">
                <th>Producto / Servicio</th>
                <th>Precio Unitario</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th className="text-end">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item) => (
                <tr key={item.id}>
                  <td className="fw-bold">{item.nombre}</td>
                  <td>${item.precio.toLocaleString()}</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <button
                        onClick={() => onUpdateCantidad(item.id, item.cantidad - 1)}
                        className="btn btn-sm btn-outline-warning"
                      >
                        -
                      </button>
                      <span className="fw-bold px-2">{item.cantidad}</span>
                      <button
                        onClick={() => onUpdateCantidad(item.id, item.cantidad + 1)}
                        className="btn btn-sm btn-outline-warning"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="fw-bold text-warning">
                    ${(item.precio * item.cantidad).toLocaleString()}
                  </td>
                  <td className="text-end">
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

        {/* Resumen del Total y Navegación */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center bg-black p-4 rounded border border-warning">
          <button onClick={onVaciar} className="btn btn-outline-danger mb-3 mb-md-0">
            Vaciar Carrito
          </button>
          <div className="text-end">
            <h3 className="fw-bold text-light mb-3">
              Total: <span className="text-warning">${total.toLocaleString()}</span>
            </h3>
            <Link to="/checkout" className="btn btn-warning btn-lg fw-bold px-5">
              Ir a Pagar / Reservar 💳
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};