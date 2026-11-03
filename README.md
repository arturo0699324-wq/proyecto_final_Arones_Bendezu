# Proyecto Final Playwright

Proyecto de automatización web desarrollado con Playwright utilizando el patrón Page Object Model (POM) y Fixtures para la organización y reutilización de código.

## Tecnologías utilizadas

- Playwright
- JavaScript
- Node.js

## Instalación

1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
```

2. Instalar dependencias

```bash
npm install
```

## Ejecutar pruebas

Ejecutar todas las pruebas:

```bash
npx playwright test
```

Ejecutar una prueba específica:

```bash
npx playwright test tests/Shop/cart.spec.js
```

## Estructura del proyecto

```text
pages/
├── LoginPage.js
├── HomePage.js
├── ProductPage.js
└── CartPage.js

tests/
├── Login.spec.js
├── cart.spec.js
└── fixtures.js

playwright.config.js
.env.example
```

## Casos automatizados

- Inicio de sesión de usuario.
- Navegación de productos.
- Agregar producto al carrito.
- Validación de producto agregado al carrito.

## Buenas prácticas aplicadas

- Page Object Model (POM).
- Uso de Fixtures.
- Separación de páginas y pruebas.
- Variables sensibles almacenadas en archivo .env.
- Control de versiones con Git y GitHub.

## Autor

Arones Bendezu Toño Arturo