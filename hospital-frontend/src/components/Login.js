import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setMessage("❌ No user found. Please register first.");
      return;
    }

    if (
      loginData.email === storedUser.email &&
      loginData.password === storedUser.password
    ) {
      setMessage("✅ Login successful");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      setMessage("❌ Invalid email or password");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.headerIcon}>🔐</div>

        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>
          Login to manage your appointments
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="📧 Email address"
            value={loginData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="🔑 Password"
            value={loginData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        {message && (
          <p
            style={{
              ...styles.message,
              color: message.includes("successful") ? "#16a34a" : "#dc2626"
            }}
          >
            {message}
          </p>
        )}

        <p style={styles.footerText}>
          New user?{" "}
          <span
            style={styles.link}
            onClick={() => navigate("/register")}
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #e0f2fe, #fff7ed)"
  },

  card: {
    width: "380px",
    padding: "40px 35px",
    borderRadius: "18px",
    backgroundColor: "#ffffff",
    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
    textAlign: "center",
    animation: "fadeIn 0.6s ease"
  },

  headerIcon: {
    fontSize: "42px",
    marginBottom: "10px"
  },

  title: {
    color: "#0369a1",
    marginBottom: "6px",
    fontSize: "26px"
  },

  subtitle: {
    color: "#64748b",
    marginBottom: "26px",
    fontSize: "14px"
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "16px",
    borderRadius: "10px",
    border: "1px solid #bae6fd",
    fontSize: "14px",
    outline: "none"
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(90deg, #38bdf8, #0ea5e9)",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "6px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    boxShadow: "0 10px 20px rgba(14,165,233,0.35)"
  },

  message: {
    marginTop: "16px",
    fontWeight: "500"
  },

  footerText: {
    marginTop: "22px",
    fontSize: "14px",
    color: "#475569"
  },

  link: {
    color: "#0284c7",
    fontWeight: "600",
    cursor: "pointer"
  }
};

export default Login;