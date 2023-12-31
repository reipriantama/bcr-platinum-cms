import React, { useState } from "react";
import styles from "./LoginFeature.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import api from "../../api";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logout, registerAuth } from "../../store/Auth";
import { Spinner } from "react-bootstrap";

const LoginFeature = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.loginAdmin({
        email,
        password,
      });

      if (response.status === 201) {
        const loginResponse = response.data;
        if (loginResponse && loginResponse.access_token) {
          localStorage.setItem("token", loginResponse.access_token);
          dispatch(registerAuth(loginResponse));
          console.log(localStorage.getItem("token"));
          navigate("/dashboard");
          alert("Login berhasil!");
        } else {
          console.error("Tidak ada respon");
          setLoginFailed(true);
        }
      } else if (response.status === 401) {
        console.error("Login gagal: Email atau password salah");
        dispatch(logout("Email atau password salah"));
        setLoginFailed(true);
      } else {
        console.error("Kesalahan server");
        dispatch(logout("Kesalahan server"));
        setLoginFailed(true);
      }
    } catch (error) {
      console.error("Network error", error);
      dispatch(logout("Network error"));
      setLoginFailed(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className={styles.backgroundImage}>
        <div className={`${styles.container} bg-white float-end`}>
          <div className={styles.logoLogin}></div>
          <h1 className={styles.titleLogin}>Welcome, Admin BCR</h1>
          {loginFailed && (
            <p className={styles.loginFailedMessage} data-testid="alert-login">
              Masukkan username dan password yang benar. Perhatikan penggunaan
              huruf kapital.
            </p>
          )}
          <Form className={styles.formLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                data-testid="email-input"
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
                data-testid="password-input"
                className={styles.formControl}
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            {loading ? (
              <div
                className={`${styles.loading} d-flex justify-content-center`}
              >
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              <Button
                data-testid="login-input"
                className={styles.buttonLogin}
                variant="primary"
                type="submit"
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginFeature;
