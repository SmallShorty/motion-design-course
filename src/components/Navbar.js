import { Link } from "react-router-dom";

import "../styles/Page-Navbar.css";
import pages from "../pages/pages.json";

export const Navbar = () => {
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
