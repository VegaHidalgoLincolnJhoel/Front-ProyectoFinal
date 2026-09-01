import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PrincipalView from './views/PrincipalView';
import AlumnosView from './views/AlumnosView';
import CursosView from './views/CursosView';
import ProgramacionView from './views/ProgramacionView';
import AsistenciaView from './views/AsistenciaView';
import PerfilView from './views/PerfilView';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('principal');

  const renderView = () => {
    switch (activeTab) {
      case 'principal': return <PrincipalView />;
      case 'alumnos': return <AlumnosView />;
      case 'cursos': return <CursosView />;
      case 'programacion': return <ProgramacionView />;
      case 'asistencia': return <AsistenciaView />;
      case 'perfil': return <PerfilView />;
      default: return <PrincipalView />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-wrapper">
        <Header />
        <main className="content">{renderView()}</main>
      </div>
    </div>
  );
}