import './Header.css';

export function Header() {
  return (
    <header>
      <div className="logo-box">
        <div className="logo">TOMATO DESIGN</div>
        <div className="status-tag">Available for new projects</div>
      </div>
      <nav className="nav-links">
        <a href="#works">Works</a>
        <a href="#scope">Scope</a>
        <a href="#process">Process</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
}
