import React, { useState } from 'react';
import { CursoDetalleView } from './CursoDetalleView';

interface Curso {
  id: string;
  nombre: string;
  codigo: string;
  modalidad: string;
  profesor: string;
  inscritos: number;
  capacidad: number;
  horario: string;
  estado: 'Publicado' | 'Borrador';
}

export const CursosView: React.FC = () => {
  const [cursoSeleccionado, setCursoSeleccionado] = useState<Curso | null>(null);

  const listaCursos: Curso[] = [
    {
      id: '1',
      nombre: 'Introducción al Cálculo Avanzado',
      codigo: 'MAT-301',
      modalidad: 'Semestre A',
      profesor: 'Dra. Elena Ramírez',
      inscritos: 45,
      capacidad: 50,
      horario: 'Mar/Jue',
      estado: 'Publicado'
    },
    {
      id: '2',
      nombre: 'Desarrollo Web Full Stack',
      codigo: 'CS-405',
      modalidad: 'Bootcamp',
      profesor: 'Ing. Carlos Mendoza',
      inscritos: 0,
      capacidad: 30,
      horario: 'Por definir',
      estado: 'Borrador'
    },
    {
      id: '3',
      nombre: 'Historia Contemporánea',
      codigo: 'HUM-102',
      modalidad: 'Semestre B',
      profesor: 'Lic. Sofía Bernal',
      inscritos: 120,
      capacidad: 150,
      horario: 'Lun/Mie/Vie',
      estado: 'Publicado'
    }
  ];

  if (cursoSeleccionado) {
    return (
      <CursoDetalleView
        cursoId={cursoSeleccionado.id}
        onVolver={() => setCursoSeleccionado(null)}
      />
    );
  }

  return (
    <div className="cursos-container">
      <div className="cursos-header">
        <div>
          <h2>Gestión de Cursos</h2>
          <p>Administra los cursos, modalidades y asignaciones docentes de la plataforma.</p>
        </div>
        <button className="btn-primary">+ Nuevo Curso</button>
      </div>

      <div className="filtros-card">
        <div className="search-box">
          <input type="text" placeholder="Buscar curso..." />
        </div>
        <div className="filtros-selects">
          <select defaultValue="">
            <option value="">Todos los Estados</option>
            <option value="publicado">Publicado</option>
            <option value="borrador">Borrador</option>
          </select>
          <select defaultValue="">
            <option value="">Todas las Categorías</option>
          </select>
        </div>
      </div>

      <div className="cursos-grid">
        {listaCursos.map((curso) => (
          <div
            key={curso.id}
            className="curso-card"
            onClick={() => setCursoSeleccionado(curso)}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-header">
              <h3>{curso.nombre}</h3>
              <button className="btn-options" onClick={(e) => e.stopPropagation()}>⋮</button>
            </div>
            
            <p className="curso-subtext">{curso.codigo} • {curso.modalidad}</p>
            <p className="curso-profesor">👤 {curso.profesor}</p>

            <div className="card-footer">
              <span className="card-stat">👥 {curso.inscritos}/{curso.capacidad}</span>
              {curso.estado === 'Borrador' ? (
                <span className="badge-borrador">📄 Borrador</span>
              ) : (
                <span className="card-stat">🕒 {curso.horario}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};