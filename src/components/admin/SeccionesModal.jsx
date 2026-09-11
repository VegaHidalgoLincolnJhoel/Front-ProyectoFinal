import React, { useState, useEffect } from "react";
import { X, Plus, Edit2, Trash2, Check, Layers } from "lucide-react";
import { sectionService } from "../../services/api"; // Ajusta la ruta si es necesario

export default function SeccionesModal({ isOpen, onClose, onSeccionesChange }) {
  const [secciones, setSecciones] = useState([]);
  const [nombre, setNombre] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editNombre, setEditNombre] = useState("");

  const loadSecciones = () => {
    const data = sectionService.getSections();
    setSecciones(data);
    if (onSeccionesChange) onSeccionesChange(data);
  };

  useEffect(() => {
    if (isOpen) {
      loadSecciones();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAdd = (e) => {
    e.preventDefault();
    if (!nombre.trim()) return;

    const nuevaSeccion = { id: Date.now(), nombre: nombre.trim() };
    const actualizadas = [...secciones, nuevaSeccion];
    
    sectionService.saveSections(actualizadas);
    setSecciones(actualizadas);
    setNombre("");
    if (onSeccionesChange) onSeccionesChange(actualizadas);
  };

  const handleDelete = (id) => {
    const actualizadas = secciones.filter((sec) => sec.id !== id);
    sectionService.saveSections(actualizadas);
    setSecciones(actualizadas);
    if (onSeccionesChange) onSeccionesChange(actualizadas);
  };

  const handleStartEdit = (sec) => {
    setEditingId(sec.id);
    setEditNombre(sec.nombre);
  };

  const handleSaveEdit = (id) => {
    if (!editNombre.trim()) return;

    const actualizadas = secciones.map((sec) =>
      sec.id === id ? { ...sec, nombre: editNombre.trim() } : sec
    );

    sectionService.saveSections(actualizadas);
    setSecciones(actualizadas);
    setEditingId(null);
    setEditNombre("");
    if (onSeccionesChange) onSeccionesChange(actualizadas);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Encabezado */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-blue-50 text-[#1E3A8A] rounded-lg">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-800">
              Gestión de Secciones Virtuales
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cuerpo del Modal */}
        <div className="p-6 space-y-5">
          <form onSubmit={handleAdd} className="flex gap-2">
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej. 123-ABC"
              className="flex-1 px-3.5 py-2 text-xs border border-slate-200 rounded-lg bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A]"
            />
            <button
              type="submit"
              className="inline-flex items-center space-x-1.5 px-4 py-2 bg-[#1E3A8A] text-white hover:bg-blue-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Agregar</span>
            </button>
          </form>

          {/* Listado */}
          <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Secciones Registradas ({secciones.length})
            </span>

            {secciones.length > 0 ? (
              secciones.map((sec) => (
                <div
                  key={sec.id}
                  className="flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-xl hover:border-slate-200 transition-all"
                >
                  {editingId === sec.id ? (
                    <div className="flex items-center gap-2 flex-1 mr-2">
                      <input
                        type="text"
                        value={editNombre}
                        onChange={(e) => setEditNombre(e.target.value)}
                        className="flex-1 px-2.5 py-1 text-xs border border-slate-300 rounded bg-white focus:outline-hidden focus:border-[#1E3A8A]"
                      />
                      <button
                        type="button"
                        onClick={() => handleSaveEdit(sec.id)}
                        className="text-emerald-600 hover:text-emerald-700 p-1 hover:bg-emerald-50 rounded cursor-pointer"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <span className="text-xs font-semibold text-slate-700">
                      {sec.nombre}
                    </span>
                  )}

                  <div className="flex items-center gap-1 shrink-0">
                    {editingId !== sec.id && (
                      <button
                        type="button"
                        onClick={() => handleStartEdit(sec)}
                        className="text-slate-400 hover:text-blue-600 p-1 rounded hover:bg-blue-50 transition-colors cursor-pointer"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleDelete(sec.id)}
                      className="text-slate-400 hover:text-rose-600 p-1 rounded hover:bg-rose-50 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-8 text-center border border-dashed border-slate-200 rounded-xl">
                <p className="text-xs text-slate-400">No hay secciones registradas aún.</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-end px-6 py-3 bg-slate-50 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
}