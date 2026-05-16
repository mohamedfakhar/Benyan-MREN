import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
export default function Sidebar() {
  const links = [
    {
      icon: "fa-solid fa-chart-bar",
      title: "Status", path: "/"
    },
    {
      icon: "fa-users",
      title: "User Management", path: "/users"
    },
    {
      icon: "fa-building",
      title: "Projects Management", path: "/projects"
    },
    {
      icon: "fa-building",
      title: "Developers Management", path: "/Developer"
    },
    {
      icon: "fa-users",
      title: "Website CMS", path: "/website-cms"
    },
    {
      icon: "fa-building",
      title: "Live Chat", path: "/live-chat"
    },
  ];
  return (
    <aside className={` ${styles.Sidebar} min-vh-100 p-4`}>
      <div className="fw-semibold px-4 mb-3 fs-4 ">DASHBOARDS</div>
      <nav>
        {links.map((item, index) => (
          <NavLink to={item.path} className={({ isActive }) => `${styles.navItem} d-flex align-items-center gap-3 py-2 ${isActive ? styles.active : ""}`} key={index}>
            <div className={` ${styles.navItem} d-flex align-items-center gap-3 py-2`} key={index}>
              <i className={`fa-solid ${item.icon} fs-5`}></i>
              <span>{item.title}</span>
            </div>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
