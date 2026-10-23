import { useState, useEffect } from 'react';
import { 
  getProductos, 
  addProducto, 
  updateProducto, 
  deleteProducto, 
  getCategorias, 
  getReservas, 
  deleteReserva 
} from '../data/barberData';

export const Admin = () => {
  const [productos, setProductos] = useState([]);
  const [reservas, setReservas] = useState([]);
  const categorias = getCategorias() || [];
  
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

  // Carga inicial de datos
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProductos(getProductos() || []);
    setReservas(getReservas() || []);
  }, []);

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
    } else {
      const actualizados = addProducto({
        ...form,
        categoriaId: Number(form.categoriaId),
        precio: Number(form.precio),
        stock: Number(form.stock)
      });
      setProductos(actualizados);
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

  const handleDeleteProducto = (id) => {
    if (window.confirm('¿Seguro que deseas eliminar este servicio/producto?')) {
      const actualizados = deleteProducto(id);
      setProductos(actualizados);
    }
  };

  const handleDeleteReserva = (id) => {
    if (window.confirm('¿Seguro que deseas cancelar esta cita/reserva?')) {
      const actualizadas = deleteReserva(id);
      setReservas(actualizadas);
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
        {/* Encabezado */}
        <div className="text-center mb-5">
          <span className="badge badge-gold mb-2 text-uppercase">PANEL DE CONTROL</span>
          <h2 className="display-5 text-warning fw-bold mb-2">⚙️ ADMINISTRACIÓN GENERAL</h2>
          <p className="text-muted">Gestión de citas agendadas, medios de pago e inventario en tiempo real</p>
        </div>

        {/* Métricas del Dashboard */}
        <div className="row g-3 mb-5">
          <div className="col-12 col-md-4">
            <div className="card p-4 text-center">
              <span className="text-muted small text-uppercase fw-bold mb-1">Citas Agendadas</span>
              <p className="display-5 fw-bold text-warning mb-0">{reservas.length}</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card p-4 text-center">
              <span className="text-muted small text-uppercase fw-bold mb-1">Productos / Servicios</span>
              <p className="display-5 fw-bold text-warning mb-0">{productos.length}</p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card p-4 text-center">
              <span className="text-muted small text-uppercase fw-bold mb-1">Categorías</span>
              <p className="display-5 fw-bold text-warning mb-0">{categorias.length}</p>
            </div>
          </div>
        </div>

        {/* TABLA DE CITAS AGENDADAS */}
        <div className="card p-4 shadow-lg mb-5">
          <h4 className="text-warning fw-bold mb-4 fs-4 border-bottom border-secondary pb-2">
            📅 CITAS Y RESERVAS EN LÍNEA
          </h4>
          <div className="table-responsive">
            <table className="table table-dark table-hover align-middle mb-0">
              <thead>
                <tr className="text-warning border-bottom border-secondary text-uppercase small">
                  <th className="py-3">N° Cita</th>
                  <th className="py-3">Cliente / Teléfono</th>
                  <th className="py-3">Servicio & Barbero</th>
                  <th className="py-3">Método de Pago</th>
                  <th className="py-3">Fecha & Hora</th>
                  <th className="py-3 text-end">Acción</th>
                </tr>
              </thead>
              <tbody>
                {reservas.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-muted">No hay citas agendadas por el momento.</td>
                  </tr>
                ) : (
                  reservas.map(r => (
                    <tr key={r.id} className="border-bottom border-dark">
                      <td className="fw-bold text-warning font-monospace">#{r.id}</td>
                      <td>
                        <span className="fw-bold d-block text-white">{r.cliente}</span>
                        <small className="text-muted">{r.telefono} | {r.correo}</small>
                      </td>
                      <td>
                        <span className="d-block text-white fw-semibold">{r.servicio}</span>
                        <small className="text-muted">Barbero: {r.barbero}</small>
                      </td>
                      <td>
                        <span className="badge bg-secondary text-white d-block mb-1">{r.metodoPagoTexto || 'Efectivo / Débito en Local'}</span>
                        <small className="text-warning fw-bold">{r.estadoPago || 'Pendiente en Local 💵'}</small>
                      </td>
                      <td>
                        <span className="text-white fw-bold">{r.fecha}</span>
                        <small className="d-block text-warning">{r.hora} hrs</small>
                      </td>
                      <td className="text-end py-3">
                        <button onClick={() => handleDeleteReserva(r.id)} className="btn btn-sm btn-outline-danger">
                          Cancelar Cita 🗑️
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* GESTIÓN DE INVENTARIO */}
        <div className="row g-4">
          {/* Formulario */}
          <div className="col-12 col-lg-4">
            <div className="card p-4 shadow-lg">
              <h4 className="text-warning fw-bold mb-4 fs-4 border-bottom border-secondary pb-2">
                {editingId ? '✏️ EDITAR PRODUCTO' : '➕ NUEVO PRODUCTO/SERVICIO'}
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label text-muted small fw-bold text-uppercase">Nombre *</label>
                  <input type="text" name="nombre" className="form-control bg-dark text-white border-secondary p-3" required value={form.nombre} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label className="form-label text-muted small fw-bold text-uppercase">Categoría *</label>
                  <select name="categoriaId" className="form-select bg-dark text-white border-secondary p-3" value={form.categoriaId} onChange={handleChange}>
                    {categorias.map(c => (
                      <option key={c.id} value={c.id}>{c.nombre}</option>
                    ))}
                  </select>
                </div>
                <div className="row g-2 mb-3">
                  <div className="col-6">
                    <label className="form-label text-muted small fw-bold text-uppercase">Precio ($) *</label>
                    <input type="number" name="precio" className="form-control bg-dark text-white border-secondary p-3" required value={form.precio} onChange={handleChange} />
                  </div>
                  <div className="col-6">
                    <label className="form-label text-muted small fw-bold text-uppercase">Stock *</label>
                    <input type="number" name="stock" className="form-control bg-dark text-white border-secondary p-3" required value={form.stock} onChange={handleChange} />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label text-muted small fw-bold text-uppercase">Descripción</label>
                  <textarea name="descripcion" className="form-control bg-dark text-white border-secondary p-3" rows="2" value={form.descripcion} onChange={handleChange}></textarea>
                </div>
                <div className="form-check mb-4">
                  <input type="checkbox" name="destacado" id="destacado" className="form-check-input" checked={form.destacado} onChange={handleChange} />
                  <label htmlFor="destacado" className="form-check-label text-white small">Destacar en Inicio</label>
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-warning py-3 fw-bold">
                    {editingId ? 'GUARDAR CAMBIOS' : 'CREAR PRODUCTO'}
                  </button>
                  {editingId && (
                    <button type="button" onClick={resetForm} className="btn btn-outline-secondary py-2">
                      CANCELAR
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Tabla de Productos */}
          <div className="col-12 col-lg-8">
            <div className="card p-4 shadow-lg">
              <h4 className="text-warning fw-bold mb-4 fs-4 border-bottom border-secondary pb-2">LISTADO DE INVENTARIO</h4>
              <div className="table-responsive">
                <table className="table table-dark table-hover align-middle mb-0">
                  <thead>
                    <tr className="text-warning border-bottom border-secondary text-uppercase small">
                      <th className="py-3">Nombre</th>
                      <th className="py-3">Categoría</th>
                      <th className="py-3">Precio</th>
                      <th className="py-3">Stock</th>
                      <th className="py-3 text-end">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productos.map(p => (
                      <tr key={p.id} className="border-bottom border-dark">
                        <td className="fw-bold py-3 text-white">{p.nombre}</td>
                        <td className="py-3">
                          <span className="badge badge-gold">
                            {categorias.find(c => c.id === p.categoriaId)?.nombre || 'General'}
                          </span>
                        </td>
                        <td className="py-3 text-warning font-monospace fw-bold">${p.precio.toLocaleString()}</td>
                        <td className="py-3 text-muted">{p.stock} u.</td>
                        <td className="text-end py-3">
                          <button onClick={() => handleEdit(p)} className="btn btn-sm btn-outline-warning me-2 px-2" title="Editar">✏️</button>
                          <button onClick={() => handleDeleteProducto(p.id)} className="btn btn-sm btn-outline-danger px-2" title="Eliminar">🗑️</button>
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
    </div>
  );
};