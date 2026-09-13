const mockUsers = [
  { 
    id: 1, iniciales: 'AM', colorClass: 'avatar-purple', 
    apellido: 'Martínez', nombre: 'Ana', documento: '70123456', 
    fechaNacimiento: '15/04/1998', correo: 'ana.martinez@eduadmin.com', 
    celular: '987654321', carrera: 'Ingeniería de Sistemas', ciclo: 'Ciclo 5', 
    rol: 'ADMINISTRADOR', estado: 'Activo' 
  },
  { 
    id: 2, iniciales: 'CG', colorClass: 'avatar-orange', 
    apellido: 'Gómez', nombre: 'Carlos', documento: '45678912', 
    fechaNacimiento: '22/08/1990', correo: 'cgomez.prof@escuela.edu', 
    celular: '912345678', carrera: 'Ingeniería de Software', ciclo: 'Docencia', 
    rol: 'DOCENTE', estado: 'Activo' 
  },
  { 
    id: 3, iniciales: 'LR', colorClass: 'avatar-gray', 
    apellido: 'Rodríguez', nombre: 'Laura', documento: '74185296', 
    fechaNacimiento: '10/11/2004', correo: 'lrodriguez@alumnos.edu', 
    celular: '998877665', carrera: 'Ingeniería de Sistemas', ciclo: 'Ciclo 3', 
    rol: 'ESTUDIANTE', estado: 'Inactivo' 
  },
  { 
    id: 4, iniciales: 'JP', colorClass: 'avatar-gray', 
    apellido: 'Pérez', nombre: 'Javier', documento: '78945612', 
    fechaNacimiento: '05/01/2003', correo: 'javier.perez@alumnos.edu', 
    celular: '955443322', carrera: 'Ingeniería de Sistemas', ciclo: 'Ciclo 4', 
    rol: 'ESTUDIANTE', estado: 'Activo' 
  },
];

export default function UsuariosView() {
  return (
    <div className="usuarios-view">
      
      <header className="usuarios-header">
        <div className="header-titles">
          <h2>Gestión de Usuarios</h2>
          <span>Administra el acceso, roles y estados de todos los usuarios de la plataforma.</span>
        </div>
        <button className="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
          </svg>
          Nuevo Usuario
        </button>
      </header>

      <div className="usuarios-card">
        
        <div className="filtros-bar">
          <div className="filtros-izq">
            <div className="search-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input type="text" placeholder="Buscar por nombre o correo..." />
            </div>
            <select className="select-rol">
              <option>Todos los Roles</option>
              <option>Administrador</option>
              <option>Docente</option>
              <option>Estudiante</option>
            </select>
          </div>
          <div className="filtros-der">
            <button className="btn-outline">Más filtros</button>
            <button className="btn-outline">↓</button>
          </div>
        </div>

        <div className="tabla-container">
          <table className="usuarios-tabla">
            <thead>
              {/* Exactamente 11 columnas */}
              <tr>
                <th>Apellido</th>
                <th>Nombre</th>
                <th>Documento de identidad</th>
                <th>Fecha de nacimiento</th>
                <th>Correo</th>
                <th>Número celular</th>
                <th>Carrera</th>
                <th>Ciclo virtual</th>
                <th>Rol</th>
                <th>Estado</th>
                <th className="text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {mockUsers.map((user) => (
                <tr key={user.id}>
                  {/* Exactamente 11 celdas para coincidir con la cabecera */}
                  <td>{user.apellido}</td>
                  <td className="col-nombre">
                    <span className={`avatar ${user.colorClass}`}>{user.iniciales}</span>
                    <span className="nombre-texto">{user.nombre}</span>
                  </td>
                  <td>{user.documento}</td>
                  <td>{user.fechaNacimiento}</td>
                  <td className="col-correo">{user.correo}</td>
                  <td>{user.celular}</td>
                  <td>{user.carrera}</td>
                  <td>{user.ciclo}</td>
                  <td>
                    <span className={`badge-rol ${user.rol === 'ADMINISTRADOR' ? 'badge-admin' : 'badge-default'}`}>
                      {user.rol}
                    </span>
                  </td>
                  <td className="col-estado">
                   <div className="estado-container">
                     <span className={`dot-estado ${user.estado === 'Activo' ? 'dot-activo' : 'dot-inactivo'}`}></span>
                       <span>{user.estado}</span>
                   </div>
                    </td> 
                  <td className="text-right">
                    <button className="btn-outline" style={{ padding: '0.2rem 0.5rem' }}>⋮</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="paginacion">
          <span>Mostrando <b>1</b> a <b>4</b> de <b>4</b> usuarios</span>
          <div className="paginacion-controles">
            <button className="page-btn">&lt;</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">&gt;</button>
          </div>
        </div>

      </div>
    </div>
  );
}