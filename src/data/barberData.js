// Fotos locales (carpeta public/img/)
export const FOTOS = {
  corteJunior:    '/img/corte-junior-2.png',
  aceite:         '/img/aceite-barba.jpg',
  cera:           '/img/cera.jpg',
  facialExpress:  '/img/facial-express.jpg',
  facialProfunda: '/img/facial-profunda.jpg',
  facialVip:      '/img/facial-vip.jpg',
};

// Categorías
export const categorias = [
  { id: 1, nombre: 'Cortes & Cabello', descripcion: 'Cortes urbanos, fades y estilizado' },
  { id: 2, nombre: 'Barba & Cejas', descripcion: 'Rituales de barba, perfilado y cejas' },
  { id: 3, nombre: 'Combos & Paquetes VIP', descripcion: 'Experiencias completas con descuento' },
  { id: 4, nombre: 'Productos & Grooming', descripcion: 'Ceras, aceites y cuidado personal' },
  { id: 5, nombre: 'Limpieza Facial', descripcion: 'Limpieza profunda, exfoliación y mascarilla para una piel fresca y renovada' }
];

export const getCategorias = () => categorias;

// Lista completa de Servicios, Paquetes y Productos
const productosIniciales = [
  // CABELLO
  {
    id: 1,
    nombre: 'Corte Urbano VIP + PS5',
    categoriaId: 1,
    precio: 15000,
    stock: 50,
    destacado: true,
    imagen: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&q=80',
    descripcion: 'Corte de cabello completo, lavado, asesoría de imagen y acceso a zona VIP de videojuegos.'
  },
  {
    id: 2,
    nombre: 'Fade & Diseño Urbano',
    categoriaId: 1,
    precio: 17000,
    stock: 50,
    destacado: true,
    imagen: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&q=80',
    descripcion: 'Degradado de alta precisión (skin fade / taper fade) más líneas o diseño a navaja.'
  },
  {
    id: 3,
    nombre: 'Corte Junior (Niños hasta 12 años)',
    categoriaId: 1,
    precio: 12000,
    stock: 50,
    destacado: false,
    imagen: FOTOS.corteJunior,
    descripcion: 'Atención paciente y dedicada para los más jóvenes con estilo moderno.'
  },

  // BARBA Y CEJAS
  {
    id: 4,
    nombre: 'Ritual Barba & Navaja Tradicional',
    categoriaId: 2,
    precio: 12000,
    stock: 40,
    destacado: true,
    imagen: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&q=80',
    descripcion: 'Toalla caliente, perfilado tradicional con navaja, toalla fría e hidratación con aceites.'
  },
  {
    id: 5,
    nombre: 'Perfilado & Delineado de Barba Express',
    categoriaId: 2,
    precio: 8000,
    stock: 40,
    destacado: false,
    imagen: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&q=80',
    descripcion: 'Ajuste rápido de contornos y rebajado de volumen.'
  },
  {
    id: 6,
    nombre: 'Perfilado & Simetría de Cejas',
    categoriaId: 2,
    precio: 6000,
    stock: 50,
    destacado: true,
    imagen: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&q=80',
    descripcion: 'Delineado y definición de cejas con navaja de precisión de acuerdo a la forma del rostro.'
  },

  // COMBOS / PAQUETES
  {
    id: 7,
    nombre: 'Combo Asere (Corte + Ritual Barba)',
    categoriaId: 3,
    precio: 23000,
    stock: 30,
    destacado: true,
    imagen: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&q=80',
    descripcion: 'Atención integral de corte de cabello VIP más ritual completo de barba a navaja.'
  },
  {
    id: 8,
    nombre: 'Pack Máximo Asere (Corte + Barba + Cejas + Bebida)',
    categoriaId: 3,
    precio: 27000,
    stock: 30,
    destacado: true,
    imagen: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&q=80',
    descripcion: 'Experiencia 100% completa: Corte, Barba, Cejas, lavado, hidratación y bebida VIP.'
  },

  // PRODUCTO (TIENDA)
  {
    id: 9,
    nombre: 'Pomada Mate Asere Premium',
    categoriaId: 4,
    precio: 9900,
    stock: 25,
    destacado: false,
    imagen: 'https://images.unsplash.com/photo-1597354984706-fac992d9306f?w=500&q=80',
    descripcion: 'Cera fijadora de efecto mate para peinado diario en casa.'
  },

  // LIMPIEZAS FACIALES
  {
    id: 10,
    nombre: 'Limpieza Facial Express',
    categoriaId: 5,
    precio: 12000,
    stock: 20,
    destacado: true,
    imagen: FOTOS.facialExpress,
    descripcion: 'Limpieza e hidratación rápida (30 min): exfoliación suave, vapor y mascarilla refrescante. Incluye bebida de cortesía.'
  },
  {
    id: 11,
    nombre: 'Limpieza Facial Profunda',
    categoriaId: 5,
    precio: 18000,
    stock: 15,
    destacado: true,
    imagen: FOTOS.facialProfunda,
    descripcion: 'Limpieza profunda con vapor, extracción de impurezas, exfoliación, mascarilla purificante y crema hidratante.'
  },
  {
    id: 12,
    nombre: 'Facial VIP + Toalla Caliente',
    categoriaId: 5,
    precio: 25000,
    stock: 10,
    destacado: false,
    imagen: FOTOS.facialVip,
    descripcion: 'Experiencia premium: limpieza profunda, masaje facial, mascarilla de carbón activado, toalla caliente y PS5 + bebida libre.'
  },

  // PRODUCTOS CON FOTO PROPIA
  {
    id: 13,
    nombre: 'Aceite Hidratante para Barba (50ml)',
    categoriaId: 4,
    precio: 9900,
    stock: 18,
    destacado: false,
    imagen: FOTOS.aceite,
    descripcion: 'Formulado con aceites de Argán y Jojoba. Suaviza la barba, elimina la picazón y aporta un aroma fresco y elegante.'
  },
  {
    id: 14,
    nombre: 'Cera Modeladora Brillo Natural (80g)',
    categoriaId: 4,
    precio: 11500,
    stock: 22,
    destacado: false,
    imagen: FOTOS.cera,
    descripcion: 'Moldeado flexible de fijación media con brillo sutil. Perfecta para tupés y cortes desordenados con estilo.'
  }
];

