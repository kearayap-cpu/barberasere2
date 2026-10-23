import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes globales
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Páginas
import { Home } from './pages/Home';
import { Servicios } from './pages/Servicios';
import { Categorias } from './pages/Categorias';
import { Nosotros } from './pages/Nosotros';
import { Contacto } from './pages/Contacto';
import { Carrito } from './pages/Carrito';
import { Checkout } from './pages/Checkout';
import { PagoExitoso } from './pages/PagoExitoso';
import { PagoError } from './pages/PagoError';
import { Reservas } from './pages/Reservas';
import { Admin } from './pages/Admin';
import { NotFound } from './pages/NotFound';

export default function App() {
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem('asere_carrito');
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem('asere_carrito', JSON.stringify(carrito));
  }, [carrito]);

  // Funciones de gestión del carrito de compras
  const handleAddToCart = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prev, { ...producto, cantidad: 1 }];
    });
  };

  const handleUpdateCantidad = (id, cantidad) => {
    if (cantidad <= 0) {
      handleEliminar(id);
      return;
    }
    setCarrito((prev) =>
      prev.map((item) => (item.id === id ? { ...item, cantidad } : item))
    );
  };

  const handleEliminar = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const handleVaciar = () => {
    setCarrito([]);
  };

  const totalCantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-dark text-white">
        <Navbar carritoCount={totalCantidad} />
        
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/servicios" element={<Servicios onAddToCart={handleAddToCart} />} />
            <Route path="/categorias" element={<Categorias onAddToCart={handleAddToCart} />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route 
              path="/carrito" 
              element={
                <Carrito 
                  carrito={carrito} 
                  onUpdateCantidad={handleUpdateCantidad} 
                  onEliminar={handleEliminar} 
                  onVaciar={handleVaciar} 
                />
              } 
            />
            <Route path="/checkout" element={<Checkout carrito={carrito} onVaciarCarrito={handleVaciar} />} />
            <Route path="/pago-exitoso" element={<PagoExitoso />} />
            <Route path="/pago-error" element={<PagoError />} />
            <Route path="/admin" element={<Admin />} />
            
            {/* Ruta comodín para capturar URLs no encontradas (404) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}