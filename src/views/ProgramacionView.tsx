interface ScheduleSlot {
  time: string;
  days: {
    [key: string]: { course: string; code: string; room: string } | null;
  };
}

const scheduleData: ScheduleSlot[] = [
  {
    time: '08:00 - 10:00',
    days: {
      Lunes: { course: 'Introducción al Cálculo Avanzado', code: 'MAT-301', room: 'Aula 101' },
      Martes: null,
      Miércoles: { course: 'Introducción al Cálculo Avanzado', code: 'MAT-301', room: 'Aula 101' },
      Jueves: null,
      Viernes: null,
    },
  },
  {
    time: '10:00 - 12:00',
    days: {
      Lunes: null,
      Martes: { course: 'Desarrollo Web Full Stack', code: 'CS-405', room: 'Lab 3' },
      Miércoles: null,
      Jueves: { course: 'Desarrollo Web Full Stack', code: 'CS-405', room: 'Lab 3' },
      Viernes: null,
    },
  },
  {
    time: '14:00 - 16:00',
    days: {
      Lunes: null,
      Martes: null,
      Miércoles: { course: 'Historia Contemporánea', code: 'HUM-102', room: 'Aula 204' },
      Jueves: null,
      Viernes: { course: 'Historia Contemporánea', code: 'HUM-102', room: 'Aula 204' },
    },
  },
];

export default function ProgramacionView() {
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  return (
    <div className="principal-dashboard">
      <div className="welcome-header">
        <h2>Programación Académica</h2>
        <p>Distribución de horario semanal (4 horas semanales divididas en 2 bloques de 2 horas).</p>
      </div>

      <div className="card" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
          <thead>
            <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
              <th style={{ padding: '14px', borderRight: '1px solid #e2e8f0' }}>Horario</th>
              {days.map((day) => (
                <th key={day} style={{ padding: '14px', borderRight: '1px solid #e2e8f0' }}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((slot, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '14px', fontWeight: 'bold', background: '#f8fafc', borderRight: '1px solid #e2e8f0' }}>
                  {slot.time}
                </td>
                {days.map((day) => {
                  const classItem = slot.days[day];
                  return (
                    <td key={day} style={{ padding: '12px', borderRight: '1px solid #e2e8f0', width: '18%' }}>
                      {classItem ? (
                        <div
                          style={{
                            background: '#eff6ff',
                            borderLeft: '4px solid #2563eb',
                            padding: '10px',
                            borderRadius: '6px',
                            textAlign: 'left',
                          }}
                        >
                          <strong style={{ fontSize: '0.85rem', color: '#1e3a8a', display: 'block' }}>
                            {classItem.course}
                          </strong>
                          <small style={{ color: '#64748b', display: 'block' }}>
                            {classItem.code} — {classItem.room}
                          </small>
                          <span style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 600 }}>
                            Bloque 2 hrs
                          </span>
                        </div>
                      ) : (
                        <span style={{ color: '#cbd5e1' }}>—</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}