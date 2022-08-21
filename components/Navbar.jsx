import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import "@fontsource/pacifico";

const Navbar = () => {
  return (
    <div className={styles.component}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/img/telephone.png"
            alt="img"
            height="32px"
            width="32px"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now</div>
          <div className={styles.text}> +234 812 641 4677</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <div className={styles.name}>TimBa</div>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
          <div className={styles.item}>
              <div className={styles.cart}>
                 <Image src="/img/cart.png" alt="img" width='30px' height='30px'/>  
              </div>
             <div className={styles.counter}>2</div>
      </div>
    </div>
  );
};

export default Navbar;
