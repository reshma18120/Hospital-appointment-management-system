import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  // ⏰ Time-based greeting
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "☀️ Good Morning" :
    hour < 18 ? "🌤 Good Afternoon" :
    "🌙 Good Evening";

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={styles.page}>
      {/* 🔵 HEADER BAR */}
      <div style={styles.header}>
        <div style={styles.logo}>🏥 Hospital Dashboard</div>

        <div style={styles.headerRight}>
          <span style={styles.userName}> {user?.name}</span>
          <button style={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* GREETING */}
      <h2 style={styles.title}>
        {greeting}, {user?.name}
      </h2>

      <p style={styles.subtitle}>
        Manage your appointments and consult our specialists
      </p>

      {/* QUICK STATS */}
      <div style={styles.statsContainer}>
        <div style={styles.statCard}>
          👨‍⚕️ Doctors Available <br />
          <strong>12</strong>
        </div>

        <div style={styles.statCard}>
          📅 Appointments Booked <br />
          <strong>2</strong>
        </div>

        <div style={styles.statCard}>
          ⏰ Next Visit <br />
          <strong>Tomorrow</strong>
        </div>
      </div>

      {/* ACTION CARDS */}
      <div style={styles.cardContainer}>
        <div
          style={styles.card}
          onClick={() => navigate("/doctors")}
        >
          <div style={styles.icon}>👨‍⚕️</div>
          <h3 style={styles.cardTitle}>View Doctors</h3>
          <p style={styles.cardText}>Check available specialists</p>
          <button style={styles.button}>Go</button>
        </div>

        <div
          style={styles.card}
          onClick={() => navigate("/appointment")}
        >
          <div style={styles.icon}>📅</div>
          <h3 style={styles.cardTitle}>Book Appointment</h3>
          <p style={styles.cardText}>Schedule your visit easily</p>
          <button style={styles.button}>Book</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #e0f2fe, #f8fafc)",
    paddingBottom: "40px"
  },

  /* HEADER */
  header: {
    height: "64px",
    background: "linear-gradient(90deg, #38bdf8, #0ea5e9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 30px",
    color: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
  },

  logo: {
    fontSize: "18px",
    fontWeight: "700"
  },

  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: "15px"
  },

  userName: {
    fontSize: "14px",
    fontWeight: "500"
  },

  logoutBtn: {
    padding: "6px 14px",
    backgroundColor: "#ffffff",
    color: "#93c6df",
    border: "none",
    borderRadius: "8px",
    fontSize: "13px",
    fontWeight: "600",
    cursor: "pointer"
  },

  title: {
    marginTop: "40px",
    textAlign: "center",
    color: "#0284c7",
    fontSize: "28px",
    marginBottom: "8px"
  },

  subtitle: {
    textAlign: "center",
    color: "#64748b",
    marginBottom: "35px",
    fontSize: "15px"
  },

  statsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "40px"
  },

  statCard: {
    backgroundColor: "#ffffff",
    padding: "16px 24px",
    borderRadius: "14px",
    boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
    fontSize: "14px",
    color: "#1f2937",
    minWidth: "180px",
    textAlign: "center"
  },

  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "35px",
    flexWrap: "wrap"
  },

  card: {
    width: "260px",
    backgroundColor: "#ffffff",
    padding: "30px 20px",
    borderRadius: "16px",
    boxShadow: "0 14px 30px rgba(0,0,0,0.15)",
    cursor: "pointer",
    transition: "transform 0.3s ease",
    textAlign: "center"   // 🔥 THIS FIXES EVERYTHING
  },

  icon: {
    fontSize: "44px",
    marginBottom: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  cardTitle: {
    color: "#1f2937",
    marginBottom: "8px"
  },

  cardText: {
    color: "#6b7280",
    fontSize: "14px",
    marginBottom: "18px"
  },

  button: {
    padding: "10px 22px",
    background: "linear-gradient(90deg, #38bdf8, #0ea5e9)",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer"
  }
};

export default Dashboard;