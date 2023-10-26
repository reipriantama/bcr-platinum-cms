import { useNavigate } from "react-router";
import styles from "./Inner.module.css";

const Inner = ({ cars }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (cars) {
      navigate("/cars");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className={styles.inner}>
      <div className={`${styles.wrap} d-flex flex-column w-100 gap-3`}>
        <div className="mt-3 px-3 py-2">
          <p className="text-muted fw-bold text-uppercase">
            {cars ? "Cars" : "Dashboard"}
          </p>
        </div>
        <div className={`${styles.textBackground} mt-3 px-3 py-2`}>
          <p
            className="fw-bold "
            onClick={handleClick}
            style={{ cursor: "pointer" }}
          >
            {cars ? "List Car" : "Dashboard"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inner;
