import { useNavigate } from "react-router-dom";
import PatientForm from "./PatientForm";

function Register() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* LEFT INFO SECTION */}
        <div style={styles.infoBox}>
          <h1 style={styles.heading}>
            🏥 Hospital Appointment System
          </h1>

          <p style={styles.text}>
            Register as a patient to consult doctors and book appointments easily.
          </p>

          <p style={styles.subText}>
            Already registered?
          </p>

          <button
            style={styles.loginBtn}
            onClick={() => navigate("/login")}
          >
            🔐 Go to Login
          </button>
        </div>

        {/* RIGHT FORM SECTION */}
        <div style={styles.formBox}>
          <PatientForm />
        </div>
      </div>
    </div>
  );
}

const styles = {
  /* FULL PAGE BACKGROUND */
  page: {
    minHeight: "100vh",
    background: "linear-gradient(90deg, #a4cbe2 48%, #f8fafc 52%)"
  },

  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "stretch"
  },

  /* LEFT PANEL */
  infoBox: {
    flex: 1,
    padding: "80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "linear-gradient(135deg, #cde9fc, #c9eafc)",
    color: "#0f172a"
  },

  heading: {
    fontSize: "34px",
    marginBottom: "20px",
    fontWeight: "700",
    color: "#0369a1"
  },

  text: {
    fontSize: "16px",
    marginBottom: "28px",
    lineHeight: "1.7",
    color: "#334155"
  },

  subText: {
    fontSize: "15px",
    marginBottom: "12px",
    color: "#475569"
  },

  loginBtn: {
    width: "180px",
    padding: "12px",
    background: "linear-gradient(90deg, #0ea5e9, #0284c7)",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(14,165,233,0.35)"
  },

  /* RIGHT PANEL */
  formBox: {
    flex: 1,
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent" // IMPORTANT
  }
};

export default Register;