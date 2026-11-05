import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav style={styles.navbar}>
      {/* 🏥 LOGO (CLICKABLE → DASHBOARD) */}
      <div
        style={styles.logo}
        onClick={() => user && navigate("/dashboard")}
      >
        🏥 <span style={{ marginLeft: "8px" }}>Hospital System</span>
      </div>

      {/* 🔗 NAV LINKS */}
      <ul style={styles.navLinks}>
        {/* NOT LOGGED IN */}
        {!user && (
          <>
            <li>
              <Link
                to="/register"
                style={isActive("/register") ? styles.activeLink : styles.link}
              >
                Register
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                style={isActive("/login") ? styles.activeLink : styles.link}
              >
                Login
              </Link>
            </li>
          </>
        )}

        {/* LOGGED IN */}
        {user && (
          <>
            <li style={styles.welcome}>
              👋 Welcome, <strong>{user.name}</strong>
            </li>

            <li>
              <Link
                to="/doctors"
                style={isActive("/doctors") ? styles.activeLink : styles.link}
              >
                Doctors
              </Link>
            </li>

            <li>
              <Link
                to="/appointment"
                style={
                  isActive("/appointment") ? styles.activeLink : styles.link
                }
              >
                Book Appointment
              </Link>
            </li>

            <li>
              <button onClick={handleLogout} style={styles.logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    height: "60px",
    background: "linear-gradient(90deg, #0d6efd, #0b5ed7)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 30px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
  },
  logo: {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "600",
    cursor: "pointer"
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    margin: 0,
    padding: 0
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "15px",
    padding: "6px 10px",
    borderRadius: "5px",
    transition: "background 0.2s"
  },
  activeLink: {
    color: "#0d6efd",
    backgroundColor: "#ffffff",
    textDecoration: "none",
    fontSize: "15px",
    padding: "6px 10px",
    borderRadius: "5px",
    fontWeight: "600"
  },
  welcome: {
    color: "#ffffff",
    fontSize: "14px",
    marginRight: "8px",
    opacity: 0.95
  },
  logout: {
    padding: "6px 14px",
    backgroundColor: "#ffffff",
    color: "#0d6efd",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "transform 0.2s"
  }
};

export default Navbar;