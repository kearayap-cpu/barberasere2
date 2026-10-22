import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Categorias } from './pages/Categorias';
import { Servicios } from './pages/Servicios';
import { Contacto } from './pages/Contacto';
import { Carrito } from './pages/Carrito';
import { Checkout } from './pages/Checkout';
import { PagoExitoso } from './pages/PagoExitoso';
import { PagoError } from './pages/PagoError';
import { Admin } from './pages/Admin';

function App() {
  const [carrito, setCarrito] = useState(() => {
    const saved = localStorage.getItem('asere_carrito');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('asere_carrito', JSON.stringify(carrito));
  }, [carrito]);

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

  const handleUpdateCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad <= 0) {
      handleEliminar(id);
      return;
    }
    setCarrito((prev) =>
      prev.map((item) => (item.id === id ? { ...item, cantidad: nuevaCantidad } : item))
    );
  };

  const handleEliminar = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const handleVaciar = () => {
    setCarrito([]);
  };

  const totalItemsCount = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100 bg-dark">
        <Navbar carritoCount={totalItemsCount} />
        
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/categorias" element={<Categorias onAddToCart={handleAddToCart} />} />
            <Route path="/servicios" element={<Servicios onAddToCart={handleAddToCart} />} />
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
            <Route
              path="/checkout"
              element={<Checkout carrito={carrito} onVaciarCarrito={handleVaciar} />}
            />
            <Route path="/pago-exitoso" element={<PagoExitoso />} />
            <Route path="/pago-error" element={<PagoError />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;