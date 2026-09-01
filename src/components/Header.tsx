export default function Header() {
  return (
    <header className="header">
      <input type="text" placeholder="Buscar..." className="search-input" />
      <div className="header-actions">
        <button className="icon-btn">⚙ Settings</button>
        <button className="logout-btn">Cerrar Sesión</button>
      </div>
    </header>
  );
}