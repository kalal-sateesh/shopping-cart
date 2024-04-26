import { NavLink } from "react-router-dom";
import styles from "../AppHeader/AppHeader.module.css";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const AppHeader = () => {
    const data = useSelector((state) => state.cart.data);
  return (
    <nav className={styles.nav}>
      <NavLink to="/cart">
        <Button variant="secondary me-5">
          CART
          <span className="fw-bold text-warning ms-2">{data.length}</span>
        </Button>
      </NavLink>
    </nav>
  );
};

export default AppHeader;
