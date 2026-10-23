import { useLocation, Link } from 'react-router-dom';

export const PagoError = () => {
  const location = useLocation();
  const orderData = location.state;

  return (
    <div className="bg-dark text-white min-vh-100 py-5 d-flex align-items-center">
      <div className="container col-12 col-md-8 col-lg-6">
        <div className="card p-4 p-md-5 text-center shadow-lg border-danger">
          <div className="display-1 text-danger mb-3">❌</div>
          <span className="badge bg-danger text-white mb-3 text-uppercase mx-auto px-3 py-2 fw-bold">
            TRANSACCIÓN RECHAZADA
          </span>
          <h2 className="text-danger fw-bold mb-3 fs-2">NO SE PUDO REALIZAR EL PAGO</h2>
          
          {orderData && (
            <p className="fs-5 text-light mb-3">
              Intento de Orden: <span className="text-warning fw-bold">#{orderData.orderNum}</span>
            </p>
          )}

          <p className="text-muted mb-4 fs-6">
            Hubo un problema al procesar la transacción bancaria. Tu tarjeta no ha sido cobrada y tu reserva sigue pendiente.
          </p>

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <Link to="/checkout" className="btn btn-danger btn-lg py-3">
              REINTENTAR PAGO
            </Link>
            <Link to="/contacto" className="btn btn-outline-warning btn-lg py-3">
              CONTACTAR SOPORTE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};