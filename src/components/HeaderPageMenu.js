import { Link } from "react-router-dom";

import "../styles/Page-HeaderPageMenu.css";
import pages from "../pages/pages.json";

export const HeaderPageMenu = () => {
  return (
    <div className="header-container">
      {pages.map((page) => (
        <Link key={page} to={`/${page}`}>
          {page}
        </Link>
      ))}
    </div>
  );
};
