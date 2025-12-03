import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          trimly
        </Link>
      </div>
      <nav className="nav">
        <Link to="/about" className={isActive("/about")}>
          소개
        </Link>
        <Link to="/privacy" className={isActive("/privacy")}>
          데이터 안내
        </Link>
      </nav>
    </header>
  );
}

export default Header;