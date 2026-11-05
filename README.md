# 🏥 Hospital Appointment Management System

<p align="center">
  **A Full-Stack Web Application for Simplifying Hospital Appointment Management**
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Java-Backend-orange?style=for-the-badge&logo=openjdk" />
  <img src="https://img.shields.io/badge/Spring%20Boot-Framework-6DB33F?style=for-the-badge&logo=springboot" />
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql" />
  <img src="https://img.shields.io/badge/REST%20API-Integration-blue?style=for-the-badge" />
</p>

<p align="center">
  <b>Developed using Java, Spring Boot, React.js, and MySQL</b>
</p>

---

## 📌 About the Project

The **Hospital Appointment Management System** is a full-stack web application designed to simplify and organize hospital appointment-related activities.

The application provides a centralized platform for managing patient information, scheduling appointments, and maintaining patient records. It aims to reduce manual work, improve appointment organization, and provide a more convenient experience for patients and hospital administrators.

The backend is developed using **Java and Spring Boot**, with RESTful APIs for communication between the frontend and backend. The frontend is built using **React.js**, while **MySQL** is used for database management.

## 🎯 Project Objectives

- Simplify the hospital appointment scheduling process.
- Maintain and manage patient information efficiently.
- Provide a centralized system for appointment management.
- Enable smooth communication between frontend and backend.
- Store and retrieve information using a relational database.
- Reduce manual appointment management activities.

## ✨ Key Features

| Feature | Description |
|---|---|
| 👤 Patient Registration | Supports patient registration and information management. |
| 📅 Appointment Scheduling | Enables appointment creation and scheduling. |
| 📋 Patient Records | Maintains patient-related information in the database. |
| 🔄 REST API Integration | Connects the React frontend with the Spring Boot backend. |
| 🗄️ Database Management | Uses MySQL for structured data storage and retrieval. |
| 🧩 Full-Stack Architecture | Separates frontend, backend, and database responsibilities. |

## 🛠️ Technology Stack

### Frontend
- **React.js** – Component-based user interface development.
- **JavaScript** – Application functionality and logic.
- **HTML5** – Web page structure.
- **CSS3** – Styling and layout.

### Backend
- **Java** – Core programming language.
- **Spring Boot** – Backend application development.
- **Spring REST APIs** – HTTP-based communication between application layers.

### Database
- **MySQL** – Relational database management system.

### Development & Testing Tools
- **Postman** – REST API testing.
- **Git & GitHub** – Version control and source code management.
- **Maven** – Backend dependency and build management (if configured in the project).

## 🏗️ System Architecture

The application follows a three-layer full-stack architecture:

```text
             ┌──────────────────────┐
             │       USER           │
             └──────────┬───────────┘
                        │
                        ▼
             ┌──────────────────────┐
             │   REACT FRONTEND     │
             │   User Interface     │
             └──────────┬───────────┘
                        │
                   REST APIs
                        │
                        ▼
             ┌──────────────────────┐
             │   SPRING BOOT        │
             │   Backend Services   │
             └──────────┬───────────┘
                        │
                        ▼
             ┌──────────────────────┐
             │      MYSQL           │
             │      Database        │
             └──────────────────────┘
```

### Application Workflow

1. The user interacts with the React.js frontend.
2. The frontend sends HTTP requests to the Spring Boot backend.
3. Spring Boot processes the requests through the backend application logic.
4. The backend communicates with the MySQL database.
5. The requested information is returned through REST APIs.
6. React.js updates the user interface with the response.

## 📂 Project Structure

The following is a conceptual structure. Adjust it to match your actual repository folders.

```text
Hospital-Appointment-Management-System/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   └── test/
│   ├── pom.xml
│   └── ...
│
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### Prerequisites

Install the following tools before running the application:

- Java Development Kit (JDK)
- Node.js and npm
- MySQL Server
- Maven (if not using the Maven Wrapper)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/reshma18120/Hospital-appointment-management-system.git
```

Navigate to the project directory:

```bash
cd Hospital-appointment-management-system
```

### 2. Backend Setup

Navigate to the backend directory (adjust the folder name to match your repository):

```bash
cd backend
```

Configure your MySQL database connection in the Spring Boot application configuration file.

Example configuration:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/hospital_db
spring.datasource.username=YOUR_DB_USERNAME
spring.datasource.password=YOUR_DB_PASSWORD

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

Create the database in MySQL if it does not already exist:

```sql
CREATE DATABASE hospital_db;
```

Run the Spring Boot application:

```bash
mvn spring-boot:run
```

### 3. Frontend Setup

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm start
```

If your project uses Vite, use:

```bash
npm run dev
```

### 4. Access the Application

Open the frontend URL displayed in your terminal after starting the development server.

The backend will run on the configured Spring Boot port.

**Note:** Update the folder paths, database configuration, and startup commands according to your actual project setup.

## 🧪 API Testing

Postman is used to test and validate backend REST API endpoints.

API testing helps verify:

- HTTP request and response handling.
- Backend application functionality.
- Database operations.
- Correct API responses.

*Add your actual API endpoint list here once documented.*

## 🔮 Future Enhancements

The following features can be considered for future development:

- Doctor profile and availability management.
- Online appointment cancellation and rescheduling.
- Appointment status tracking.
- Email or SMS appointment notifications.
- Role-based access control for patients, doctors, and administrators.
- Online payment integration.
- Hospital analytics and reporting dashboard.

## 💡 Learning Outcomes

Through this project, I gained practical experience in:

- Developing full-stack web applications.
- Building backend services using Java and Spring Boot.
- Designing and integrating RESTful APIs.
- Developing frontend components using React.js.
- Connecting applications with MySQL databases.
- Testing APIs using Postman.
- Understanding frontend-backend communication.
- Managing project source code using Git and GitHub.

## 👩‍💻 Developer

**Reshma Gollapalli**

B.Tech – Computer Science and Engineering

**Technical Interests:** Java Development | Full-Stack Development | Python | Artificial Intelligence | Generative AI

📌 GitHub: [reshma18120](https://github.com/reshma18120)

---

<p align="center">
  ⭐ If you find this project interesting, consider giving it a star!
</p>

<p align="center">
  <b>Built with ❤️ using Java, Spring Boot, React.js, and MySQL.</b>
</p>
