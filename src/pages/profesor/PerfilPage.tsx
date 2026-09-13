import React, { useState } from 'react';

export const PerfilView: React.FC = () => {
  const [tabActiva, setTabActiva] = useState<'datos' | 'seguridad' | 'notificaciones'>('datos');

  // Estado formulario datos personales
  const [perfil, setPerfil] = useState({
    nombre: 'Dra. Elena Ramírez',
    email: 'elena.ramirez@academy.edu',
    telefono: '+51 987 654 321',
    especialidad: 'Matemática Aplicada & Cálculo',
    departamento: 'Ingeniería y Ciencias Básicas',
  });

  return (
    <div className="perfil-container">
      {/* Header Perfil */}
      <div className="perfil-header-card">
        <div className="perfil-avatar-section">
          <div className="avatar-circle">ER</div>
          <div>
            <h2>{perfil.nombre}</h2>
            <p className="perfil-role">Docente Principal • Campus Virtual</p>
            <span className="badge-activo">● Cuenta Activa</span>
          </div>
        </div>
        <button className="btn-primary">Guardar Cambios</button>
      </div>

      {/* Navegación por pestañas */}
      <div className="perfil-tabs">
        <button
          className={`tab-btn ${tabActiva === 'datos' ? 'active' : ''}`}
          onClick={() => setTabActiva('datos')}
        >
          👤 Información Personal
        </button>
        <button
          className={`tab-btn ${tabActiva === 'seguridad' ? 'active' : ''}`}
          onClick={() => setTabActiva('seguridad')}
        >
          🔒 Seguridad & Contraseña
        </button>
        <button
          className={`tab-btn ${tabActiva === 'notificaciones' ? 'active' : ''}`}
          onClick={() => setTabActiva('notificaciones')}
        >
          🔔 Preferencias
        </button>
      </div>

      {/* Contenido según pestaña */}
      <div className="tab-content">
        {tabActiva === 'datos' && (
          <div className="perfil-section-card">
            <h3>Datos Académicos y de Contacto</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Nombre Completo</label>
                <input
                  type="text"
                  value={perfil.nombre}
                  onChange={(e) => setPerfil({ ...perfil, nombre: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Correo Institucional</label>
                <input
                  type="email"
                  value={perfil.email}
                  onChange={(e) => setPerfil({ ...perfil, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Teléfono de Contacto</label>
                <input
                  type="text"
                  value={perfil.telefono}
                  onChange={(e) => setPerfil({ ...perfil, telefono: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Especialidad / Áreas</label>
                <input
                  type="text"
                  value={perfil.especialidad}
                  onChange={(e) => setPerfil({ ...perfil, especialidad: e.target.value })}
                />
              </div>

              <div className="form-group full-width">
                <label>Departamento Académico</label>
                <input
                  type="text"
                  value={perfil.departamento}
                  onChange={(e) => setPerfil({ ...perfil, departamento: e.target.value })}
                />
              </div>
            </div>
          </div>
        )}

        {tabActiva === 'seguridad' && (
          <div className="perfil-section-card">
            <h3>Cambiar Contraseña</h3>
            <div className="form-grid-single">
              <div className="form-group">
                <label>Contraseña Actual</label>
                <input type="password" placeholder="••••••••" />
              </div>
              <div className="form-group">
                <label>Nueva Contraseña</label>
                <input type="password" placeholder="Mínimo 8 caracteres" />
              </div>
              <div className="form-group">
                <label>Confirmar Nueva Contraseña</label>
                <input type="password" placeholder="Repite la nueva contraseña" />
              </div>
            </div>
          </div>
        )}

        {tabActiva === 'notificaciones' && (
          <div className="perfil-section-card">
            <h3>Notificaciones del Sistema</h3>
            <div className="checkbox-list">
              <label className="checkbox-item">
                <input type="checkbox" defaultChecked />
                <div>
                  <strong>Avisos de entregas de estudiantes</strong>
                  <p>Recibir alertas cuando los alumnos suban tareas a la plataforma.</p>
                </div>
              </label>

              <label className="checkbox-item">
                <input type="checkbox" defaultChecked />
                <div>
                  <strong>Recordatorios de clases virtuales</strong>
                  <p>Alertas 15 minutos antes del inicio de la sesión en vivo.</p>
                </div>
              </label>

              <label className="checkbox-item">
                <input type="checkbox" />
                <div>
                  <strong>Resumen semanal al correo</strong>
                  <p>Informe automático con métricas de asistencia y rendimiento.</p>
                </div>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PerfilView;