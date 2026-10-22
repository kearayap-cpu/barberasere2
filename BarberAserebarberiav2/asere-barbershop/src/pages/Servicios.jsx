
import { useState } from 'react';
import { getCategorias, getProductos } from '../data/barberData';

export const Servicios = ({ onAddToCart }) => {
  const categorias = getCategorias() || [];
  const productos = getProductos() || [];
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter(p => p.categoriaId === categoriaSeleccionada)
    : productos;

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container">

        {/* Banner de Experiencia VIP (PS5 + Bebidas) */}
        <div className="bg-black p-4 p-md-5 rounded border border-warning shadow mb-5 text-center">
          <span className="badge bg-warning text-dark fs-6 fw-bold mb-2">💈 LA EXPERIENCIA ASERE 💈</span>
          <h2 className="display-5 fw-bold text-warning mb-3">Más que un corte, una experiencia VIP</h2>
          <p className="lead text-light col-lg-9 mx-auto mb-4">
            En <strong>Asere Barber Shop</strong> cada atención incluye atención personalizada. Mientras esperas o disfrutas tu servicio, la casa te invita:
          </p>
          
          <div className="row g-3 justify-content-center mt-2">
            <div className="col-12 col-md-4">
              <div className="p-3 bg-dark rounded border border-secondary h-100">
                <div className="fs-1 mb-2">🍺 ☕ 🍵</div>
                <h5 className="text-warning fw-bold">Bar de Cortesía</h5>
                <p className="small text-secondary mb-0">Cerveza helada, café espresso recién molido o té gourmet totalmente gratis en tu servicio.</p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-3 bg-dark rounded border border-secondary h-100">
                <div className="fs-1 mb-2">🎮 ⚽ 🥊</div>
                <h5 className="text-warning fw-bold">Zona PlayStation 5</h5>
                <p className="small text-secondary mb-0">Disfruta de FIFA, GTA V o Mortal Kombat en pantallas 4K mientras esperas tu turno.</p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-3 bg-dark rounded border border-secondary h-100">
                <div className="fs-1 mb-2">✂️ 💈 🔥</div>
                <h5 className="text-warning fw-bold">Atención Profesional</h5>
                <p className="small text-secondary mb-0">Barberos expertos en tendencias urbanas, perfilado a navaja y tratamiento con toalla caliente.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filtros de Categorías */}
        <h3 className="text-center text-warning fw-bold mb-4">Nuestros Servicios & Productos</h3>
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          <button
            onClick={() => setCategoriaSeleccionada(null)}
            className={`btn ${categoriaSeleccionada === null ? 'btn-warning fw-bold' : 'btn-outline-warning'}`}
          >
            Todos
          </button>
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaSeleccionada(cat.id)}
              className={`btn ${categoriaSeleccionada === cat.id ? 'btn-warning fw-bold' : 'btn-outline-warning'}`}
            >
              {cat.nombre}
            </button>
          ))}
        </div>

        {/* Grid de Productos & Servicios */}
        <div className="row g-4">
          {productosFiltrados.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 bg-black text-white border-secondary shadow d-flex flex-column">
                <div className="position-relative">
                  <img
                    src={item.imagen}
                    className="card-img-top"
                    alt={item.nombre}
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  {item.categoriaId !== 3 && (
                    <span className="position-absolute top-0 end-0 bg-warning text-dark fw-bold px-2 py-1 m-2 rounded small shadow">
                      🎮 PS5 + 🍺 Gratis
                    </span>
                  )}
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-warning fw-bold mb-2">{item.nombre}</h5>
                  <p className="card-text text-secondary small flex-grow-1">{item.descripcion}</p>

                  <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top border-secondary">
                    <div>
                      <span className="text-secondary small d-block">Precio:</span>
                      <span className="fs-4 fw-bold text-light">${item.precio.toLocaleString()}</span>
                    </div>
                    <button
                      onClick={() => onAddToCart && onAddToCart(item)}
                      className="btn btn-warning fw-bold px-3"
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