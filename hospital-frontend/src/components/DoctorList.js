import { useEffect, useState } from "react";
import axios from "axios";

function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/doctors");
      setDoctors(response.data);
    } catch (err) {
      console.error(err);
      setError("❌ Failed to load doctors");
    }
  };

  // ✅ Remove empty doctors + apply search
  const filteredDoctors = doctors
    .filter((d) => d.name)
    .filter(
      (d) =>
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.specialization.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.title}>Available Doctors</h2>

        <p style={styles.subtitle}>
          Choose from our available specialists
        </p>

        {/* 🔍 SEARCH BAR */}
        <input
          type="text"
          placeholder="🔍 Search by name or specialization (Cardiology, Dentist...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />

        <p style={styles.count}>
          {filteredDoctors.length} specialists available
        </p>

        <hr style={styles.divider} />

        {error && <p style={styles.error}>{error}</p>}

        <div style={styles.cardContainer}>
          {filteredDoctors.length === 0 ? (
            <p style={styles.noData}>
              😔 No doctors found for this search
            </p>
          ) : (
            filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                style={styles.card}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-8px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <h3 style={styles.name}>👨‍⚕️ {doctor.name}</h3>

                <p style={styles.text}>
                  📌 <strong>Specialization:</strong>{" "}
                  {doctor.specialization}
                </p>

                <p style={styles.text}>
                  📞 <strong>Phone:</strong> {doctor.phone}
                </p>

                <p style={styles.id}>
                  🆔 Doctor ID: {doctor.id}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #e3f2fd, #f8fbff)",
    paddingTop: "20px"
  },
  container: {
    padding: "30px",
    maxWidth: "1200px",
    margin: "0 auto"
  },
  title: {
    textAlign: "center",
    marginBottom: "6px",
    color: "#0d47a1",
    fontSize: "26px"
  },
  subtitle: {
    textAlign: "center",
    color: "#555",
    marginBottom: "22px",
    fontSize: "15px"
  },
  search: {
    width: "340px",
    padding: "11px",
    margin: "0 auto 12px",
    display: "block",
    borderRadius: "8px",
    border: "1px solid #cfd8dc",
    fontSize: "14px",
    backgroundColor: "#ffffff"
  },
  count: {
    textAlign: "center",
    color: "#444",
    fontSize: "14px"
  },
  divider: {
    width: "65%",
    margin: "22px auto",
    borderColor: "#dde6f0"
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px"
  },
  card: {
    width: "270px",
    background: "linear-gradient(180deg, #ffffff, #f1f7ff)",
    padding: "22px",
    borderRadius: "16px",
    boxShadow: "0 10px 22px rgba(13, 71, 161, 0.15)",
    transition: "transform 0.3s ease",
    cursor: "pointer"
  },
  name: {
    marginBottom: "10px",
    color: "#0d47a1"
  },
  text: {
    margin: "6px 0",
    color: "#555",
    fontSize: "14px"
  },
  id: {
    marginTop: "12px",
    fontSize: "13px",
    color: "#1565c0",
    fontWeight: "600"
  },
  error: {
    textAlign: "center",
    color: "#c62828",
    marginBottom: "20px"
  },
  noData: {
    textAlign: "center",
    color: "#777",
    fontSize: "15px",
    marginTop: "40px"
  }
};

export default DoctorList;