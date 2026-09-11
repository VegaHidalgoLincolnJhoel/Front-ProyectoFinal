import { useState, useEffect } from "react";
import { courseService } from "../services/api";

export const createInitialCourseForm = () => ({
  codigo: "",
  aula: "",
  asignatura: "",
  area: "Ciencias Exactas",
  docente: "",
  horario: "",
  sala: "Meet Sala A",
  tipoSala: "meet",
  repositorio: "",
  estado: "Activo"
});

export default function useCurse() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(courseService.getCourses());
  }, []);

  const addCourse = (courseData) => {
    const newCourse = {
      id: `CRS-${String(courses.length + 1).padStart(3, "0")}`,
      ...courseData
    };

    setCourses((currentCourses) => [newCourse, ...currentCourses]);
  };

  return { courses, addCourse };
}