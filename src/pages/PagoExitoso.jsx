import { useLocation, Link } from 'react-router-dom';

export const PagoExitoso = () => {
  const location = useLocation();
  const orderData = location.state;

  if (!orderData) {
    return (
      <div className="bg-dark text-white min-vh-100 py-5 text-center d-flex align-items-center">
        <div className="container py-5">
          <div className="card p-5 mx-auto shadow-lg" style={{ maxWidth: '550px' }}>
            <span className="fs-1 text-warning mb-3 d-block">⚠️</span>
            <span className="badge badge-gold mb-3 text-uppercase mx-auto">SIN ORDEN</span>
            <h3 className="text-warning fw-bold mb-3 fs-2">NO HAY INFORMACIÓN DE ORDEN DISPONIBLE</h3>
            <p className="text-muted mb-4 fs-6">Parece que accediste a esta página directamente sin realizar una compra.</p>
            <div>
              <Link to="/" className="btn btn-warning btn-lg">
                VOLVER AL INICIO
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { orderNum, cliente, carrito, total } = orderData;

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container col-md-8">
        {/* Banner de Éxito */}
        <div className="card p-4 p-md-5 text-center shadow-lg mb-4 border-success">
          <div className="display-1 text-success mb-2">✅</div>
          <span className="badge bg-success text-black mb-3 text-uppercase mx-auto px-3 py-2 fw-bold">COMPRA Y RESERVA CONFIRMADA</span>
          <h2 className="text-success fw-bold mb-2 fs-2">SE HA REALIZADO LA COMPRA / RESERVA</h2>
          <p className="fs-5 text-muted mb-0">
            Código de Orden: <span className="text-warning fw-bold">#{orderNum}</span>
          </p>
        </div>

        {/* Detalle del Cliente */}
        <div className="card p-4 p-md-5 shadow-lg mb-4">
          <h4 className="text-warning fw-bold mb-3 fs-4 border-bottom border-secondary pb-2">DETALLE DEL CLIENTE</h4>
          <p className="mb-2"><strong>Nombre:</strong> {cliente.nombre} {cliente.apellidos}</p>
          <p className="mb-2"><strong>Correo:</strong> {cliente.correo}</p>
          <p className="mb-2"><strong>Dirección:</strong> {cliente.calle} {cliente.depto ? `, Depto ${cliente.depto}` : ''}, {cliente.comuna}, {cliente.region}</p>
          {cliente.indicaciones && <p className="mb-0 text-muted"><strong>Indicaciones:</strong> {cliente.indicaciones}</p>}
        </div>

        {/* Resumen de Productos / Servicios */}
        <div className="card p-4 p-md-5 shadow-lg mb-4">
          <h4 className="text-warning fw-bold mb-3 fs-4 border-bottom border-secondary pb-2">RESUMEN DE PRODUCTOS / SERVICIOS</h4>
          <ul className="list-group list-group-flush mb-3">
            {carrito.map((item) => (
              <li key={item.id} className="list-group-item bg-transparent text-white d-flex justify-content-between px-0 border-secondary py-2">
                <span>{item.nombre} <small className="text-muted">(x{item.cantidad})</small></span>
                <span className="text-warning font-monospace fw-bold">${(item.precio * item.cantidad).toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <hr className="border-secondary my-3" />
          <div className="d-flex justify-content-between align-items-center fs-4 fw-bold text-white">
            <span>Total Pagado:</span>
            <span className="text-success">${total.toLocaleString()}</span>
          </div>
        </div>

        <div className="text-center pt-2">
          <Link to="/" className="btn btn-warning btn-lg px-5">
            VOLVER A LA TIENDA
          </Link>
        </div>
      </div>
    </div>
  );
};