import { useState, useEffect } from 'react';
import { getProductos, getCategorias } from '../data/barberData';
import { Link } from 'react-router-dom';

export const Servicios = ({ onAddToCart }) => {
  const [items, setItems] = useState([]);
  const [categoriaSel, setCategoriaSel] = useState('todas');
  const categorias = getCategorias();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(getProductos());
  }, []);

  const filtrados = categoriaSel === 'todas' 
    ? items 
    : items.filter(item => item.categoriaId === Number(categoriaSel));

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container">
        {/* Encabezado */}
        <div className="text-center mb-5">
          <span className="badge badge-gold mb-2 text-uppercase">CATÁLOGO DE ATENCIÓN</span>
          <h2 className="display-4 text-warning fw-bold mb-2">NUESTROS SERVICIOS Y PAQUETES</h2>
          <p className="text-muted">Cortes de cabello, tratamientos de barba, perfilado de cejas y combos VIP</p>
        </div>

        {/* Filtro por Categorías */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
          <button 
            className={`btn ${categoriaSel === 'todas' ? 'btn-warning' : 'btn-outline-warning'} fw-bold px-4`}
            onClick={() => setCategoriaSel('todas')}
          >
            TODOS LOS SERVICIOS
          </button>
          {categorias.map(cat => (
            <button 
              key={cat.id}
              className={`btn ${categoriaSel === String(cat.id) ? 'btn-warning' : 'btn-outline-warning'} fw-bold px-3`}
              onClick={() => setCategoriaSel(String(cat.id))}
            >
              {cat.nombre}
            </button>
          ))}
        </div>

        {/* Tarjetas de Servicios y Paquetes */}
        <div className="row g-4">
          {filtrados.map(item => {
            const esServicio = item.categoriaId === 1 || item.categoriaId === 2 || item.categoriaId === 3 || item.categoriaId === 5;

            return (
              <div key={item.id} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100 shadow-lg border-secondary bg-black d-flex flex-column justify-content-between">
                  <div>
                    <div className="position-relative">
                      <img 
                        src={item.imagen} 
                        alt={item.nombre} 
                        className="card-img-top" 
                        style={{ height: '220px', objectFit: 'cover' }} 
                      />
                      {item.destacado && (
                        <span className="position-absolute top-0 end-0 bg-warning text-black badge m-2 fw-bold text-uppercase">
                          POPULAR VIP
                        </span>
                      )}
                    </div>
                    <div className="card-body">
                      <h5 className="card-title text-warning fw-bold fs-5 mb-2">{item.nombre}</h5>
                      <p className="card-text text-muted small mb-3">{item.descripcion}</p>
                    </div>
                  </div>

                  <div className="card-footer bg-transparent border-top border-dark p-3">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="text-muted small">Precio:</span>
                      <span className="text-warning fw-bold fs-4 font-monospace">${item.precio.toLocaleString()}</span>
                    </div>

                    {esServicio ? (
                      <Link to="/reservas" className="btn btn-warning w-100 fw-bold py-2">
                        AGENDA TU CITA 📅
                      </Link>
                    ) : (
                      <button onClick={() => onAddToCart(item)} className="btn btn-outline-warning w-100 fw-bold py-2">
                        AÑADIR AL CARRITO 🛒
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};