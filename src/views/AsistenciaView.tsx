import { useState } from 'react';

interface Student {
  id: number;
  name: string;
  code: string;
  attended: boolean;
}

interface Course {
  id: string;
  title: string;
  code: string;
  professor: string;
}

const initialCourses: Course[] = [
  { id: '1', title: 'Introducción al Cálculo Avanzado', code: 'MAT-301', professor: 'Dra. Elena Ramírez' },
  { id: '2', title: 'Desarrollo Web Full Stack', code: 'CS-405', professor: 'Ing. Carlos Mendoza' },
  { id: '3', title: 'Historia Contemporánea', code: 'HUM-102', professor: 'Lic. Sofía Bernal' },
];

const mockStudents: Student[] = [
  { id: 1, name: 'Juan Pérez', code: 'A202601', attended: false },
  { id: 2, name: 'María García', code: 'A202602', attended: false },
  { id: 3, name: 'Carlos López', code: 'A202603', attended: false },
  { id: 4, name: 'Ana Martínez', code: 'A202604', attended: false },
  { id: 5, name: 'Luis Rodríguez', code: 'A202605', attended: false },
  { id: 6, name: 'Laura Gómez', code: 'A202606', attended: false },
  { id: 7, name: 'Pedro Sánchez', code: 'A202607', attended: false },
  { id: 8, name: 'Sofia Torres', code: 'A202608', attended: false },
  { id: 9, name: 'Diego Flores', code: 'A202609', attended: false },
  { id: 10, name: 'Elena Morales', code: 'A202610', attended: false },
];

export default function AsistenciaView() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [students, setStudents] = useState<Student[]>(mockStudents);

  const toggleAttendance = (id: number) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, attended: !student.attended } : student
      )
    );
  };

  return (
    <div className="principal-dashboard">
      <div className="welcome-header">
        <h2>Control de Asistencia</h2>
        <p>Selecciona un curso para tomar lista de los estudiantes.</p>
      </div>

      {!selectedCourse ? (
        <div className="metrics-grid">
          {initialCourses.map((course) => (
            <div
              key={course.id}
              className="card"
              style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
              onClick={() => setSelectedCourse(course)}
            >
              <h3>{course.title}</h3>
              <p><small>{course.code}</small></p>
              <span style={{ display: 'block', marginTop: '10px' }}>{course.professor}</span>
              <button className="btn-action" style={{ marginTop: '16px' }}>
                Tomar Asistencia
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="card">
          <div className="card-header">
            <div>
              <h3>{selectedCourse.title}</h3>
              <small>{selectedCourse.code} — {selectedCourse.professor}</small>
            </div>
            <button className="logout-btn" onClick={() => setSelectedCourse(null)}>
              ← Volver a Cursos
            </button>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px', tableLayout: 'fixed' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
                <th style={{ padding: '12px', width: '20%' }}>Código</th>
                <th style={{ padding: '12px', width: '35%' }}>Estudiante</th>
                <th style={{ padding: '12px', width: '25%', textAlign: 'center' }}>Asistencia</th>
                <th style={{ padding: '12px', width: '20%', textAlign: 'center' }}>Estado</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '12px' }}>{student.code}</td>
                  <td style={{ padding: '12px' }}><strong>{student.name}</strong></td>
                  
                  {/* Trigger / Switch Interactivo más grande */}
                  <td style={{ padding: '12px', textAlign: 'center' }}>
                    <button
                      onClick={() => toggleAttendance(student.id)}
                      style={{
                        width: '56px',
                        height: '28px',
                        borderRadius: '14px',
                        backgroundColor: student.attended ? '#10b981' : '#cbd5e1',
                        border: 'none',
                        cursor: 'pointer',
                        position: 'relative',
                        transition: 'background-color 0.2s ease',
                        padding: '2px',
                        display: 'inline-flex',
                        alignItems: 'center'
                      }}
                    >
                      <div
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          backgroundColor: '#ffffff',
                          transform: student.attended ? 'translateX(28px)' : 'translateX(0px)',
                          transition: 'transform 0.2s ease',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        }}
                      />
                    </button>
                  </td>

                  {/* Estado fijado para evitar saltos de layout */}
                  <td style={{ padding: '12px', textAlign: 'center' }}>
                    <span 
                      className={student.attended ? 'positive' : 'negative'}
                      style={{ display: 'inline-block', width: '90px' }}
                    >
                      {student.attended ? 'Sí, asistió' : 'No asistió'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}