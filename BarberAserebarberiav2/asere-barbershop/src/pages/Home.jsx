
import { getProductos } from '../data/barberData';
import { Link } from 'react-router-dom';

// 🎬 Ruta del video de fondo (pon tu video en la carpeta public/video/)
const VIDEO_HERO = '/video/hero.mp4';
// Imagen que se ve mientras carga el video (opcional, ponla en public/img/)
const POSTER_HERO = '/img/hero-poster.jpg';

export const Home = ({ onAddToCart }) => {
  const productos = getProductos();
  const destacados = productos.filter(p => p.destacado);

  return (
    <div className="bg-dark text-white min-vh-100">
      {/* Banner Principal / Hero con VIDEO de fondo */}
      <div
        className="text-center border-bottom border-warning position-relative overflow-hidden"
        style={{ minHeight: '520px', backgroundColor: '#000' }}
      >
        {/* 🎬 VIDEO: cambia el archivo en  public/video/hero.mp4  (o cambia VIDEO_HERO aquí abajo) */}
        <video
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: 'cover', zIndex: 0 }}
          src={VIDEO_HERO}
          poster={POSTER_HERO}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Capa oscura para que el texto se lea bien sobre el video */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ background: 'rgba(0,0,0,0.55)', zIndex: 1 }}
        />

        {/* Contenido encima del video */}
        <div
          className="container position-relative d-flex flex-column justify-content-center align-items-center"
          style={{ zIndex: 2, minHeight: '520px' }}
        >
          <h1 className="display-3 fw-bold text-warning mb-3">Asere Barber Shop</h1>
          <p className="lead text-light col-md-8 mx-auto mb-4">
            El verdadero estilo urbano y tradición de corte. Reserva tu hora o adquiere nuestros productos exclusivos de cuidado personal.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/servicios" className="btn btn-warning btn-lg fw-bold px-4">
              Ver Servicios
            </Link>
            <Link to="/categorias" className="btn btn-outline-light btn-lg px-4">
              Categorías
            </Link>
          </div>
        </div>
      </div>

      {/* Servicios / Productos Destacados */}
      <div className="container py-5">
        <h2 className="text-center text-warning fw-bold mb-4">Servicios & Productos Destacados</h2>
        <div className="row g-4">
          {destacados.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-3">
              <div className="card h-100 bg-black text-white border-secondary shadow-sm">
                <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-warning fw-bold">{item.nombre}</h5>
                  <p className="card-text text-secondary small flex-grow-1">{item.descripcion}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fs-5 fw-bold text-light">${item.precio.toLocaleString()}</span>
                    <button 
                      onClick={() => onAddToCart(item)}
                      className="btn btn-warning btn-sm fw-bold"
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