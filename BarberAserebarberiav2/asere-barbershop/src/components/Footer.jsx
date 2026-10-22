export const Footer = () => {
  return (
    <footer className="bg-black text-secondary py-4 mt-auto border-top border-warning">
      <div className="container text-center">
        <p className="mb-1 text-warning fw-bold">✂️ Asere Barber Shop - Estilo & Tradición</p>
        <small>© {new Date().getFullYear()} Duoc UC - Proyecto Desarrollo Fullstack II</small>
      </div>
    </footer>
  );
};