export const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Mensaje enviado con éxito! Te responderemos a la brevedad.');
  };

  return (
    <div className="bg-dark text-white min-vh-100 py-5">
      <div className="container">
        <h2 className="text-center text-warning fw-bold mb-4">📍 Contáctanos & Visítanos</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="bg-black p-4 rounded border border-warning h-100 shadow">
              <h4 className="text-warning fw-bold mb-3">💈 Información de Asere Barber Shop</h4>
              <p className="mb-2"><strong>Dirección:</strong> Av. Providencia 1234, Local 5, Santiago</p>
              <p className="mb-2"><strong>Teléfono:</strong> +56 9 1234 5678</p>
              <p className="mb-2"><strong>Correo:</strong> contacto@aserebarbershop.cl</p>
              <p className="mb-4"><strong>Horario de Atención:</strong> Lunes a Sábado de 10:00 a 20:00 hrs.</p>

              <h5 className="text-warning fw-bold mb-2">Ubicación y Estilo</h5>
              <p className="text-secondary small">
                Estamos ubicados en el corazón de Santiago. Ven a disfrutar de la verdadera experiencia de barbería urbana con atención personalizada.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="bg-black p-4 rounded border border-secondary h-100 shadow">
              <h4 className="text-warning fw-bold mb-3">✉️ Envíanos un Mensaje</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label text-secondary">Nombre Completo</label>
                  <input type="text" className="form-control bg-dark text-white border-secondary" required />
                </div>
                <div className="mb-3">
                  <label className="form-label text-secondary">Correo Electrónico</label>
                  <input type="email" className="form-control bg-dark text-white border-secondary" required />
                </div>
                <div className="mb-3">
                  <label className="form-label text-secondary">Mensaje o Consulta</label>
                  <textarea className="form-control bg-dark text-white border-secondary" rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-warning w-100 fw-bold">
                  Enviar Consulta
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};