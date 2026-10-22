
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
        <h2 className="text-center text-warning fw-bold mb-4">Categorías de la Barbería</h2>

        {/* Botones de Filtro por Categoría */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          <button
            onClick={() => setCategoriaSeleccionada(null)}
            className={`btn ${categoriaSeleccionada === null ? 'btn-warning fw-bold' : 'btn-outline-warning'}`}
          >
            Todas
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

        {/* Listado de Productos / Servicios */}
        <div className="row g-4">
          {productosFiltrados.length === 0 ? (
            <p className="text-center text-secondary">No hay servicios disponibles en esta categoría.</p>
          ) : (
            productosFiltrados.map((item) => (
              <div key={item.id} className="col-12 col-md-6 col-lg-3">
                <div className="card h-100 bg-black text-white border-secondary shadow-sm">
                  <img src={item.imagen} className="card-img-top" alt={item.nombre} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-warning fw-bold">{item.nombre}</h5>
                    <p className="card-text text-secondary small flex-grow-1">{item.descripcion}</p>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="fs-5 fw-bold text-light">${item.precio ? item.precio.toLocaleString() : 0}</span>
                      <button
                        onClick={() => onAddToCart && onAddToCart(item)}
                        className="btn btn-warning btn-sm fw-bold"
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