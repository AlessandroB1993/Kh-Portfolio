import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `nav-link ${isActive ? "nav-link-active" : ""}`
    }
  >
    {children}
  </NavLink>
);

export default CustomNavLink;
