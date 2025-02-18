import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Store";

function Login() {
  let username = useRef();
  let password = useRef();
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let loginCheck = () => {
    if (username.current.value === "kallu" && password.current.value === "kallu12") {
      dispatch(login(username.current.value));
      navigate("/Home");
    } else {
      alert("Your credentials are wrong. Check once!");
    }
  };

  // Inline Styles for Centering and Styling
  const styles = {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f4f4f9"
    },
    card: {
      backgroundColor: "white",
      padding: "2rem",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center"
    },
    heading: {
      fontSize: "2.5rem",
      color: "#333",
      marginBottom: "1.5rem"
    },
    inputGroup: {
      textAlign: "left",
      marginBottom: "1.5rem"
    },
    label: {
      display: "block",
      fontSize: "1rem",
      color: "#666",
      marginBottom: "0.5rem"
    },
    input: {
      width: "100%",
      padding: "0.75rem",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "1rem",
      outline: "none",
      transition: "border-color 0.3s"
    },
    button: {
      width: "100%",
      padding: "0.75rem",
      color: "white",
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "5px",
      fontSize: "1.1rem",
      cursor: "pointer",
      transition: "background-color 0.3s"
    },
    buttonHover: {
      backgroundColor: "#0056b3"
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Login</h2>
        <div style={styles.inputGroup}>
          <label htmlFor="username" style={styles.label}>User Name:</label>
          <input
            type="text"
            ref={username}
            placeholder="Enter username"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            ref={password}
            placeholder="Enter password"
            style={styles.input}
          />
        </div>
        <button 
          onClick={loginCheck} 
          style={styles.button}
          onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
