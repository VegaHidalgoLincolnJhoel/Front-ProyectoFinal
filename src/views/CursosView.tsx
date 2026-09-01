import './Styles/CursosStyle.css';

const mockCursos = [
  {
    id: 1,
    titulo: 'Introducción al Cálculo Avanzado',
    codigo: 'MAT-301',
    modalidad: 'Semestre A',
    docente: 'Dra. Elena Ramírez',
    inscritos: 45,
    capacidad: 50,
    horario: 'Mar/Jue',
    estado: 'ACTIVO',
    estadoColor: 'badge-green',
  },
  {
    id: 2,
    titulo: 'Desarrollo Web Full Stack',
    codigo: 'CS-405',
    modalidad: 'Bootcamp',
    docente: 'Ing. Carlos Mendoza',
    inscritos: 0,
    capacidad: 30,
    estadoAuxiliar: 'Borrador',
    estado: 'EN CONFIGURACIÓN',
    estadoColor: 'badge-orange',
  },
  {
    id: 3,
    titulo: 'Historia Contemporánea',
    codigo: 'HUM-102',
    modalidad: 'Semestre B',
    docente: 'Lic. Sofía Bernal',
    inscritos: 120,
    capacidad: 150,
    horario: 'Lun/Mie/Vie',
    estado: 'ACTIVO',
    estadoColor: 'badge-green',
  }
];

export default function CursosView() {
  return (
    <div className="cursos-view">
      
      <header className="cursos-header">
        <div className="header-titles">
          <h2>Gestión de Cursos</h2>
          <span>Administra los cursos, modalidades y asignaciones docentes de la plataforma.</span>
        </div>
        <button className="btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          Nuevo Curso
        </button>
      </header>

      <div className="filtros-card">
        <div className="filtros-bar">
          <div className="filtros-izq">
            <div className="search-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <input type="text" placeholder="Buscar curso..." />
            </div>
            <select className="select-box">
              <option>Todos los Estados</option>
              <option>Activo</option>
              <option>En Configuración</option>
            </select>
            <select className="select-box">
              <option>Todas las Categorías</option>
              <option>Semestre A</option>
              <option>Bootcamp</option>
            </select>
          </div>
          <div className="filtros-der">
            <label className="vista-label">Vista:</label>
            <button className="btn-outline active-view">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            </button>
            <button className="btn-outline">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="16" height="16"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
      </div>

      <div className="cursos-grid">
        {mockCursos.map((curso) => (
          <div className="curso-card" key={curso.id}>
        

            <div className="card-content">
              <div className="card-header-row">
                <h3 className="curso-titulo">{curso.titulo}</h3>
                <button className="btn-options">⋮</button>
              </div>
              
              <p className="curso-codigo">{curso.codigo} • {curso.modalidad}</p>
              
              <div className="curso-docente">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                {curso.docente}
              </div>

              <div className="card-footer">
                <div className="curso-stat">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  {curso.inscritos}/{curso.capacidad}
                </div>
                
                <div className={`curso-stat ${curso.estadoAuxiliar === 'Borrador' ? 'text-orange' : ''}`}>
                  {curso.estadoAuxiliar === 'Borrador' ? (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                      {curso.estadoAuxiliar}
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {curso.horario}
                    </>
                  )}
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>

    </div>
  );
}