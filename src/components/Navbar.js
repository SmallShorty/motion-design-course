import { Link, useLocation } from "react-router-dom";

import "../styles/Navbar.css";
import pages from "../pages/pages.json";

export const Navbar = () => {
  const { pathname } = useLocation();

  if (pathname === "/error") {
    return <></>;
  }
  return (
    <div className="navbar">
      <div className="links-container">
        {pages.map((page) => (
          <Link key={page} to={`/${page}`} className="link">
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  );
};
