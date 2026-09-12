import React, { useState, useEffect } from "react";
import { Clock, Users, GraduationCap, MapPin, Calendar, Layers, Video } from "lucide-react";
import useCurse from "../../hooks/useCurse";
import { userService } from "../../services/api";

export default function HorariosSalonesPage() {
  const { courses: initialCourses } = useCurse();
  const [coursesList, setCoursesList] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    if (initialCourses && initialCourses.length > 0) {
      setCoursesList(initialCourses);
    }
    const dataUsuarios = userService.getUsers();
    setUsuarios(dataUsuarios);
  }, [initialCourses]);

  const getDocentes = () => usuarios.filter((u) => u.rol === "Docente");
  
  // Como ya no existen secciones, filtramos o asignamos estudiantes generales si lo deseas, 
  // o agrupamos directamente por curso. Aquí mostramos los estudiantes de forma general o por área si aplica.
  const getEstudiantes = () => usuarios.filter((u) => u.rol === "Estudiante");

  return (
    <div className="space-y-6">
      {/* Encabezado */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-[#1E3A8A]" />
            Horarios, Salones y Distribución Académica
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Visualización de turnos, aulas asignadas, plana docente y cursos virtuales activos.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-blue-50 text-[#1E3A8A] px-3.5 py-2 rounded-xl text-xs font-semibold">
          <Layers className="w-4 h-4" />
          <span>{coursesList.length} Cursos Activos</span>
        </div>
      </div>

      {/* Listado de Cursos */}
      <div className="grid grid-cols-1 gap-6">
        {coursesList.length > 0 ? (
          coursesList.map((curso, index) => {
            const docentes = getDocentes();
            const estudiantes = getEstudiantes();

            return (
              <div
                key={curso.id || index}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transition-all hover:shadow-md"
              >
                {/* Cabecera del Curso */}
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-[#1E3A8A] text-white rounded-xl shadow-xs">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-800">
                        {curso.asignatura}
                      </h3>
                      <p className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" /> {curso.horario}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" /> {curso.area}
                        </span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-lg border border-emerald-100 flex items-center gap-1.5">
                      <Video className="w-3.5 h-3.5" />
                      {curso.sala}
                    </span>
                  </div>
                </div>

                {/* Contenido: Docente del Curso y Alumnos */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Columna de Docente Titular */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-amber-600" />
                      Docente Titular
                    </h4>
                    <div className="p-3 bg-slate-50/80 border border-slate-100 rounded-xl flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-slate-700">
                          {curso.docente}
                        </p>
                        <p className="text-[11px] text-slate-500">Asignado a la materia</p>
                      </div>
                      <span className="text-[10px] bg-amber-50 text-amber-700 font-semibold px-2 py-0.5 rounded border border-amber-100">
                        Titular
                      </span>
                    </div>
                  </div>

                  {/* Columna de Alumnos Matriculados (General / Referencial) */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-blue-600" />
                      Alumnos Registrados ({estudiantes.length})
                    </h4>
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {estudiantes.length > 0 ? (
                        estudiantes.slice(0, 4).map((est) => (
                          <div
                            key={est.id}
                            className="flex items-center justify-between p-3 bg-slate-50/80 border border-slate-100 rounded-xl"
                          >
                            <div>
                              <p className="text-xs font-bold text-slate-700">
                                {est.apellidos}, {est.nombres}
                              </p>
                              <p className="text-[11px] text-slate-500">DNI: {est.dni} | {est.carreraObjetivo}</p>
                            </div>
                            <span className="text-[10px] bg-blue-50 text-blue-700 font-semibold px-2 py-0.5 rounded border border-blue-100">
                              Activo
                            </span>
                          </div>
                        ))
                      ) : (
                        <div className="p-6 text-center border border-dashed border-slate-200 rounded-xl">
                          <p className="text-xs text-slate-400">No hay alumnos registrados.</p>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            );
          })
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-100">
            <p className="text-xs text-slate-400">No hay cursos registrados para mostrar horarios ni salones.</p>
          </div>
        )}
      </div>
    </div>
  );
}