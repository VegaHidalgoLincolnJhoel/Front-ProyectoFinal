import React, { useState, useEffect } from "react";
import { Clock, Users, GraduationCap, MapPin, Calendar, Layers } from "lucide-react";
import { sectionService, userService } from "../../services/api";

export default function HorariosSalonesPage() {
  const [secciones, setSecciones] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Cargamos secciones y usuarios desde los servicios locales
    const dataSecciones = sectionService.getSections();
    const dataUsuarios = userService.getUsers();
    setSecciones(dataSecciones);
    setUsuarios(dataUsuarios);
  }, []);

  // Filtrar usuarios por rol y sección/ciclo virtual
  const getDocentes = () => usuarios.filter((u) => u.rol === "Docente");
  
  const getEstudiantesPorSeccion = (nombreSeccion) => {
    return usuarios.filter(
      (u) => u.rol === "Estudiante" && u.cicloVirtual === nombreSeccion
    );
  };

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
            Visualización de turnos, aulas asignadas, plana docente y alumnos matriculados por sección virtual.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-blue-50 text-[#1E3A8A] px-3.5 py-2 rounded-xl text-xs font-semibold">
          <Layers className="w-4 h-4" />
          <span>{secciones.length} Secciones Activas</span>
        </div>
      </div>

      {/* Listado de Secciones / Salones */}
      <div className="grid grid-cols-1 gap-6">
        {secciones.length > 0 ? (
          secciones.map((sec, index) => {
            const estudiantesSeccion = getEstudiantesPorSeccion(sec.nombre);
            const docentes = getDocentes();

            return (
              <div
                key={sec.id || index}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transition-all hover:shadow-md"
              >
                {/* Cabecera de la Sección */}
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 bg-[#1E3A8A] text-white rounded-xl shadow-xs">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-800">
                        {sec.nombre}
                      </h3>
                      <p className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" /> Turno: Mañana / Tarde
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" /> Aula Virtual 0{index + 1}
                        </span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-lg border border-emerald-100">
                      {estudiantesSeccion.length} Alumnos Matriculados
                    </span>
                  </div>
                </div>

                {/* Contenido: Docentes y Alumnos */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Columna de Docentes Asignados */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-amber-600" />
                      Plana Docente Asignada
                    </h4>
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {docentes.map((doc) => (
                        <div
                          key={doc.id}
                          className="flex items-center justify-between p-3 bg-slate-50/80 border border-slate-100 rounded-xl"
                        >
                          <div>
                            <p className="text-xs font-bold text-slate-700">
                              {doc.apellidos}, {doc.nombres}
                            </p>
                            <p className="text-[11px] text-slate-500">{doc.carreraObjetivo}</p>
                          </div>
                          <span className="text-[10px] bg-amber-50 text-amber-700 font-semibold px-2 py-0.5 rounded border border-amber-100">
                            Docente
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Columna de Alumnos en la Sección */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-blue-600" />
                      Alumnos en esta Sección ({estudiantesSeccion.length})
                    </h4>
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {estudiantesSeccion.length > 0 ? (
                        estudiantesSeccion.map((est) => (
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
                          <p className="text-xs text-slate-400">No hay alumnos matriculados en esta sección.</p>
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
            <p className="text-xs text-slate-400">No hay secciones registradas para mostrar horarios ni salones.</p>
          </div>
        )}
      </div>
    </div>
  );
}