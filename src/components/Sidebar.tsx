interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'principal', label: 'Principal' },
    { id: 'alumnos', label: 'Alumnos' },
    { id: 'cursos', label: 'Cursos' },
    { id: 'programacion', label: 'Programación' },
    { id: 'asistencia', label: 'Asistencia' },
    { id: 'perfil', label: 'Perfil' },
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <h2>AM Academy Manager</h2>
        <small>Administrador del Sistema</small>
      </div>
      <button className="btn-action">+ Nuevo Registro</button>
      <nav className="menu">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`menu-btn ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}