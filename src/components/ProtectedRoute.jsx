import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ allowedRoles }) {
  const currentRole = localStorage.getItem("userRole");

  // Si no está autenticado, redirigir al login
  if (!currentRole) {
    return <Navigate to="/login" replace />;
  }

  // Si el rol actual no tiene permiso para la ruta
  if (allowedRoles && !allowedRoles.includes(currentRole)) {
    // Si un estudiante intenta entrar a rutas de admin, redirigir a su panel
    if (currentRole === "estudiante") {
      return <Navigate to="/estudiante/panel" replace />;
    }
    // Si un admin entra a otra ruta no permitida
    if (currentRole === "admin") {
      return <Navigate to="/admin/usuarios" replace />;
    }
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
