import { getProductos } from '../data/barberData';
import { Link } from 'react-router-dom';

export const Home = ({ onAddToCart }) => {
  const productos = getProductos();
  const destacados = productos.filter((p) => p.destacado);

  return (
    <div className="bg-dark text-white min-vh-100">
      {/* Hero Section Estilo FreshCut */}
      <div 
        className="text-center py-5 border-bottom border-secondary position-relative d-flex align-items-center"
        style={{
          minHeight: '75vh',
          backgroundImage: 'linear-gradient(rgba(12, 12, 14, 0.85), rgba(12, 12, 14, 0.85)), url(https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container py-5">
          <span className="badge badge-gold mb-3 text-uppercase">
            URBAN BARBER & GAMING LOUNGE
          </span>
          <h1 className="display-2 fw-bold text-warning mb-3">
            ASERE BARBER SHOP
          </h1>
          <p className="lead text-light col-md-8 mx-auto mb-4 fs-4 fw-light">
            Cortes de vanguardia, rituales de barba tradicional y sala de espera con consolas PS5 y barra de bebidas de cortesía.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/servicios" className="btn btn-warning btn-lg shadow">
              Reservar Cita ✂️
            </Link>
            <Link to="/categorias" className="btn btn-outline-warning btn-lg">
              Ver Catálogo
            </Link>
          </div>
        </div>
      </div>

      {/* Pilares de Servicios FreshCut Style */}
      <div className="container py-5 border-bottom border-dark">
        <div className="row text-center g-4">
          <div className="col-md-4">
            <div className="p-3">
              <div className="fs-1 text-warning mb-2">✂️</div>
              <h4 className="text-white">Corte & Estilo</h4>
              <p className="text-muted small">Técnicas modernas y clásicas adaptadas a la forma de tu rostro.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3">
              <div className="fs-1 text-warning mb-2">🪒</div>
              <h4 className="text-white">Ritual de Barba</h4>
              <p className="text-muted small">Afeitado y perfilado con toalla caliente y aceites esenciales.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3">
              <div className="fs-1 text-warning mb-2">🎮</div>
              <h4 className="text-white">Zona Gaming PS5</h4>
              <p className="text-muted small">Disfruta de tus juegos favoritos mientras esperas tu turno.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Destacados */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="text-warning fw-bold fs-1 mb-2">Servicios & Productos Destacados</h2>
          <p className="text-muted">Experiencia de barbería urbana premium</p>
        </div>

        <div className="row g-4">
          {destacados.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100">
                <div className="overflow-hidden">
                  <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                </div>
                <div className="card-body d-flex flex-column p-4">
                  <h5 className="card-title text-warning fw-bold mb-2">{item.nombre}</h5>
                  <p className="card-text text-muted small flex-grow-1">{item.descripcion}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top border-secondary">
                    <span className="fs-5 fw-bold text-white">${item.precio.toLocaleString()}</span>
                    <button 
                      onClick={() => onAddToCart && onAddToCart(item)}
                      className="btn btn-warning btn-sm"
                    >
                      Añadir 🛒
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};