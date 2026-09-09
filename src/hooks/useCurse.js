import { useState, useEffect } from "react";

const mockCourses = [
  {
    id: "CRS-001",
    codigo: "MAT-101",
    aula: "AULA A-101",
    asignatura: "Álgebra y Funciones",
    area: "Ciencias Exactas (UNI / SM)",
    docente: "Prof. Carmen Rosa Herrera",
    horario: "Lunes y Miércoles 08:00 - 10:00 AM",
    sala: "Zoom Activo",
    tipoSala: "zoom",
    repositorio: "drive.google.com/mat101",
    estado: "Activo"
  },
  {
    id: "CRS-002",
    codigo: "FIS-202",
    aula: "AULA B-204",
    asignatura: "Física Fundamental",
    area: "Ciencias Exactas (UNI)",
    docente: "Prof. Roberto Morales",
    horario: "Martes y Jueves 08:00 - 10:00 AM",
    sala: "Meet Sala A",
    tipoSala: "meet",
    repositorio: "campus.pre.pe/fisica",
    estado: "Activo"
  },
  {
    id: "CRS-003",
    codigo: "BIO-301",
    aula: "AULA C-302",
    asignatura: "Biología y Anatomía",
    area: "Ciencias Médicas (UNMSM)",
    docente: "Dra. Elena Torres",
    horario: "Lunes y Viernes 03:00 - 05:00 PM",
    sala: "Zoom Sala B",
    tipoSala: "zoom",
    repositorio: "campus.pre.pe/bio",
    estado: "Activo"
  },
  {
    id: "CRS-004",
    codigo: "QUI-104",
    aula: "AULA C-105",
    asignatura: "Química Orgánica",
    area: "Ciencias e Ingeniería",
    docente: "Prof. J. Flores",
    horario: "Miércoles y Sábados 10:00 - 12:00 PM",
    sala: "Meet Sala C",
    tipoSala: "meet",
    repositorio: "drive.google.com/quimica",
    estado: "En Revisión"
  },
  {
    id: "CRS-005",
    codigo: "LENG-101",
    aula: "AULA B-108",
    asignatura: "Habilidad Verbal y Redacción",
    area: "Humanidades y Letras",
    docente: "Lic. Valeria Quispe",
    horario: "Sábados 08:00 - 12:00 PM",
    sala: "Zoom Sala D",
    tipoSala: "zoom",
    repositorio: "campus.pre.pe/lenguaje",
    estado: "Activo"
  },
];

export default function useCurse() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(mockCourses);
  }, []);

  return { courses };
}