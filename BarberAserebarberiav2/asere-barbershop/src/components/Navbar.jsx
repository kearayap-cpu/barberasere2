import { Link, NavLink } from 'react-router-dom';

export const Navbar = ({ carritoCount = 0 }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-warning sticky-top shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold text-warning fs-3" to="/">
          ✂️ Asere Barber Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3">
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/categorias">Categorías</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/servicios">Servicios & Productos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/contacto">Contacto</NavLink>
            </li>
            <li className="nav-item ms-lg-2">
              <NavLink className="btn btn-outline-warning btn-sm my-1" to="/admin">
                ⚙️ Panel Admin
              </NavLink>
            </li>
          </ul>
          <Link to="/carrito" className="btn btn-warning fw-bold position-relative">
            🛒 Carrito
            {carritoCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {carritoCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};