import { useLocation, Link } from 'react-router-dom';

export const PagoError = () => {
  const location = useLocation();
  const orderData = location.state;

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container col-md-8">
        <div className="bg-black p-4 rounded border border-danger shadow text-center mb-4">
          <div className="display-1 text-danger mb-2">❌</div>
          <h2 className="text-danger fw-bold">No se pudo realizar el pago</h2>
          {orderData && <p className="fs-5 text-light">Intento de Orden: <span className="text-secondary fw-bold">#{orderData.orderNum}</span></p>}
          <p className="text-secondary">Hubo un problema al procesar la transacción bancaria. Tu tarjeta no ha sido cobrada.</p>
          <Link to="/checkout" className="btn btn-danger btn-lg fw-bold mt-2">
            VOLVER A REALIZAR EL PAGO
          </Link>
        </div>
      </div>
    </div>
  );
};