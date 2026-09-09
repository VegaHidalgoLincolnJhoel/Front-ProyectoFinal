const inputClassName = "w-full p-2 border border-slate-200 rounded focus:border-[#1E3A8A] focus:outline-hidden";

export default function UserFormModal({ isEditing, formData, onChange, onSubmit, onClose }) {
  const updateField = (field, value) => onChange({ ...formData, [field]: value });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden animate-fade-in" role="dialog" aria-modal="true" aria-labelledby="user-form-title">
        <div className="bg-[#1E3A8A] text-white px-6 py-4 flex items-center justify-between">
          <h3 id="user-form-title" className="text-base font-bold">
            {isEditing ? "Editar Registro de Usuario" : "Registrar Nuevo Usuario"}
          </h3>
          <button type="button" onClick={onClose} aria-label="Cerrar formulario" className="text-white/80 hover:text-white text-lg font-bold">✕</button>
        </div>

        <form onSubmit={onSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <label className="block font-semibold text-slate-700">Apellidos *<input type="text" required value={formData.apellidos} onChange={(event) => updateField("apellidos", event.target.value)} className={`${inputClassName} mt-1 font-normal`} placeholder="Ej. Gómez Pérez" /></label>
            <label className="block font-semibold text-slate-700">Nombres *<input type="text" required value={formData.nombres} onChange={(event) => updateField("nombres", event.target.value)} className={`${inputClassName} mt-1 font-normal`} placeholder="Ej. Ana Lucía" /></label>
            <label className="block font-semibold text-slate-700">DNI *<input type="text" required maxLength={8} value={formData.dni} onChange={(event) => updateField("dni", event.target.value)} className={`${inputClassName} mt-1 font-normal font-mono`} placeholder="8 dígitos" /></label>
            <label className="block font-semibold text-slate-700">Fecha de Nacimiento<input type="date" value={formData.fechaNacimiento} onChange={(event) => updateField("fechaNacimiento", event.target.value)} className={`${inputClassName} mt-1 font-normal`} /></label>
            <label className="block font-semibold text-slate-700">Correo Electrónico<input type="email" value={formData.correo} onChange={(event) => updateField("correo", event.target.value)} className={`${inputClassName} mt-1 font-normal`} placeholder="usuario@academia.edu.pe" /></label>
            <label className="block font-semibold text-slate-700">Celular<input type="tel" value={formData.celular} onChange={(event) => updateField("celular", event.target.value)} className={`${inputClassName} mt-1 font-normal font-mono`} placeholder="999888777" /></label>
            <label className="block font-semibold text-slate-700">Carrera / Objetivo<input type="text" value={formData.carreraObjetivo} onChange={(event) => updateField("carreraObjetivo", event.target.value)} className={`${inputClassName} mt-1 font-normal`} placeholder="Ej. Ing. Civil (UNI) o Cátedra" /></label>
            <label className="block font-semibold text-slate-700">Ciclo Virtual<select value={formData.cicloVirtual} onChange={(event) => updateField("cicloVirtual", event.target.value)} className={`${inputClassName} mt-1 font-normal`}><option value="Anual San Marcos 2026">Anual San Marcos 2026</option><option value="Semestral Intensivo UNI">Semestral Intensivo UNI</option><option value="Repaso Especializado">Repaso Especializado</option><option value="Todos los ciclos">Todos los ciclos</option><option value="Dirección Académica">Dirección Académica</option></select></label>
            <label className="block font-semibold text-slate-700">Rol<select value={formData.rol} onChange={(event) => updateField("rol", event.target.value)} className={`${inputClassName} mt-1 font-normal`}><option value="Estudiante">Estudiante</option><option value="Docente">Docente</option><option value="Admin">Admin</option></select></label>
            <label className="block font-semibold text-slate-700">Estado<select value={formData.estado} onChange={(event) => updateField("estado", event.target.value)} className={`${inputClassName} mt-1 font-normal`}><option value="Activo">Activo</option><option value="Inactivo">Inactivo</option></select></label>
          </div>

          <div className="pt-4 border-t border-slate-200 flex justify-end space-x-3">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-slate-300 rounded text-xs text-slate-600 hover:bg-slate-50 cursor-pointer">Cancelar</button>
            <button type="submit" className="px-4 py-2 bg-[#1E3A8A] hover:bg-blue-800 text-white font-semibold rounded text-xs cursor-pointer shadow-xs">{isEditing ? "Guardar Cambios" : "Crear Registro"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
