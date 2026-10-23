import { useState } from 'react';
import { getCategorias, getProductos } from '../data/barberData';

export const Categorias = ({ onAddToCart }) => {
  const categorias = getCategorias() || [];
  const productos = getProductos() || [];
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter(p => p.categoriaId === categoriaSeleccionada)
    : productos;

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container">
        {/* Encabezado Principal Estilo FreshCut */}
        <div className="text-center mb-5">
          <span className="badge badge-gold mb-2 text-uppercase">CATÁLOGO & PRODUCTOS</span>
          <h2 className="display-5 text-warning fw-bold mb-2">EXPLORA NUESTRAS CATEGORÍAS</h2>
          <p className="text-muted">Encuentra los mejores productos y servicios para tu cuidado personal</p>
        </div>

        {/* Botones de Filtro por Categoría */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          <button
            onClick={() => setCategoriaSeleccionada(null)}
            className={`btn ${categoriaSeleccionada === null ? 'btn-warning' : 'btn-outline-warning'}`}
          >
            TODAS
          </button>
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaSeleccionada(cat.id)}
              className={`btn ${categoriaSeleccionada === cat.id ? 'btn-warning' : 'btn-outline-warning'}`}
            >
              {cat.nombre}
            </button>
          ))}
        </div>

        {/* Listado de Productos / Servicios */}
        <div className="row g-4">
          {productosFiltrados.length === 0 ? (
            <div className="col-12 text-center py-5">
              <p className="text-muted fs-5">No hay servicios ni productos disponibles en esta categoría.</p>
            </div>
          ) : (
            productosFiltrados.map((item) => (
              <div key={item.id} className="col-12 col-md-6 col-lg-3">
                <div className="card h-100 d-flex flex-column">
                  <div className="overflow-hidden">
                    <img 
                      src={item.imagen} 
                      className="card-img-top" 
                      alt={item.nombre} 
                    />
                  </div>
                  <div className="card-body d-flex flex-column p-4">
                    <h5 className="card-title text-warning fw-bold mb-2">{item.nombre}</h5>
                    <p className="card-text text-muted small flex-grow-1">{item.descripcion}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top border-secondary">
                      <span className="fs-5 fw-bold text-white">
                        ${item.precio ? item.precio.toLocaleString() : 0}
                      </span>
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
            ))
          )}
        </div>
      </div>
    </div>
  );
};