import React from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, GraduationCap, School, ArrowRight } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    localStorage.setItem("userRole", role);
    if (role === "admin") {
      localStorage.setItem("userName", "Roberto Morales");
      localStorage.setItem("userEmail", "r.morales@academia.edu.pe");
      navigate("/admin/usuarios");
    } else {
      localStorage.setItem("userName", "Juan Carlos Flores");
      localStorage.setItem("userEmail", "j.flores@academia.edu.pe");
      navigate("/estudiante/panel");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-center items-center p-4">
      {/* Contenedor principal de Login */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Cabecera institucional */}
        <div className="bg-[#1E3A8A] text-white p-8 text-center relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-800 rounded-full opacity-40 pointer-events-none" />
          <div className="absolute -left-8 -bottom-8 w-24 h-24 bg-blue-700 rounded-full opacity-30 pointer-events-none" />
          
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-4 backdrop-blur-xs border border-white/20">
            <School className="w-9 h-9 text-white" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Academia Preuniversitaria</h1>
          <p className="text-blue-200 text-sm mt-1">
            Sistema Integrado de Gestión Académica (SCRM)
          </p>
        </div>

        {/* Cuerpo del Login */}
        <div className="p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-slate-800">
              Acceso Rápido al Sistema
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Selecciona tu perfil institucional para ingresar a la plataforma de demostración.
            </p>
          </div>

          <div className="space-y-4">
            {/* Opción 1: Administrador */}
            <button
              onClick={() => handleLogin("admin")}
              className="w-full group flex items-center justify-between p-4 rounded-xl border-2 border-slate-200 hover:border-[#1E3A8A] hover:bg-blue-50/50 transition-all duration-200 text-left cursor-pointer shadow-xs hover:shadow-md"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-slate-800 group-hover:text-[#1E3A8A] text-sm md:text-base">
                    Entrar como Administrador
                  </div>
                  <div className="text-xs text-slate-500">
                    Gestión de usuarios, control de roles y métricas
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#1E3A8A] group-hover:translate-x-1 transition-all" />
            </button>

            {/* Opción 2: Estudiante */}
            <button
              onClick={() => handleLogin("estudiante")}
              className="w-full group flex items-center justify-between p-4 rounded-xl border-2 border-slate-200 hover:border-emerald-600 hover:bg-emerald-50/50 transition-all duration-200 text-left cursor-pointer shadow-xs hover:shadow-md"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-emerald-100 rounded-lg text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-slate-800 group-hover:text-emerald-700 text-sm md:text-base">
                    Entrar como Estudiante
                  </div>
                  <div className="text-xs text-slate-500">
                    Clases virtuales Meet, cursos e historial de asistencia
                  </div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
            </button>
          </div>

          <div className="pt-2 text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
              Modo MVP Simulado • Persistencia LocalStorage
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-xs text-slate-400 mt-6 text-center">
        Herramientas de Desarrollo © 2026 Academia Preuniversitaria
      </p>
    </div>
  );
}
