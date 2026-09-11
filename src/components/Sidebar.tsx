import React from 'react';
import { Clock, Calendar, Users, BookOpen, Home, User } from 'lucide-react';
import '../views/Styles/SidebarStyle.css';

interface SidebarProps {
  vistaActual: string;
  setVistaActual: (vista: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ vistaActual, setVistaActual }) => {
  return (
    <aside className="sidebar-container">
      {/* Encabezado del Menú */}
      <div className="sidebar-brand">
        <h2>AM Academy Manager</h2>
        <p>Administrador del Sistema</p>
      </div>

      <hr className="sidebar-divider" />

      {/* Menú de Navegación Principal */}
      <nav className="sidebar-menu">
        <ul>
          <li>
            <button
              className={`menu-btn ${vistaActual === 'principal' ? 'active' : ''}`}
              onClick={() => setVistaActual('principal')}
            >
              Principal
            </button>
          </li>
          <li>
            <button
              className={`menu-btn ${vistaActual === 'usuarios' ? 'active' : ''}`}
              onClick={() => setVistaActual('usuarios')}
            >
              Usuarios
            </button>
          </li>
          <li>
            <button
              className={`menu-btn ${vistaActual === 'cursos' ? 'active' : ''}`}
              onClick={() => setVistaActual('cursos')}
            >
              Cursos y Materias
            </button>
          </li>
        </ul>

        <hr className="sidebar-divider" />

        <ul>
          <li>
            <button
              className={`menu-btn ${vistaActual === 'horarios' ? 'active' : ''}`}
              onClick={() => setVistaActual('horarios')}
            >
              Horarios y Salones
            </button>
          </li>
        </ul>

        <hr className="sidebar-divider" />

        <ul>
          <li>
            <button
              className={`menu-btn ${vistaActual === 'perfil' ? 'active' : ''}`}
              onClick={() => setVistaActual('perfil')}
            >
              Perfil
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};