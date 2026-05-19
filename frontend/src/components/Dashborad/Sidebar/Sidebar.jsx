import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar({ typingSection }) {
  const links = [
    { icon: "fa-chart-bar", title: "Status", path: "/", key: "status" },
    {
      icon: "fa-users",
      title: "User Management",
      path: "/users",
      key: "users",
    },
    {
      icon: "fa-building",
      title: "Projects Management",
      path: "/projects",
      key: "projects",
    },
    {
      icon: "fa-user",
      title: "Developers Management",
      path: "/developer",
      key: "developer",
    },
    {
      icon: "fa-globe",
      title: "Website CMS",
      path: "/website-cms",
      key: "cms",
    },
    {
      icon: "fa-comments",
      title: "Live Chat",
      path: "/live-chat",
      key: "chat",
    },
  ];

  return (
    <aside
      className={`${styles.Sidebar} min-vh-100 p-4`}
      style={{ position: "relative" }}
    >
      <div className="fw-semibold px-4 mb-3 fs-4">DASHBOARDS</div>

      <nav>
        {links.map((item) => (
          <NavLink
            key={item.key}
            to={item.path}
            className={({ isActive }) =>
              `${styles.navItem} d-flex align-items-center gap-3 py-2 ${
                isActive ? styles.active : ""
              }`
            }
            style={{ position: "relative" }}
          >
            <i className={`fa-solid ${item.icon} fs-5`}></i>
            <span>{item.title}</span>

            {typingSection === item.key && (
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "11px",
                  color: "#00ff88",
                }}
              >
                typing...
              </span>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
