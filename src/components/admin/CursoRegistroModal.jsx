import React, { useState } from "react";
import { X } from "lucide-react";

export default function CursoRegistroModal({ isOpen, onClose, onAddCourse }) {
  const [formData, setFormData] = useState({
    asignatura: "",
    docente: "",
    codigo: "",
    aula: "",
    horario: "Lun / Mié 08:00 - 10:00 hrs",
    area: "Ciencias Exactas",
    estado: "Activo",
    tipoSala: "zoom",
    repositorio: "drive.google.com"
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.asignatura || !formData.docente) return;

    // Crea el objeto del curso estructurado
    const newCourse = {
      id: Date.now(),
      ...formData,
      codigo: formData.codigo.toUpperCase() || "CURSO-NEW",
      aula: formData.aula.toUpperCase() || "AULA-00"
    };

    onAddCourse(newCourse);
    onClose();

    // Resetear formulario
    setFormData({
      asignatura: "",
      docente: "",
      codigo: "",
      aula: "",
      horario: "Lun / Mié 08:00 - 10:00 hrs",
      area: "Ciencias Exactas",
      estado: "Activo",
      tipoSala: "zoom",
      repositorio: "drive.google.com"
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="bg-white rounded-xl shadow-xl border border-slate-200 w-full max-w-md p-5 animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <h3 className="text-base font-bold text-slate-800">Registrar Nuevo Curso</h3>
          <button 
            type="button" 
            onClick={onClose} 
            className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Nombre de la Asignatura *
            </label>
            <input
              type="text"
              name="asignatura"
              value={formData.asignatura}
              onChange={handleChange}
              placeholder="Ej. Matemática Discreta"
              required
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#1E3A8A] transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Docente Titular *
            </label>
            <input
              type="text"
              name="docente"
              value={formData.docente}
              onChange={handleChange}
              placeholder="Ej. Ing. Carlos Pérez"
              required
              className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#1E3A8A] transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Código</label>
              <input
                type="text"
                name="codigo"
                value={formData.codigo}
                onChange={handleChange}
                placeholder="Ej. MAT-101"
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#1E3A8A] transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Aula</label>
              <input
                type="text"
                name="aula"
                value={formData.aula}
                onChange={handleChange}
                placeholder="Ej. A-201"
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#1E3A8A] transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Área Académica
              </label>
              <select
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#1E3A8A] cursor-pointer"
              >
                <option value="Ciencias Exactas">Ciencias Exactas</option>
                <option value="Ciencias Médicas">Ciencias Médicas</option>
                <option value="Humanidades y Letras">Humanidades y Letras</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Estado</label>
              <select
                name="estado"
                value={formData.estado}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#1E3A8A] cursor-pointer"
              >
                <option value="Activo">Activo</option>
                <option value="En Revisión">En Revisión</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-semibold text-white bg-[#1E3A8A] hover:bg-blue-800 rounded-lg transition-colors cursor-pointer"
            >
              Guardar Curso
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}