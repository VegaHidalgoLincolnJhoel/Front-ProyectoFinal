import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarProfesor from '../components/SidebarProfesor';

export default function TeacherLayout() {
  return (
    <div className="flex h-screen bg-slate-950 text-white">
      {/* Barra lateral específica del profesor */}
      <SidebarProfesor />
      
      {/* Área principal donde cambiarán las páginas del profesor */}
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}