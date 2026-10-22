// ============================================================
// 📸 FOTOS — AQUÍ CAMBIAS LAS IMÁGENES
// Pon tus fotos en la carpeta:  public/img/
// y escribe la ruta así:        '/img/nombre-de-tu-foto.jpg'
// (también sirven links https:// mientras tanto)
// ============================================================
export const FOTOS = {
  corte:        'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&q=80',
  barba:        'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&q=80',
  combo:        'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&q=80',
  pomada:       'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=500&q=80',
  aceite:       '/img/aceite-barba.jpg',
  cera:         '/img/cera.jpg',
  champu:       'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=500&q=80',
  // --- Limpiezas faciales (reemplaza con tus fotos) ---
  facialExpress:  '/img/facial-express.jpg',
  facialProfunda: '/img/facial-profunda.jpg',
  facialVip:      '/img/facial-vip.jpg',
};

// Categorías iniciales
const INITIAL_CATEGORIES = [
  { id: 1, nombre: 'Cortes & Estilo', descripcion: 'Atención personalizada con bebida de cortesía y zona de juegos' },
  { id: 2, nombre: 'Barba & Afeitado', descripcion: 'Ritual con toalla caliente, navaja tradicional y aceites' },
  { id: 3, nombre: 'Productos & Cuidado', descripcion: 'Pomadas, ceras, aceites y champús profesionales' },
  { id: 4, nombre: 'Combos VIP', descripcion: 'Servicio completo + PS5 + Cerveza/Café/Té ilimitado durante la espera' },
  { id: 5, nombre: 'Limpieza Facial', descripcion: 'Limpieza profunda, exfoliación y mascarilla para una piel fresca y renovada' }
];

// Productos y Servicios iniciales con beneficios VIP
const INITIAL_PRODUCTS = [
  {
    id: 1,
    nombre: 'Corte Asere Clásico + PS5 & Drink',
    categoriaId: 1,
    precio: 14000,
    stock: 25,
    destacado: true,
    imagen: FOTOS.corte,
    descripcion: 'Corte a tijera o máquina + Asesoría de imagen. Incluye Cerveza, Café o Té a elección + uso libre de PlayStation 5 en sala de espera.'
  },
  {
    id: 2,
    nombre: 'Ritual de Barba & Toalla Caliente',
    categoriaId: 2,
    precio: 10000,
    stock: 20,
    destacado: true,
    imagen: FOTOS.barba,
    descripcion: 'Perfilado con navaja, tratamiento de aceites orgánicos, toalla caliente y tu bebida favorita de cortesía.'
  },
  {
    id: 3,
    nombre: 'Combo Asere VIP (Corte + Barba + PS5)',
    categoriaId: 4,
    precio: 20000,
    stock: 15,
    destacado: true,
    imagen: FOTOS.combo,
    descripcion: 'Experiencia completa de corte y barba. Acceso libre a la consola PS5 y barra de bebidas (Cerveza artesanal, Café Espresso o Té Gourmet).'
  },
  {
    id: 4,
    nombre: 'Pomada Fijadora Mate Asere (100g)',
    categoriaId: 3,
    precio: 12900,
    stock: 30,
    destacado: true,
    imagen: FOTOS.pomada,
    descripcion: 'Fijación fuerte y acabado mate natural sin residuos. Ideal para peinados urbanos y textura de larga duración.'
  },
  {
    id: 5,
    nombre: 'Aceite Hidratante para Barba (50ml)',
    categoriaId: 3,
    precio: 9900,
    stock: 18,
    destacado: false,
    imagen: FOTOS.aceite,
    descripcion: 'Formulado con aceites de Argán y Jojoba. Suaviza la barba, elimina la picazón y aporta un aroma fresco y elegante.'
  },
  {
    id: 6,
    nombre: 'Cera Modeladora Brillo Natural (80g)',
    categoriaId: 3,
    precio: 11500,
    stock: 22,
    destacado: false,
    imagen: FOTOS.cera,
    descripcion: 'Moldeado flexible de fijación media con brillo sutil. Perfecta para tupés y cortes desordenados con estilo.'
  },
  {
    id: 7,
    nombre: 'Champú Fortalecedor Anticaída (250ml)',
    categoriaId: 3,
    precio: 14500,
    stock: 12,
    destacado: false,
    imagen: FOTOS.champu,
    descripcion: 'Limpia profundamente el cuero cabelludo, estimula el crecimiento del folículo y fortalece la hebra capilar.'
  },
  {
    id: 8,
    nombre: 'Limpieza Facial Express',
    categoriaId: 5,
    precio: 12000,
    stock: 20,
    destacado: true,
    imagen: FOTOS.facialExpress,
    descripcion: 'Limpieza e hidratación rápida (30 min): exfoliación suave, vapor y mascarilla refrescante. Incluye bebida de cortesía.'
  },
  {
    id: 9,
    nombre: 'Limpieza Facial Profunda',
    categoriaId: 5,
    precio: 18000,
    stock: 15,
    destacado: true,
    imagen: FOTOS.facialProfunda,
    descripcion: 'Limpieza profunda con vapor, extracción de impurezas, exfoliación, mascarilla purificante y crema hidratante.'
  },
  {
    id: 10,
    nombre: 'Facial VIP + Toalla Caliente',
    categoriaId: 5,
    precio: 25000,
    stock: 10,
    destacado: false,
    imagen: FOTOS.facialVip,
    descripcion: 'Experiencia premium: limpieza profunda, masaje facial, mascarilla de carbón activado, toalla caliente y PS5 + bebida libre.'
  }
];

export const getProductos = () => {
  try {
    const data = localStorage.getItem('asere_productos_v5');
    if (!data) {
      localStorage.setItem('asere_productos_v5', JSON.stringify(INITIAL_PRODUCTS));
      return INITIAL_PRODUCTS;
    }
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_PRODUCTS;
  } catch {
    return INITIAL_PRODUCTS;
  }
};

export const getCategorias = () => {
  try {
    const data = localStorage.getItem('asere_categorias_v5');
    if (!data) {
      localStorage.setItem('asere_categorias_v5', JSON.stringify(INITIAL_CATEGORIES));
      return INITIAL_CATEGORIES;
    }
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_CATEGORIES;
  } catch {
    return INITIAL_CATEGORIES;
  }
};

export const addProducto = (nuevoProducto) => {
  const productos = getProductos();
  const productoConId = { ...nuevoProducto, id: Date.now() };
  const actualizados = [...productos, productoConId];
  localStorage.setItem('asere_productos_v5', JSON.stringify(actualizados));
  return actualizados;
};

export const updateProducto = (id, productoActualizado) => {
  const productos = getProductos();
  const actualizados = productos.map(p => p.id === Number(id) ? { ...p, ...productoActualizado } : p);
  localStorage.setItem('asere_productos_v5', JSON.stringify(actualizados));
  return actualizados;
};

export const deleteProducto = (id) => {
  const productos = getProductos();
  const actualizados = productos.filter(p => p.id !== Number(id));
  localStorage.setItem('asere_productos_v5', JSON.stringify(actualizados));
  return actualizados;
};