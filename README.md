# 🎓 Front-ProyectoFinal - Sistema de Gestión Académica Preuniversitaria

<div align="center">

[![Español](https://img.shields.io/badge/Idioma-Espa%C3%B1ol-2563eb?style=for-the-badge&logo=googletranslate&logoColor=white)](#-versión-en-español)
&nbsp;&nbsp;
[![English](https://img.shields.io/badge/Language-English-dc2626?style=for-the-badge&logo=googletranslate&logoColor=white)](#-english-version)

<br/>

![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.2.2-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.18.3-CA4245?style=flat-square&logo=react-router&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide_Icons-1.42.0-F97316?style=flat-square)

</div>

---

## 🔘 Selector de Idioma / Language Toggle

<p align="center">
  <b>Elige tu idioma / Choose your language:</b><br/>
  <a href="#-versión-en-español"><b>🇪🇸 Ver en Español</b></a> &nbsp;|&nbsp; <a href="#-english-version"><b>🇺🇸 View in English</b></a>
</p>

---

<details open id="versión-en-español">
<summary><h2>🇪🇸 Versión en Español (Haz clic para expandir/plegar)</h2></summary>

### 📌 Descripción del Proyecto
**Front-ProyectoFinal** es una plataforma web moderna para la administración académica y campus virtual desarrollada para una academia de preparación preuniversitaria. Permite gestionar usuarios, roles, cursos con integración a salas de videoconferencia (Zoom / Meet), incidencias de docentes y ofrece un panel personalizado para los estudiantes.

### ✨ Funcionalidades Principales

#### 🛡️ Módulo de Administración (`/admin`)
* **Gestión de Usuarios (`/admin/usuarios`)**:
  * Visualización en tabla con estados dinámicos (Activo, Inactivo, En Revisión).
  * Registro y edición de usuarios mediante modal interactivo.
  * Asignación y gestión de roles (Administrador, Docente, Estudiante).
  * Filtros de búsqueda por nombre, DNI, rol y estado.
  * Previsualización y exportación de fichas/documentos en formato PDF/imprimible.
* **Gestión de Cursos y Aulas (`/admin/cursos`)**:
  * Catálogo de asignaturas organizadas por áreas de estudio (Ciencias Médicas, Ingeniería, Humanidades).
  * Modal para el alta y edición de cursos con horarios y docentes asignados.
  * Configuración de salas virtuales (enlaces de Zoom y Google Meet) y repositorios de clase.
* **Control de Incidencias y Asistencias (`/admin/incidentes`)**:
  * Monitoreo de asistencias, tardanzas e incidencias de docentes en vivo.

#### 🎓 Módulo de Estudiante (`/estudiante`)
* **Dashboard del Alumno (`/estudiante/panel`)**:
  * Horario semanal y próximas clases.
  * Acceso rápido en un clic a las salas de videollamada de cada sesión.
  * Enlaces a los repositorios de material de estudio y grabaciones.
  * Métricas y estadísticas de progreso académico.

#### 🔐 Autenticación y Seguridad
* Rutas protegidas (`ProtectedRoute`) con validación de roles en `localStorage`.
* Redirección dinámica según el rol del usuario conectado.

---

### 🛠️ Tecnologías Utilizadas
* **Frontend**: [React 19](https://react.dev/)
* **Empaquetador y Dev Server**: [Vite 8](https://vite.dev/)
* **Enrutamiento**: [React Router 7](https://reactrouter.com/)
* **Estilos y Diseño**: [Tailwind CSS 4](https://tailwindcss.com/)
* **Iconografía**: [Lucide React](https://lucide.dev/)
* **Mock Data & API**: Mock local desacoplado vía [`src/data/db.json`](src/data/db.json) y [`src/services/api.js`](src/services/api.js)

---

### 📂 Estructura del Proyecto

```text
Front-ProyectoFinal/
├── src/
│   ├── assets/              # Imágenes y recursos estáticos
│   ├── components/          # Componentes reutilizables y layouts
│   │   ├── admin/           # Modales de registro, roles, filtros y tablas
│   │   ├── AdminLayout.jsx  # Layout del panel de administración
│   │   ├── StudentLayout.jsx# Layout del portal del estudiante
│   │   ├── ProtectedRoute.jsx# Control de acceso por roles
│   │   ├── Header.tsx       # Barra de navegación superior
│   │   └── Sidebar.tsx      # Menú lateral interactivo
│   ├── data/
│   │   └── db.json          # Datos simulados (usuarios, cursos, incidencias)
│   ├── hooks/               # Custom hooks (useUsers, useCurse, etc.)
│   ├── pages/               # Páginas y vistas principales
│   │   ├── admin/           # AdminUsersPage, CursoPage, ControIncidenciasPage
│   │   ├── student/         # StudentDashboardPage
│   │   └── Login.jsx        # Pantalla de inicio de sesión
│   ├── services/            # Capa de consumo de datos y llamadas API
│   ├── App.jsx              # Configuración de rutas de la aplicación
│   └── main.jsx             # Punto de entrada de React
├── package.json             # Dependencias y scripts
└── vite.config.js           # Configuración de Vite y Tailwind
```

---

### 🚀 Instalación y Puesta en Marcha

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/lincoln-vega/Front-ProyectoFinal.git
   cd Front-ProyectoFinal
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar el entorno de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

4. **Compilar para producción**:
   ```bash
   npm run build
   ```

[⬆ Volver arriba](#-front-proyectofinal---sistema-de-gestión-académica-preuniversitaria)

</details>

---

<details id="english-version">
<summary><h2>🇺🇸 English Version (Click to expand/collapse)</h2></summary>

### 📌 Project Overview
**Front-ProyectoFinal** is a modern web platform designed for academic administration and a virtual campus for pre-university academies. It enables comprehensive management of users, roles, courses integrated with virtual meeting rooms (Zoom / Google Meet), teacher incident tracking, and a dedicated student dashboard.

### ✨ Key Features

#### 🛡️ Administration Module (`/admin`)
* **User Management (`/admin/usuarios`)**:
  * Interactive data table with dynamic statuses (Active, Inactive, Pending Review).
  * User creation and modification modal dialog.
  * Role assignment (Administrator, Teacher, Student).
  * Advanced filters by name, ID (DNI), role, and status.
  * Printable/PDF document preview and export for student records.
* **Course and Classroom Management (`/admin/cursos`)**:
  * Catalog organized by study fields (Medical Sciences, Engineering, Humanities).
  * Add and edit modal with schedule assignment and teacher allocation.
  * Direct links to virtual classrooms (Zoom / Google Meet) and study drives.
* **Teacher Incidents & Attendance (`/admin/incidentes`)**:
  * Real-time monitoring of teacher attendance, delays, and classroom incidents.

#### 🎓 Student Module (`/estudiante`)
* **Student Dashboard (`/estudiante/panel`)**:
  * Weekly schedule and upcoming live lectures.
  * One-click access to live Zoom/Meet sessions.
  * Direct links to learning resources and class recordings.
  * Academic progress metrics.

#### 🔐 Authentication & Security
* Protected routes (`ProtectedRoute`) based on role validation stored in `localStorage`.
* Automatic role-based redirection upon authentication.

---

### 🛠️ Tech Stack
* **Frontend Library**: [React 19](https://react.dev/)
* **Bundler & Build Tool**: [Vite 8](https://vite.dev/)
* **Routing**: [React Router 7](https://reactrouter.com/)
* **CSS Framework**: [Tailwind CSS 4](https://tailwindcss.com/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Mock Data & Service Layer**: Decoupled mock database via [`src/data/db.json`](src/data/db.json) and [`src/services/api.js`](src/services/api.js)

---

### 📂 Directory Structure

```text
Front-ProyectoFinal/
├── src/
│   ├── assets/              # Images and static assets
│   ├── components/          # Reusable components and layout templates
│   │   ├── admin/           # Modals, user forms, roles dialogs, tables
│   │   ├── AdminLayout.jsx  # Admin layout with responsive navigation
│   │   ├── StudentLayout.jsx# Student dashboard layout
│   │   ├── ProtectedRoute.jsx# Role-based route guard
│   │   ├── Header.tsx       # Top navigation header
│   │   └── Sidebar.tsx      # Sidebar navigation
│   ├── data/
│   │   └── db.json          # Mock dataset (users, courses, incidents)
│   ├── hooks/               # Custom hooks (useUsers, useCurse, etc.)
│   ├── pages/               # Main application views
│   │   ├── admin/           # AdminUsersPage, CursoPage, ControIncidenciasPage
│   │   ├── student/         # StudentDashboardPage
│   │   └── Login.jsx        # Authentication screen
│   ├── services/            # API service calls
│   ├── App.jsx              # Application routing configuration
│   └── main.jsx             # React application entry point
├── package.json             # Manifest and dependencies
└── vite.config.js           # Vite and Tailwind build setup
```

---

### 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/lincoln-vega/Front-ProyectoFinal.git
   cd Front-ProyectoFinal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

[⬆ Back to top](#-front-proyectofinal---sistema-de-gestión-académica-preuniversitaria)

</details>
