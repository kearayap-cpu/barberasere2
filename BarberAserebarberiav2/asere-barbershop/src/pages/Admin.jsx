
import { useState } from 'react';
import { getProductos, updateProducto, deleteProducto, getCategorias } from '../data/barberData';

export const Admin = () => {
  const [productos, setProductos] = useState(() => getProductos());
  const categorias = getCategorias();
  
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    nombre: '',
    categoriaId: 1,
    precio: 0,
    stock: 10,
    destacado: false,
    imagen: 'https://via.placeholder.com/400x300?text=Servicio',
    descripcion: ''
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      const actualizados = updateProducto(editingId, {
        ...form,
        categoriaId: Number(form.categoriaId),
        precio: Number(form.precio),
        stock: Number(form.stock)
      });
      setProductos(actualizados);
      setEditingId(null);
    }
    resetForm();
  };

  const handleEdit = (prod) => {
    setEditingId(prod.id);
    setForm({
      nombre: prod.nombre,
      categoriaId: prod.categoriaId,
      precio: prod.precio,
      stock: prod.stock,
      destacado: prod.destacado,
      imagen: prod.imagen,
      descripcion: prod.descripcion
    });
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Seguro que deseas eliminar este servicio/producto?')) {
      const actualizados = deleteProducto(id);
      setProductos(actualizados);
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setForm({
      nombre: '',
      categoriaId: 1,
      precio: 0,
      stock: 10,
      destacado: false,
      imagen: 'https://via.placeholder.com/400x300?text=Servicio',
      descripcion: ''
    });
  };

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container">
        <h2 className="text-warning fw-bold mb-4">⚙️ Panel Administrativo - Barber Shop</h2>

        {/* Métricas del Dashboard */}
        <div className="row g-3 mb-5">
          <div className="col-md-6">
            <div className="bg-black border border-warning rounded p-3 text-center">
              <h5 className="text-secondary">Servicios</h5>
              <p className="display-6 fw-bold text-warning mb-0">{productos.length}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-black border border-warning rounded p-3 text-center">
              <h5 className="text-secondary">Categorías</h5>
              <p className="display-6 fw-bold text-warning mb-0">{categorias.length}</p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* Formulario solo para EDITAR (aparece al pulsar el lápiz) */}
          {editingId && (
          <div className="col-12 col-lg-4">
            <div className="bg-black p-4 rounded border border-warning">
              <h4 className="text-warning fw-bold mb-3">
                ✏️ Editar Servicio
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label text-secondary">Nombre</label>
                  <input type="text" name="nombre" className="form-control bg-dark text-white border-secondary" required value={form.nombre} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label text-secondary">Categoría</label>
                  <select name="categoriaId" className="form-select bg-dark text-white border-secondary" value={form.categoriaId} onChange={handleChange}>
                    {categorias.map(c => (
                      <option key={c.id} value={c.id}>{c.nombre}</option>
                    ))}
                  </select>
                </div>
                <div className="row g-2 mb-3">
                  <div className="col-6">
                    <label className="form-label text-secondary">Precio ($)</label>
                    <input type="number" name="precio" className="form-control bg-dark text-white border-secondary" required value={form.precio} onChange={handleChange} />
                  </div>
                  <div className="col-6">
                    <label className="form-label text-secondary">Stock</label>
                    <input type="number" name="stock" className="form-control bg-dark text-white border-secondary" required value={form.stock} onChange={handleChange} />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label text-secondary">Descripción</label>
                  <textarea name="descripcion" className="form-control bg-dark text-white border-secondary" rows="2" value={form.descripcion} onChange={handleChange}></textarea>
                </div>
                <div className="form-check mb-3">
                  <input type="checkbox" name="destacado" id="destacado" className="form-check-input" checked={form.destacado} onChange={handleChange} />
                  <label htmlFor="destacado" className="form-check-label text-light">Destacar en Home</label>
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-warning fw-bold">
                    Guardar Cambios
                  </button>
                  <button type="button" onClick={resetForm} className="btn btn-outline-secondary">
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
          )}

          {/* Tabla de Servicios (READ / DELETE) */}
          <div className={editingId ? 'col-12 col-lg-8' : 'col-12'}>
            <div className="bg-black p-4 rounded border border-secondary table-responsive">
              <h4 className="text-warning fw-bold mb-3">Servicios</h4>
              <table className="table table-dark table-hover align-middle">
                <thead>
                  <tr className="text-warning">
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th className="text-end">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map(p => (
                    <tr key={p.id}>
                      <td className="fw-bold">{p.nombre}</td>
                      <td>
                        <span className="badge bg-secondary">
                          {categorias.find(c => c.id === p.categoriaId)?.nombre || 'General'}
                        </span>
                      </td>
                      <td>${p.precio.toLocaleString()}</td>
                      <td>{p.stock} u.</td>
                      <td className="text-end">
                        <button onClick={() => handleEdit(p)} className="btn btn-sm btn-outline-warning me-2">✏️</button>
                        <button onClick={() => handleDelete(p.id)} className="btn btn-sm btn-outline-danger">🗑️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};