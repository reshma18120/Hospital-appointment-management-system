import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PatientForm() {
  const navigate = useNavigate();

  const [patient, setPatient] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Send ONLY required fields to backend
      const response = await axios.post(
        "http://localhost:8081/api/patients",
        {
          fullName: patient.fullName,
          email: patient.email,
          phone: patient.phone,
          age: patient.age,
          gender: patient.gender
        }
      );

      // ✅ Save login details for demo auth
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: patient.fullName,
          email: patient.email,
          password: patient.password
        })
      );

      setMessage(
        `✅ Registered successfully! Your Patient ID is ${response.data.id}`
      );

      // ✅ Redirect to login after short delay
      setTimeout(() => {
        navigate("/login");
      }, 1500);

      setPatient({
        fullName: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        password: ""
      });
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to register patient");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2 style={styles.title}>📝 Patient Registration</h2>

        <p style={styles.subtitle}>
          Create your account to book appointments
        </p>

        <input
          type="text"
          name="fullName"
          placeholder="👤 Full Name"
          value={patient.fullName}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="📧 Email"
          value={patient.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="text"
          name="phone"
          placeholder="📞 Phone Number"
          value={patient.phone}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="number"
          name="age"
          placeholder="🎂 Age"
          value={patient.age}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <select
          name="gender"
          value={patient.gender}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="">⚧️ Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        {/* ✅ PASSWORD FIELD */}
        <input
          type="password"
          name="password"
          placeholder="🔑 Create Password"
          value={patient.password}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Register & Continue
        </button>

        {message && <p style={styles.message}>{message}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #eaf1ff, #f8fbff)"
  },
  card: {
    width: "420px",
    padding: "32px",
    borderRadius: "16px",
    backgroundColor: "#ffffff",
    boxShadow: "0 12px 30px rgba(0,0,0,0.12)"
  },
  title: {
    textAlign: "center",
    color: "#2563eb",
    fontSize: "24px"
  },
  subtitle: {
    textAlign: "center",
    color: "#6b7280",
    fontSize: "14px",
    marginBottom: "20px"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px"
  },
 button: {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(90deg, #2563eb, #1d4ed8)",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer"
  },
  message: {
    marginTop: "15px",
    textAlign: "center",
    fontWeight: "500",
    color: "#198754"
  }
};

export default PatientForm;