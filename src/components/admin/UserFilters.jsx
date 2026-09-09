import { Filter, Search } from "lucide-react";

export default function UserFilters({
  searchTerm,
  roleFilter,
  statusFilter,
  onSearchChange,
  onRoleChange,
  onStatusChange
}) {
  return (
    <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-3 pt-4 border-t border-slate-100">
      <div className="md:col-span-6 relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Buscar por apellidos, nombres, DNI, carrera o correo..."
          className="w-full pl-9 pr-4 py-2 text-xs border border-slate-200 rounded-lg bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] transition-all"
        />
      </div>

      <div className="md:col-span-3 flex items-center space-x-2">
        <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <select
          value={roleFilter}
          onChange={(event) => onRoleChange(event.target.value)}
          className="w-full py-2 px-3 text-xs border border-slate-200 rounded-lg bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#1E3A8A] cursor-pointer"
        >
          <option value="TODOS">Todos los Roles</option>
          <option value="Admin">Admin</option>
          <option value="Docente">Docente</option>
          <option value="Estudiante">Estudiante</option>
        </select>
      </div>

      <div className="md:col-span-3">
        <select
          value={statusFilter}
          onChange={(event) => onStatusChange(event.target.value)}
          className="w-full py-2 px-3 text-xs border border-slate-200 rounded-lg bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#1E3A8A] cursor-pointer"
        >
          <option value="TODOS">Todos los Estados</option>
          <option value="Activo">Solo Activos</option>
          <option value="Inactivo">Solo Inactivos</option>
        </select>
      </div>
    </div>
  );
}
