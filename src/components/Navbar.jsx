import { Link, NavLink } from 'react-router-dom';

export const Navbar = ({ carritoCount = 0 }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top border-bottom border-dark py-3">
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <span className="fs-3 fw-bold text-warning font-monospace">ASERE</span>
          <span className="badge bg-warning text-black font-monospace px-2 py-1">BARBER</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-2">
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link text-uppercase small fw-semibold ${isActive ? 'text-warning active' : 'text-light'}`} to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link text-uppercase small fw-semibold ${isActive ? 'text-warning active' : 'text-light'}`} to="/servicios">
                Servicios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link text-uppercase small fw-semibold ${isActive ? 'text-warning active' : 'text-light'}`} to="/categorias">
                Categorías
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link text-uppercase small fw-bold px-2 ${isActive ? 'text-warning active' : 'text-warning'}`} to="/reservas">
                📅 Agendar Cita
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link text-uppercase small fw-semibold ${isActive ? 'text-warning active' : 'text-light'}`} to="/nosotros">
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link text-uppercase small fw-semibold ${isActive ? 'text-warning active' : 'text-light'}`} to="/contacto">
                Contacto
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link text-uppercase small fw-semibold ${isActive ? 'text-warning active' : 'text-muted'}`} to="/admin">
                ⚙️ Admin
              </NavLink>
            </li>
          </ul>

          {/* Carrito Icon Button */}
          <div className="d-flex align-items-center">
            <Link to="/carrito" className="btn btn-outline-warning position-relative px-3 py-2">
              🛒 Carrito
              {carritoCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {carritoCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};