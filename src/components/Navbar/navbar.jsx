import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiInstagram, FiPhone, FiMail } from "react-icons/fi";
import {
  FaAngleDown,
  FaFacebook,
  FaRegHeart,
  FaRegUser,
  FaSearch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { getTotals } from "../../features/cartSlice";
import { Link } from "react-router-dom";
import styles from "../../styles/navbar.module.css";

function Navbar() {
  const dispatch = useDispatch();
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch]);

  return (
    <header>
      <div className={styles.details}>
        <div className={styles["details-content"]}>
          <div className={styles["icon-txt"]}>
            <FiPhone className={styles.icon} />
            <h6 className={styles.txt}>(704) 787-2574</h6>
          </div>
          <div className={styles["icon-txt"]}>
            <FiMail className={styles.icon} />
            <h6 className={styles.txt}>favournzeh1@gmail.com</h6>
          </div>
        </div>
        <div className={styles["details-content"]}>
          <h6 className={styles.txt}>
            Follow Us and get a chance to win 80% off
          </h6>
        </div>
        <div className={styles["details-content"]}>
          <div className={styles["icon-txt"]}>
            <h6 className={styles.txt}>Follow Us : </h6>
            <div>
              <FiInstagram className={styles.icon} />
              <FaYoutube className={styles.icon} />
              <FaFacebook className={styles.icon} />
              <FaTwitter className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.navItem}>
          <h3 className={styles.logo}>Bandage</h3>
          <ul className={styles.navList}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">
                Shop <FaAngleDown className={styles.arrow} />
              </Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
          </ul>
        </div>
        <div className={styles.navItem}>
          <div className={styles["user_auth"]}>
            <div className={styles.btn}>
              <FaRegUser className={styles.icon} />
              Login / Register
            </div>
            <div className={styles.icons}>
              <FaSearch className={styles.icon} />
              <Link to="/cart" style={{ color: "#23A6F0" }}>
                <BsCart className={styles.icon} />
              </Link>
              {cartTotalQuantity > 0 && (
                <span className={styles.cartCount}>{cartTotalQuantity}</span>
              )}
              <FaRegHeart className={styles.icon} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
