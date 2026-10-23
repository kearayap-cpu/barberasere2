import { Link } from 'react-router-dom';
import { barberos, sucursales } from '../data/barberData';

export const Nosotros = () => {
  const sucursalCentral = sucursales[0] || { nombre: 'Asere BarberShop Central', direccion: 'Av. Providencia 1234' };

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container">
        
        {/* Banner Hero */}
        <div className="text-center mb-5">
          <span className="badge badge-gold mb-2 text-uppercase">NUESTRA HISTORIA & CONCEPTO</span>
          <h2 className="display-4 text-warning fw-bold mb-3">LA EXPERIENCIA ASERE BARBERSHOP</h2>
          <p className="text-muted col-12 col-md-8 mx-auto lead">
            Más que un corte de cabello, entregamos un ritual urbano industrial que combina la técnica clásica de barbería con un ambiente VIP de relajación y entretenimiento.
          </p>
        </div>

        {/* Pilares de la Barbería */}
        <div className="row g-4 mb-5">
          <div className="col-12 col-md-4">
            <div className="card p-4 text-center h-100 shadow-lg border-secondary">
              <div className="display-4 text-warning mb-3">✂️</div>
              <h5 className="text-white fw-bold text-uppercase mb-2">TÉCNICA & ESTILO</h5>
              <p className="text-muted small mb-0">
                Especialistas en degradados (fades), perfilado con navaja tradicional y tendencias de corte urbano adaptadas a tu imagen.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card p-4 text-center h-100 shadow-lg border-secondary">
              <div className="display-4 text-warning mb-3">🎮</div>
              <h5 className="text-white fw-bold text-uppercase mb-2">ZONA GAMER PS5</h5>
              <p className="text-muted small mb-0">
                Disfruta de partidas de PlayStation 5 y una bebida helada de cortesía mientras esperas tu atención VIP.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="card p-4 text-center h-100 shadow-lg border-secondary">
              <div className="display-4 text-warning mb-3">💈</div>
              <h5 className="text-white fw-bold text-uppercase mb-2">GROOMING PREMIUM</h5>
              <p className="text-muted small mb-0">
                Utilizamos y comercializamos productos de alta gama para el cuidado de tu barba y cabello en casa.
              </p>
            </div>
          </div>
        </div>

        {/* Sección de Barberos Oficiales */}
        <div className="card p-4 p-md-5 shadow-lg mb-5">
          <div className="text-center mb-4">
            <span className="badge badge-gold mb-2 text-uppercase">STAFF OFICIAL</span>
            <h3 className="text-warning fw-bold fs-2">NUESTROS MASTER BARBERS</h3>
            <p className="text-muted">Profesionales certificados dedicados a garantizar la excelencia en cada servicio</p>
          </div>

          <div className="row g-4 justify-content-center">
            {barberos.map(b => (
              <div key={b.id} className="col-12 col-md-5">
                <div className="card p-4 text-center border border-warning bg-black h-100 shadow-lg">
                  <div className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center bg-dark border border-warning" style={{ width: '80px', height: '80px', fontSize: '2.2rem' }}>
                    💈
                  </div>
                  <h4 className="text-warning fw-bold mb-1">{b.nombre}</h4>
                  <span className="badge bg-secondary text-white text-uppercase mx-auto px-3 py-1 mb-3">
                    {b.especialidad}
                  </span>
                  <p className="text-muted small mb-0">
                    Comprometido con la precisión, el detalle técnico y la mejor experiencia de atención para cada cliente.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ficha de Casa Matriz & CTA */}
        <div className="card p-4 p-md-5 shadow-lg text-center border-warning">
          <span className="badge bg-warning text-black text-uppercase font-monospace fw-bold mx-auto px-3 py-2 mb-3">
            CASA MATRIZ
          </span>
          <h3 className="text-white fw-bold mb-2">{sucursalCentral.nombre}</h3>
          <p className="text-muted mb-4">{sucursalCentral.direccion}, Providencia, Santiago | Atendiendo de Lunes a Sábado</p>
          
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <Link to="/reservas" className="btn btn-warning btn-lg px-4 fw-bold">
              AGENDA TU CITA AHORA 📅
            </Link>
            <Link to="/contacto" className="btn btn-outline-light btn-lg px-4">
              VER UBICACIÓN & CONTACTO
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};