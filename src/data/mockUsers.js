// Mock data de usuarios con persistencia inicial en LocalStorage
export const initialUsers = [
  {
    id: "USR-001",
    apellidos: "Flores Mendoza",
    nombres: "Juan Carlos",
    dni: "74839201",
    fechaNacimiento: "2005-04-15",
    correo: "j.flores@academia.edu.pe",
    celular: "987654321",
    carreraObjetivo: "Medicina Humana (UNMSM)",
    cicloVirtual: "Anual San Marcos 2026",
    rol: "Estudiante",
    estado: "Activo"
  },
  {
    id: "USR-002",
    apellidos: "Quispe Alarcón",
    nombres: "Valeria Sofía",
    dni: "76543210",
    fechaNacimiento: "2006-08-22",
    correo: "v.quispe@academia.edu.pe",
    celular: "912345678",
    carreraObjetivo: "Ing. de Sistemas (UNI)",
    cicloVirtual: "Semestral Intensivo UNI",
    rol: "Estudiante",
    estado: "Activo"
  },
  {
    id: "USR-003",
    apellidos: "Morales Salazar",
    nombres: "Roberto Carlos",
    dni: "41235678",
    fechaNacimiento: "1988-11-05",
    correo: "r.morales@academia.edu.pe",
    celular: "998877665",
    carreraObjetivo: "Dirección Académica",
    cicloVirtual: "Turno Mañana / Tarde",
    rol: "Admin",
    estado: "Activo"
  },
  {
    id: "USR-004",
    apellidos: "Herrera Villanueva",
    nombres: "Carmen Rosa",
    dni: "45678912",
    fechaNacimiento: "1990-03-12",
    correo: "c.herrera@academia.edu.pe",
    celular: "976543210",
    carreraObjetivo: "Cátedra de Álgebra",
    cicloVirtual: "Todos los ciclos",
    rol: "Docente",
    estado: "Activo"
  },
  {
    id: "USR-005",
    apellidos: "Torres Cárdenas",
    nombres: "Mateo Sebastián",
    dni: "78912345",
    fechaNacimiento: "2007-01-30",
    correo: "m.torres@academia.edu.pe",
    celular: "934567891",
    carreraObjetivo: "Derecho (PUCP)",
    cicloVirtual: "Repaso Especializado",
    rol: "Estudiante",
    estado: "Inactivo"
  }
];

// Helper para inicializar y obtener datos de LocalStorage
export const getStoredUsers = () => {
  const stored = localStorage.getItem("academia_users");
  if (!stored) {
    localStorage.setItem("academia_users", JSON.stringify(initialUsers));
    return initialUsers;
  }
  try {
    return JSON.parse(stored);
  } catch (error) {
    console.error("Error al leer usuarios de LocalStorage:", error);
    return initialUsers;
  }
};

export const saveStoredUsers = (users) => {
  localStorage.setItem("academia_users", JSON.stringify(users));
};
