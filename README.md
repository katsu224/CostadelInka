# 🏨 Costa del Inka - Landing Page

Bienvenido al repositorio oficial del proyecto **Costa del Inka**. Esta aplicación está construida con **Astro** para ofrecer un rendimiento excepcional y utiliza una integración personalizada con CMS para la gestión dinámica de contenidos.

## 🚀 Tecnologías Principales

Este proyecto utiliza un stack moderno optimizado para velocidad y SEO:

- **[Astro 5.0](https://astro.build/)**: Framework web para sitios orientados a contenido.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilidades para el diseño UI.
- **[Vercel](https://vercel.com/)**: Plataforma de despliegue y hospedaje (Serverless/Edge).
- **TypeScript**: Tipado estático para mayor robustez.

## ✨ Características Destacadas

### 🔌 Integración CMS Headless

El sitio consume contenido dinámicamente desde una API externa, permitiendo actualizaciones en tiempo real sin necesidad de redesplegar para cambios de contenido.

- **Endpoints Dinámicos**: Las páginas como `/rooms` y `/restaurant` obtienen su data de endpoints específicos.
- **Modo Preview (Vista Previa)**: Soporte nativo para visualizar borradores del CMS antes de publicar.
  - Detecta automáticamente el parámetro `?token=...` en la URL.
  - Muestra un banner informativo "Modo Vista Previa".
  - Desactiva la caché (`no-cache`, `no-store`) para mostrar siempre la última versión.

### ⚡ Rendimiento y SEO

- **Server-Side Rendering (SSR)**: Configurado con `@astrojs/vercel` para renderizado bajo demanda.
- **Optimización de Imágenes**: Uso de formatos modernos y lazy loading.

## 🛠️ Instalación y Desarrollo Local

Sigue estos pasos para levantar el proyecto en tu máquina local:

1.  **Clonar el repositorio**:

    ```bash
    git clone https://github.com/katsu224/CostadelInka.git
    cd CostadelInka
    ```

2.  **Instalar dependencias**:

    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno**:
    Crea un archivo `.env` en la raíz del proyecto basándote en el siguiente ejemplo:

    ```env
    API_URL=https://tu-api-cms.com
    PREVIEW_SECRET=tu_token_secreto_de_preview
    ```

4.  **Iniciar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    El sitio estará disponible en `http://localhost:4321`.

## 📦 Build y Despliegue

Este proyecto está configurado para desplegarse automáticamente en **Vercel**.

### Comandos de Build

```bash
npm run build
```

Este comando genera la salida optimizada en la carpeta `.vercel/output`, lista para ser servida por la plataforma.

### Configuración de Vercel

Asegúrate de configurar las siguientes variables de entorno en tu dashboard de Vercel:

- `API_URL`: URL base de tu CMS.
- `PREVIEW_SECRET`: Token para validar las sesiones de vista previa.

## 📂 Estructura del Proyecto

```text
/
├── public/_astro/      # Assets estáticos
├── src/
│   ├── components/     # Componentes UI reutilizables (Botones, Headers, etc.)
│   ├── layouts/        # Plantillas maestras (MainLayout)
│   ├── pages/          # Rutas y páginas (room.astro, restaurant.astro)
│   └── styles/         # Estilos globales
├── astro.config.mjs    # Configuración de Astro y adaptadores
└── package.json        # Dependencias y scripts
```

---

Desarrollado con ❤️ para **Costa del Inka**.
