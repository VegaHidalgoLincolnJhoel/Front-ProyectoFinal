import React, { useState, useEffect } from 'react';
import './Styles/CursoDetalleStyle.css';

interface CursoDetalleProps {
  cursoId?: string;
  onVolver: () => void;
}

interface Alumno {
  id: number;
  nombre: string;
  codigo: string;
  estado: 'Presente' | 'Tarde' | 'Ausente';
}

export const CursoDetalleView: React.FC<CursoDetalleProps> = ({ onVolver }) => {
  const [tabActiva, setTabActiva] = useState<'materiales' | 'asistencia'>('materiales');

  // Fecha objetivo de la siguiente clase en vivo
  const [tiempoRestante, setTiempoRestante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    // Definimos una fecha futura simulada para la siguiente clase en vivo
    const fechaProximaClase = new Date();
    fechaProximaClase.setDate(fechaProximaClase.getDate() + 2); // Ejemplo: dentro de 2 días
    fechaProximaClase.setHours(8, 0, 0, 0);

    const intervalo = setInterval(() => {
      const ahora = new Date().getTime();
      const diferencia = fechaProximaClase.getTime() - ahora;

      if (diferencia > 0) {
        setTiempoRestante({
          dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
          horas: Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutos: Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60)),
          segundos: Math.floor((diferencia % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(intervalo);
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  // Estado de alumnos para la asistencia
  const [alumnos, setAlumnos] = useState<Alumno[]>([
    { id: 1, nombre: 'Juan Pérez', codigo: 'U2021102', estado: 'Presente' },
    { id: 2, nombre: 'Maria Gómez', codigo: 'U2021105', estado: 'Tarde' },
    { id: 3, nombre: 'Carlos Ruiz', codigo: 'U2021109', estado: 'Ausente' },
    { id: 4, nombre: 'Ana Torres', codigo: 'U2021112', estado: 'Presente' },
  ]);

  const cursoInfo = {
    nombre: 'Introducción al Cálculo Avanzado',
    codigo: 'MAT-301',
    seccion: 'Sección A1',
    profesor: 'Dra. Elena Ramírez',
    horario: 'Mar / Jue - 08:00 AM a 10:00 AM',
    alumnosInscritos: 45,
    capacidadMaxima: 50,
  };

  const materiales = [
    { id: 5, titulo: 'Clase 5: Integrales Múltiples y Aplicaciones', fecha: '28 Feb 2026', tipo: 'PDF' },
    { id: 4, titulo: 'Clase 4: Derivadas Parciales y Regla de la Cadena', fecha: '21 Feb 2026', tipo: 'PDF' },
    { id: 3, titulo: 'Clase 3: Límites y Continuidad Multivariable', fecha: '14 Feb 2026', tipo: 'ZIP' },
    { id: 2, titulo: 'Clase 2: Funciones de Varias Variables', fecha: '07 Feb 2026', tipo: 'PDF' },
    { id: 1, titulo: 'Clase 1: Introducción y Sílabo del Curso', fecha: '01 Feb 2026', tipo: 'PDF' },
  ];

  const toggleEstadoAsistencia = (id: number) => {
    setAlumnos((prevAlumnos) =>
      prevAlumnos.map((alumno) => {
        if (alumno.id === id) {
          const siguienteEstado =
            alumno.estado === 'Presente'
              ? 'Tarde'
              : alumno.estado === 'Tarde'
              ? 'Ausente'
              : 'Presente';
          return { ...alumno, estado: siguienteEstado };
        }
        return alumno;
      })
    );
  };

  return (
    <div className="curso-detalle-container">
      <button className="btn-volver" onClick={onVolver}>
        ← Volver a Cursos
      </button>

      {/* Header Info */}
      <div className="curso-header-card">
        <div className="curso-title-group">
          <div className="title-badging">
            <h2>{cursoInfo.nombre}</h2>
            <span className="badge-seccion">{cursoInfo.seccion}</span>
          </div>
          <p className="curso-meta">{cursoInfo.codigo} • {cursoInfo.profesor}</p>
        </div>

        <div className="curso-stats-grid">
          <div className="stat-item">
            <span className="stat-label">Inscritos</span>
            <span className="stat-value">👥 {cursoInfo.alumnosInscritos} / {cursoInfo.capacidadMaxima}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Horario</span>
            <span className="stat-value">🕒 {cursoInfo.horario}</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="curso-tabs">
        <button
          className={`tab-btn ${tabActiva === 'materiales' ? 'active' : ''}`}
          onClick={() => setTabActiva('materiales')}
        >
          📂 Material del Curso
        </button>
        <button
          className={`tab-btn ${tabActiva === 'asistencia' ? 'active' : ''}`}
          onClick={() => setTabActiva('asistencia')}
        >
          📋 Toma de Asistencia
        </button>
      </div>

      {/* Contenido */}
      <div className="tab-content">
        {tabActiva === 'materiales' ? (
          <div className="materiales-list">
            <div className="materiales-header">
              <h3>Recursos y Clases (Descendente)</h3>
              
              {/* Contenedor alineado a la derecha con el contador + botón */}
              <div className="header-actions-right">
                <div className="countdown-btn">
                  🎥 La clase empieza en: {tiempoRestante.dias}d {tiempoRestante.horas}h {tiempoRestante.minutos}m {tiempoRestante.segundos}s
                </div>
                <button className="btn-primary">+ Subir Material</button>
              </div>
            </div>
            
            {materiales.map((item) => (
              <div key={item.id} className="material-card">
                <div className="material-info">
                  <span className="material-icon">{item.tipo === 'PDF' ? '📄' : '📦'}</span>
                  <div>
                    <h4>{item.titulo}</h4>
                    <span className="material-date">Publicado el {item.fecha}</span>
                  </div>
                </div>
                <button className="btn-outline">Descargar</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="asistencia-section">
            <div className="asistencia-header">
              <h3>Control de Asistencia - Sesión Actual</h3>
              <button className="btn-primary">Guardar Cambios</button>
            </div>
            
            <div className="asistencia-lista">
              {alumnos.map((alumno) => (
                <div key={alumno.id} className="asistencia-card">
                  <div className="alumno-info">
                    <span className="alumno-codigo">{alumno.codigo}</span>
                    <span className="alumno-nombre">{alumno.nombre}</span>
                  </div>

                  <button
                    className={`trigger-badge state-${alumno.estado.toLowerCase()}`}
                    onClick={() => toggleEstadoAsistencia(alumno.id)}
                  >
                    {alumno.estado === 'Presente' && '✓ Presente'}
                    {alumno.estado === 'Tarde' && '⏳ Tarde'}
                    {alumno.estado === 'Ausente' && '✕ Ausente'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};