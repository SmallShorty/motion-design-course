import { Link } from "react-router-dom";

export const SidebarPageMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </nav>
  );
};
