import { useEffect, useState } from "react";
import {
  getStoredUsers,
  initialUsers,
  saveStoredUsers
} from "../data/mockUsers";

export const createInitialUserForm = () => ({
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

export default function useUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getStoredUsers());
  }, []);

  const resetUsers = () => {
    saveStoredUsers(initialUsers);
    setUsers(initialUsers);
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    saveStoredUsers(updatedUsers);
  };

  const saveUser = (formData, editingUserId) => {
    const updatedUsers = editingUserId
      ? users.map((user) =>
          user.id === editingUserId ? { ...user, ...formData } : user
        )
      : [
          {
            id: `USR-${Date.now().toString().slice(-4)}`,
            ...formData
          },
          ...users
        ];

    setUsers(updatedUsers);
    saveStoredUsers(updatedUsers);
  };

  return { users, resetUsers, deleteUser, saveUser };
}