export const getProductos = () => {
  const data = localStorage.getItem('asere_productos_v4');
  if (!data) {
    localStorage.setItem('asere_productos_v4', JSON.stringify(productosIniciales));
    return productosIniciales;
  }
  return JSON.parse(data);
};

export const addProducto = (nuevo) => {
  const prods = getProductos();
  const conId = { ...nuevo, id: Date.now() };
  const actualizados = [conId, ...prods];
  localStorage.setItem('asere_productos_v4', JSON.stringify(actualizados));
  return actualizados;
};

export const updateProducto = (id, actualizado) => {
  const prods = getProductos();
  const actualizados = prods.map(p => p.id === id ? { ...p, ...actualizado } : p);
  localStorage.setItem('asere_productos_v4', JSON.stringify(actualizados));
  return actualizados;
};

export const deleteProducto = (id) => {
  const prods = getProductos();
  const actualizados = prods.filter(p => p.id !== id);
  localStorage.setItem('asere_productos_v4', JSON.stringify(actualizados));
  return actualizados;
};

// Sucursal única
export const sucursales = [
  { id: 1, nombre: 'Asere BarberShop Central', direccion: 'Av. Providencia 1234' }
];

// Barberos oficiales
export const barberos = [
  { id: 1, nombre: 'Kevin Arraya', especialidad: 'Master Barber & Diseños Urbano' },
  { id: 2, nombre: 'Rafael Miotta', especialidad: 'Especialista en Barba & Estilo Tradicional' }
];

// Reservas
export const getReservas = () => {
  const data = localStorage.getItem('asere_reservas');
  return data ? JSON.parse(data) : [];
};

export const addReserva = (nuevaReserva) => {
  const reservas = getReservas();
  const reservaConId = {
    ...nuevaReserva,
    id: Date.now(),
    estado: 'Confirmada'
  };
  const actualizadas = [reservaConId, ...reservas];
  localStorage.setItem('asere_reservas', JSON.stringify(actualizadas));
  return actualizadas;
};

export const deleteReserva = (id) => {
  const reservas = getReservas();
  const actualizadas = reservas.filter(r => r.id !== id);
  localStorage.setItem('asere_reservas', JSON.stringify(actualizadas));
  return actualizadas;
};