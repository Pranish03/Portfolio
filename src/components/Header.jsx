import "./styles/header.css";

function Header() {
  return (
    <header className="navigation-bar">
      <div className="logo">Pranish</div>
      <nav>
        <a className="link" href="/">
          Blog
        </a>
        <a className="link" href="/">
          Projects
        </a>
        <a className="link" href="/">
          Photos
        </a>
      </nav>
    </header>
  );
}

export default Header;
