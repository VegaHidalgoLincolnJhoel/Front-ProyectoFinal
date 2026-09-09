import { useState, useEffect } from "react";
import { courseService } from "../services/api";

export default function useCurse() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(courseService.getCourses());
  }, []);

  return { courses };
}