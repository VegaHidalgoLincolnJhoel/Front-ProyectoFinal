import React, { useState, useEffect } from "react";
import {
  getStoredUsers,
  saveStoredUsers,
  initialUsers
} from "../../data/mockUsers";
import {
  Search,
  UserPlus,
  Filter,
  Edit2,
  Trash2,
  RotateCcw,
  CheckCircle2,
  XCircle,
  FileSpreadsheet,
  Download,
  AlertCircle
} from "lucide-react";

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("TODOS");
  const [statusFilter, setStatusFilter] = useState("TODOS");
  const [notification, setNotification] = useState(null);

  // Modal para nuevo usuario
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [formData, setFormData] = useState({
    apellidos: "",
    nombres: "",
    dni: "",
    fechaNacimiento: "",
    correo: "",
    celular: "",
    carreraObjetivo: "",
    cicloVirtual: "Anual San Marcos 2026",
    rol: "Estudiante",
    estado: "Activo"
  });

  // Cargar usuarios desde LocalStorage al montar
  useEffect(() => {
    const data = getStoredUsers();
    setUsers(data);
  }, []);

  const showNotification = (msg, type = "success") => {
    setNotification({ msg, type });
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  // Restaurar datos originales
  const handleResetData = () => {
    saveStoredUsers(initialUsers);
    setUsers(initialUsers);
    showNotification("Se han restaurado los datos iniciales de prueba.");
  };

  // Manejo de eliminar usuario
  const handleDelete = (id, fullName) => {
    if (window.confirm(`¿Estás seguro de eliminar el registro de ${fullName}?`)) {
      const updated = users.filter((u) => u.id !== id);
      setUsers(updated);
      saveStoredUsers(updated);
      showNotification(`Usuario "${fullName}" eliminado del registro.`);
    }
  };

  // Abrir modal de edición
  const handleEdit = (user) => {
    setEditingUserId(user.id);
    setFormData({
      apellidos: user.apellidos,
      nombres: user.nombres,
      dni: user.dni,
      fechaNacimiento: user.fechaNacimiento,
      correo: user.correo,
      celular: user.celular,
      carreraObjetivo: user.carreraObjetivo,
      cicloVirtual: user.cicloVirtual,
      rol: user.rol,
      estado: user.estado
    });
    setIsModalOpen(true);
  };

  // Guardar nuevo o edición
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (!formData.apellidos || !formData.nombres || !formData.dni) {
      alert("Por favor complete los campos obligatorios (Nombres, Apellidos, DNI).");
      return;
    }

    if (editingUserId) {
      const updated = users.map((u) =>
        u.id === editingUserId ? { ...u, ...formData } : u
      );
      setUsers(updated);
      saveStoredUsers(updated);
      showNotification("Usuario actualizado correctamente.");
    } else {
      const newUser = {
        id: `USR-${Date.now().toString().slice(-4)}`,
        ...formData
      };
      const updated = [newUser, ...users];
      setUsers(updated);
      saveStoredUsers(updated);
      showNotification("Nuevo usuario registrado con éxito.");
    }

    setIsModalOpen(false);
    setEditingUserId(null);
    setFormData({
      apellidos: "",
      nombres: "",
      dni: "",
      fechaNacimiento: "",
      correo: "",
      celular: "",
      carreraObjetivo: "",
      cicloVirtual: "Anual San Marcos 2026",
      rol: "Estudiante",
      estado: "Activo"
    });
  };

  // Filtrado reactivo de usuarios
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.apellidos.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.nombres.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.dni.includes(searchTerm) ||
      user.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.carreraObjetivo.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = roleFilter === "TODOS" || user.rol === roleFilter;
    const matchesStatus = statusFilter === "TODOS" || user.estado === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <div className="space-y-5">
      {/* Notificación flotante */}
      {notification && (
        <div className="bg-blue-900 border-l-4 border-amber-400 text-white p-3 rounded-lg shadow-lg flex items-center justify-between animate-fade-in text-sm">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
            <span>{notification.msg}</span>
          </div>
          <button
            onClick={() => setNotification(null)}
            className="text-white/70 hover:text-white text-xs font-bold px-2 py-1"
          >
            ✕
          </button>
        </div>
      )}

      {/* Barra de cabecera y acciones */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-0.5 rounded bg-blue-100 text-[#1E3A8A] text-xs font-bold uppercase tracking-wider">
                Requerimiento SCRM-4
              </span>
              <h2 className="text-xl font-bold text-slate-800">
                Padrón General de Usuarios de la Academia
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Administración de matrículas, docentes y personal académico con persistencia en LocalStorage.
            </p>
          </div>

          {/* Botones de acción superior */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleResetData}
              className="inline-flex items-center space-x-1.5 px-3 py-2 border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 rounded-lg text-xs font-medium shadow-2xs transition-colors cursor-pointer"
              title="Restaurar datos JSON simulados por defecto"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
              <span>Restablecer Mock</span>
            </button>

            <button
              onClick={() => {
                setEditingUserId(null);
                setFormData({
                  apellidos: "",
                  nombres: "",
                  dni: "",
                  fechaNacimiento: "",
                  correo: "",
                  celular: "",
                  carreraObjetivo: "",
                  cicloVirtual: "Anual San Marcos 2026",
                  rol: "Estudiante",
                  estado: "Activo"
                });
                setIsModalOpen(true);
              }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-[#1E3A8A] text-white hover:bg-blue-800 rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <UserPlus className="w-4 h-4 text-amber-300" />
              <span>Nuevo Usuario</span>
            </button>
          </div>
        </div>

        {/* Barra de Filtros y Búsqueda */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-3 pt-4 border-t border-slate-100">
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por apellidos, nombres, DNI, carrera o correo..."
              className="w-full pl-9 pr-4 py-2 text-xs border border-slate-200 rounded-lg bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] transition-all"
            />
          </div>

          <div className="md:col-span-3 flex items-center space-x-2">
            <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
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
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full py-2 px-3 text-xs border border-slate-200 rounded-lg bg-slate-50 focus:bg-white focus:outline-hidden focus:border-[#1E3A8A] cursor-pointer"
            >
              <option value="TODOS">Todos los Estados</option>
              <option value="Activo">Solo Activos</option>
              <option value="Inactivo">Solo Inactivos</option>
            </select>
          </div>
        </div>
      </div>

      {/* TABLA AVANZADA DE ALTA DENSIDAD (11 COLUMNAS EXACTAS) */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="px-5 py-3 border-b border-slate-200 bg-slate-50/80 flex items-center justify-between text-xs text-slate-600">
          <span className="font-semibold">
            Mostrando {filteredUsers.length} de {users.length} registros cargados
          </span>
          <span className="text-[11px] text-slate-400">
            * 11 columnas reglamentarias de usuario
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            {/* CABECERA CORPORATIVA (#1E3A8A) */}
            <thead>
              <tr className="bg-[#1E3A8A] text-white border-b border-blue-950 font-semibold tracking-wider uppercase text-[11px] select-none">
                <th scope="col" className="py-3 px-3.5 whitespace-nowrap">1. Apellidos</th>
                <th scope="col" className="py-3 px-3.5 whitespace-nowrap">2. Nombres</th>
                <th scope="col" className="py-3 px-3.5 whitespace-nowrap">3. DNI</th>
                <th scope="col" className="py-3 px-3.5 whitespace-nowrap">4. F. Nacimiento</th>
                <th scope="col" className="py-3 px-3.5 whitespace-nowrap">5. Correo</th>
                <th scope="col" className="py-3 px-3.5 whitespace-nowrap">6. Celular</th>
                <th scope="col" className="py-3 px-3.5 whitespace-nowrap">7. Carrera / Objetivo</th>
                <th scope="col" className="py-3 px-3.5 whitespace-nowrap">8. Ciclo Virtual</th>
                <th scope="col" className="py-3 px-3.5 whitespace-nowrap text-center">9. Rol</th>
                <th scope="col" className="py-3 px-3.5 whitespace-nowrap text-center">10. Estado</th>
                <th scope="col" className="py-3 px-3.5 whitespace-nowrap text-center">11. Acciones</th>
              </tr>
            </thead>

            {/* CUERPO DE LA TABLA CON BORDES SUTILES Y HOVER */}
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={11} className="py-8 text-center text-slate-400">
                    <AlertCircle className="w-6 h-6 mx-auto mb-2 text-slate-300" />
                    No se encontraron usuarios con los criterios de búsqueda seleccionados.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user, idx) => (
                  <tr
                    key={user.id || idx}
                    className="hover:bg-blue-50/70 transition-colors duration-150 group"
                  >
                    {/* 1. Apellidos */}
                    <td className="py-2.5 px-3.5 font-semibold text-slate-900 whitespace-nowrap">
                      {user.apellidos}
                    </td>

                    {/* 2. Nombres */}
                    <td className="py-2.5 px-3.5 text-slate-800 whitespace-nowrap">
                      {user.nombres}
                    </td>

                    {/* 3. DNI */}
                    <td className="py-2.5 px-3.5 font-mono text-slate-600 whitespace-nowrap">
                      {user.dni}
                    </td>

                    {/* 4. Fecha de Nacimiento */}
                    <td className="py-2.5 px-3.5 text-slate-600 whitespace-nowrap">
                      {user.fechaNacimiento || "—"}
                    </td>

                    {/* 5. Correo */}
                    <td className="py-2.5 px-3.5 text-slate-600 whitespace-nowrap font-sans">
                      <a
                        href={`mailto:${user.correo}`}
                        className="text-blue-700 hover:underline"
                      >
                        {user.correo}
                      </a>
                    </td>

                    {/* 6. Celular */}
                    <td className="py-2.5 px-3.5 font-mono text-slate-600 whitespace-nowrap">
                      {user.celular || "—"}
                    </td>

                    {/* 7. Carrera/Objetivo */}
                    <td className="py-2.5 px-3.5 whitespace-nowrap">
                      <span className="inline-block max-w-[200px] truncate text-slate-800 font-medium" title={user.carreraObjetivo}>
                        {user.carreraObjetivo}
                      </span>
                    </td>

                    {/* 8. Ciclo Virtual */}
                    <td className="py-2.5 px-3.5 whitespace-nowrap text-slate-600">
                      <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[11px]">
                        {user.cicloVirtual}
                      </span>
                    </td>

                    {/* 9. Rol (Admin, Docente, Estudiante) */}
                    <td className="py-2.5 px-3.5 whitespace-nowrap text-center">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold tracking-wide ${
                          user.rol === "Admin"
                            ? "bg-purple-100 text-purple-800 border border-purple-200"
                            : user.rol === "Docente"
                            ? "bg-amber-100 text-amber-800 border border-amber-200"
                            : "bg-blue-100 text-[#1E3A8A] border border-blue-200"
                        }`}
                      >
                        {user.rol}
                      </span>
                    </td>

                    {/* 10. Estado (Activo, Inactivo) */}
                    <td className="py-2.5 px-3.5 whitespace-nowrap text-center">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${
                          user.estado === "Activo"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-rose-50 text-rose-700 border border-rose-200"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                            user.estado === "Activo" ? "bg-emerald-500" : "bg-rose-500"
                          }`}
                        />
                        {user.estado}
                      </span>
                    </td>

                    {/* 11. Acciones (Editar / Eliminar) */}
                    <td className="py-2.5 px-3.5 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center space-x-1.5">
                        <button
                          onClick={() => handleEdit(user)}
                          title="Editar usuario"
                          className="p-1 text-slate-500 hover:text-blue-700 hover:bg-blue-100 rounded transition-colors cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(user.id, `${user.nombres} ${user.apellidos}`)}
                          title="Eliminar usuario"
                          className="p-1 text-slate-500 hover:text-red-600 hover:bg-red-100 rounded transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer de la tabla */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <div>
            Total en base de datos: <strong>{users.length}</strong> registros simulados.
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Activos: {users.filter(u => u.estado === "Activo").length}
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" /> Inactivos: {users.filter(u => u.estado === "Inactivo").length}
            </span>
          </div>
        </div>
      </div>

      {/* MODAL DE EDICIÓN / CREACIÓN */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden animate-fade-in">
            <div className="bg-[#1E3A8A] text-white px-6 py-4 flex items-center justify-between">
              <h3 className="text-base font-bold">
                {editingUserId ? "Editar Registro de Usuario" : "Registrar Nuevo Usuario"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white/80 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitForm} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Apellidos *</label>
                  <input
                    type="text"
                    required
                    value={formData.apellidos}
                    onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                    className="w-full p-2 border border-slate-200 rounded focus:border-[#1E3A8A] focus:outline-hidden"
                    placeholder="Ej. Gómez Pérez"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Nombres *</label>
                  <input
                    type="text"
                    required
                    value={formData.nombres}
                    onChange={(e) => setFormData({ ...formData, nombres: e.target.value })}
                    className="w-full p-2 border border-slate-200 rounded focus:border-[#1E3A8A] focus:outline-hidden"
                    placeholder="Ej. Ana Lucía"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">DNI *</label>
                  <input
                    type="text"
                    required
                    maxLength={8}
                    value={formData.dni}
                    onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
                    className="w-full p-2 border border-slate-200 rounded focus:border-[#1E3A8A] focus:outline-hidden font-mono"
                    placeholder="8 dígitos"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Fecha de Nacimiento</label>
                  <input
                    type="date"
                    value={formData.fechaNacimiento}
                    onChange={(e) => setFormData({ ...formData, fechaNacimiento: e.target.value })}
                    className="w-full p-2 border border-slate-200 rounded focus:border-[#1E3A8A] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Correo Electrónico</label>
                  <input
                    type="email"
                    value={formData.correo}
                    onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                    className="w-full p-2 border border-slate-200 rounded focus:border-[#1E3A8A] focus:outline-hidden"
                    placeholder="usuario@academia.edu.pe"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Celular</label>
                  <input
                    type="tel"
                    value={formData.celular}
                    onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
                    className="w-full p-2 border border-slate-200 rounded focus:border-[#1E3A8A] focus:outline-hidden font-mono"
                    placeholder="999888777"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Carrera / Objetivo</label>
                  <input
                    type="text"
                    value={formData.carreraObjetivo}
                    onChange={(e) => setFormData({ ...formData, carreraObjetivo: e.target.value })}
                    className="w-full p-2 border border-slate-200 rounded focus:border-[#1E3A8A] focus:outline-hidden"
                    placeholder="Ej. Ing. Civil (UNI) o Cátedra"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Ciclo Virtual</label>
                  <select
                    value={formData.cicloVirtual}
                    onChange={(e) => setFormData({ ...formData, cicloVirtual: e.target.value })}
                    className="w-full p-2 border border-slate-200 rounded focus:border-[#1E3A8A] focus:outline-hidden"
                  >
                    <option value="Anual San Marcos 2026">Anual San Marcos 2026</option>
                    <option value="Semestral Intensivo UNI">Semestral Intensivo UNI</option>
                    <option value="Repaso Especializado">Repaso Especializado</option>
                    <option value="Todos los ciclos">Todos los ciclos</option>
                    <option value="Dirección Académica">Dirección Académica</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Rol</label>
                  <select
                    value={formData.rol}
                    onChange={(e) => setFormData({ ...formData, rol: e.target.value })}
                    className="w-full p-2 border border-slate-200 rounded focus:border-[#1E3A8A] focus:outline-hidden"
                  >
                    <option value="Estudiante">Estudiante</option>
                    <option value="Docente">Docente</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Estado</label>
                  <select
                    value={formData.estado}
                    onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                    className="w-full p-2 border border-slate-200 rounded focus:border-[#1E3A8A] focus:outline-hidden"
                  >
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-slate-300 rounded text-xs text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1E3A8A] hover:bg-blue-800 text-white font-semibold rounded text-xs cursor-pointer shadow-xs"
                >
                  {editingUserId ? "Guardar Cambios" : "Crear Registro"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
