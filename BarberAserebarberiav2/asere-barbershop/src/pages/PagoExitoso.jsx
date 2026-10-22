import { useLocation, Link } from 'react-router-dom';

export const PagoExitoso = () => {
  const location = useLocation();
  const orderData = location.state;

  if (!orderData) {
    return (
      <div className="bg-dark text-white min-vh-100 py-5 text-center">
        <div className="container py-5">
          <h3 className="text-warning">No hay información de orden disponible</h3>
          <Link to="/" className="btn btn-warning mt-3">Volver al Inicio</Link>
        </div>
      </div>
    );
  }

  const { orderNum, cliente, carrito, total } = orderData;

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container col-md-8">
        <div className="bg-black p-4 rounded border border-success shadow text-center mb-4">
          <div className="display-1 text-success mb-2">✅</div>
          <h2 className="text-success fw-bold">Se ha realizado la compra / reserva</h2>
          <p className="fs-5 text-light">Código de Orden: <span className="text-warning fw-bold">#{orderNum}</span></p>
        </div>

        <div className="bg-black p-4 rounded border border-secondary shadow mb-4">
          <h4 className="text-warning fw-bold mb-3">Detalle del Cliente</h4>
          <p className="mb-1"><strong>Nombre:</strong> {cliente.nombre} {cliente.apellidos}</p>
          <p className="mb-1"><strong>Correo:</strong> {cliente.correo}</p>
          <p className="mb-1"><strong>Dirección:</strong> {cliente.calle} {cliente.depto ? `, Depto ${cliente.depto}` : ''}, {cliente.comuna}, {cliente.region}</p>
          {cliente.indicaciones && <p className="mb-0 text-secondary"><strong>Indicaciones:</strong> {cliente.indicaciones}</p>}
        </div>

        <div className="bg-black p-4 rounded border border-secondary shadow mb-4">
          <h4 className="text-warning fw-bold mb-3">Resumen de Productos / Servicios</h4>
          <ul className="list-group list-group-flush">
            {carrito.map((item) => (
              <li key={item.id} className="list-group-item bg-transparent text-white d-flex justify-content-between px-0 border-secondary">
                <span>{item.nombre} (x{item.cantidad})</span>
                <span className="text-warning font-monospace">${(item.precio * item.cantidad).toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <hr className="border-secondary" />
          <div className="d-flex justify-content-between fs-4 fw-bold text-light">
            <span>Total Pagado:</span>
            <span className="text-success">${total.toLocaleString()}</span>
          </div>
        </div>

        <div className="text-center">
          <Link to="/" className="btn btn-warning btn-lg fw-bold px-5">
            Volver a la Tienda
          </Link>
        </div>
      </div>
    </div>
  );
};