function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="logo">CoopTech</div>
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#mission">Mission</a>
          <a href="#guarantee">Why Us</a>
          <a href="tel:19074067901" className="nav-call">
            907-406-7901
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
