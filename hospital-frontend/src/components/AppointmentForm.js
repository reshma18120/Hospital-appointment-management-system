import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AppointmentForm() {
  const navigate = useNavigate();

  const [appointment, setAppointment] = useState({
    patientId: "",
    doctorId: "",
    appointmentDate: "",
    timeSlot: ""
  });

  const [doctors, setDoctors] = useState([]);
  const [message, setMessage] = useState("");

  // 🔄 Load doctors for dropdown
  useEffect(() => {
    axios
      .get("http://localhost:8081/api/doctors")
      .then((res) => {
        setDoctors(res.data.filter(d => d.name));
      })
      .catch(() => console.error("Failed to load doctors"));
  }, []);

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8081/api/appointments", appointment);
      setMessage("✅ Appointment booked successfully!");
      setAppointment({
        patientId: "",
        doctorId: "",
        appointmentDate: "",
        timeSlot: ""
      });
    } catch {
      setMessage("❌ Failed to book appointment");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2 style={styles.title}>📅 Book Appointment</h2>
        <p style={styles.subtitle}>Schedule your visit easily</p>

        <input
          type="number"
          name="patientId"
          placeholder="🆔 Patient ID"
          value={appointment.patientId}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <select
          name="doctorId"
          value={appointment.doctorId}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="">👨‍⚕️ Select Doctor</option>
          {doctors.map((doc) => (
            <option key={doc.id} value={doc.id}>
              Dr. {doc.name} – {doc.specialization}
            </option>
          ))}
        </select>

        <input
          type="date"
          name="appointmentDate"
          value={appointment.appointmentDate}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <select
          name="timeSlot"
          value={appointment.timeSlot}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="">⏰ Select Time Slot</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="02:00 PM">02:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
        </select>

        <button type="submit" style={styles.primaryButton}>
          Book Appointment
        </button>

        <hr style={styles.divider} />

        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          style={styles.secondaryButton}
        >
          ⬅ Back to Dashboard
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
    background: "linear-gradient(135deg, #e0f2fe, #fff7ed)"
  },
  card: {
    width: "420px",
    padding: "34px",
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    boxShadow: "0 25px 45px rgba(0,0,0,0.18)"
  },
  title: {
    textAlign: "center",
    color: "#0f92d3",
    marginBottom: "6px"
  },
  subtitle: {
    textAlign: "center",
    color: "#64748b",
    marginBottom: "22px",
    fontSize: "14px"
  },
  input: {
    width: "100%",
    height: "44px",
    padding: "10px 12px",
    marginBottom: "16px",
    borderRadius: "10px",
    border: "1px solid #bae6fd",
    fontSize: "14px",
    backgroundColor: "#ffffff",
    boxSizing: "border-box"
  },
  primaryButton: {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(90deg, #38bdf8, #0ea5e9)",
    color: "#ffffff",
    border: "none",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer"
  },
  divider: {
    margin: "18px 0",
    border: "none",
    borderTop: "1px solid #e5e7eb"
  },
  secondaryButton: {
    width: "100%",
    padding: "11px",
    backgroundColor: "#f0f9ff",
    color: "#7ab8da",
    border: "1px solid #bae6fd",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer"
  },
  message: {
    marginTop: "16px",
    textAlign: "center",
    fontWeight: "500",
    color: "#42b4ed"
  }
};

export default AppointmentForm;