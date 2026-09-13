export default function PrincipalView() {
  return (
    <div className="principal-dashboard">
      <div className="welcome-header">
        <h2>Vista General del Panel</h2>
        <p>Bienvenido de nuevo. Esto es lo que sucede en la academia hoy.</p>
      </div>

      <div className="metrics-grid">
        <div className="card metric-card">
          <span>Alumnos inscritos</span>
          <h3>4,285</h3>
          <small className="positive">+12% desde el mes pasado</small>
        </div>
        <div className="card metric-card">
          <span>Profesores activos</span>
          <h3>12</h3>
        </div>
        <div className="card metric-card">
          <span>Cursos activados</span>
          <h3>45</h3>
        </div>
        <div className="card metric-card">
        <span>Incidentes por atender</span>
        <h3>10</h3>
        </div>
      </div>
      <div>
        
      </div>

      <div className="details-grid">
        <div className="card tasks-card">
          <div className="card-header">
            <h3>Tareas Administrativas</h3>
            <button className="link-btn">Ver Todo</button>
          </div>
          <ul className="task-list">
            <li><input type="checkbox" defaultChecked /> <strong>SCRM-5</strong> Editar usuarios</li>
            <li><input type="checkbox" defaultChecked /> <strong>SCRM-4</strong> Listar usuarios</li>
            <li><input type="checkbox" defaultChecked /> <strong>SCRM-3</strong> Eliminar usuarios</li>
            <li><input type="checkbox" defaultChecked /> <strong>SCRM-2</strong> Registrar usuarios</li>
            <li><input type="checkbox" defaultChecked /> <strong>SCRM-10</strong> Editar roles</li>
            <li><input type="checkbox" defaultChecked /> <strong>SCRM-9</strong> Listar roles</li>
            <li><input type="checkbox" defaultChecked /> <strong>SCRM-8</strong> Asignar permisos y vistas por roles</li>
          </ul>
          <div className="card-footer">
            <small>Mostrando 7 de 21 tareas pendientes</small>
          </div>
        </div>

        <div className="card activity-card">
          <h3>Actividad Reciente</h3>
          <ul className="activity-list">
            <li>
              <small>10:45 AM, Hoy</small>
              <p>Nuevo registro de estudiante completado para el curso de Preparación Médica.</p>
            </li>
            <li>
              <small>09:15 AM, Hoy</small>
              <p>Horario actualizado para 'Física Avanzada' por el Instructor M. Smith.</p>
            </li>
            <li>
              <small>Ayer</small>
              <p>Alerta del sistema: El umbral de asistencia cayó por debajo del 85% en el Aula 302.</p>
            </li>
            <li>
              <small>Ayer</small>
              <p>Copia de seguridad de datos completada con éxito.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}