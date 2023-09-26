import React, { useState } from "react";
import styles from "./LoginFeature.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import api from "../../api";
import { useNavigate } from "react-router";

const LoginFeature = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false); // State untuk pesan login gagal
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.loginAdmin({
        email,
        password,
      });

      if (response.status === 201) {
        const data = response.data;
        if (data && data.access_token) {
          // Tampilkan pesan sukses atau navigasi ke halaman lain
          navigate("/dashboard-page");
          alert("Login berhasil!");
        } else {
          
          console.error("Tidak ada respon");
          setLoginFailed(true);
        }
      } else if (response.status === 401) {
        // Handle kesalahan otentikasi (misalnya, email atau password salah)
        console.error("Login gagal: Email atau password salah");
        setLoginFailed(true);
      } else {
        // Handle kesalahan lainnya
        console.error("Kesalahan server");
        setLoginFailed(true);
      }
    } catch (error) {
      // Handle kesalahan jaringan di sini
      console.error("Network error", error);
      setLoginFailed(true);
    }
  };

  return (
    <div>
      <div className={styles.backgroundImage}>
        <div className={`${styles.container} bg-white float-end`}>
          <div className={styles.logoLogin}></div>
          <div className={styles.titleLogin}>Welcome, Admin BCR</div>
          {loginFailed && (
            <div className={styles.loginFailedMessage}>
              Masukkan username dan password yang benar. Perhatikan penggunaan
              huruf kapital.
            </div>
          )}
          <Form className={styles.formLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className={styles.formControl}
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className={styles.formControl}
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Button
              className={styles.buttonLogin}
              variant="primary"
              type="submit"
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginFeature;
