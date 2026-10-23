# 💈 AsereBarberShop - Plataforma Web & Sistema de Reservas

Aplicación web interactiva y responsiva desarrollada en **React + Vite + Bootstrap 5** para la barbería de estilo urbano industrial **AsereBarberShop**. El proyecto incluye catálogo unificado de servicios y productos, carrito de compras con persistencia, sistema de reservas de citas en línea y un panel de administración en tiempo real.

---

## 🚀 Tecnologías Utilizadas

* **Frontend:** React 18, React Router DOM v6, Vite.
* **Estilos & UI:** Bootstrap 5, Custom CSS Variables (Tema Industrial Matte Black `#0c0c0e` & Gold `#c5a059`), Google Fonts (Oswald & Montserrat).
* **Persistencia de Datos:** `localStorage` (Gestión de estado del carrito, CRUD completo de productos/servicios y persistencia de citas agendadas).

---

## 🛠️ Funcionalidades Principales

1. **Catálogo & Servicios Unificados:** Visualización y filtrado dinámico de cortes de cabello, rituales de barba, perfilado de cejas, combos VIP y productos de grooming.
2. **Carrito de Compras:** Gestión de cantidad, suma de totales en tiempo real, vaciado y persistencia automática en `localStorage`.
3. **Sistema de Reservas de Citas (`/reservas`):**
   * Selección de servicios y paquetes VIP presenciales.
   * Elección de barberos oficiales (Kevin Arraya / Rafael Miotta).
   * Selección de fecha, hora y datos de contacto.
   * Elección de modalidad de pago: **Pagar en el Local (Efectivo/Débito)** o **Pagar Online (Tarjeta/Webpay)**.
4. **Panel de Administración (`/admin`):**
   * Métricas generales del negocio.
   * CRUD completo de productos y servicios (Crear, Editar, Eliminar, Destacar).
   * Visualización, filtrado y cancelación de citas agendadas en tiempo real.
5. **Manejo de Excepciones (404):** Captura de rutas no registradas (`path="*"`) con mensaje de control dedicado para la comisión de 13 evaluadores.

---

## ⚙️ Instalación y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/Raphaael69/AsereBarberShopv.git](https://github.com/Raphaael69/AsereBarberShopv.git)
