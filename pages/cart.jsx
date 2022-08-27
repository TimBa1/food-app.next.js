import Image from "next/image";
import styles from "../styles/Cart.module.css";

function Cart() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Products</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/am3.jpg"
                  alt="tp"
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "50px" }}
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>deu La'soupe</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double Ingredients, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>N3,000</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>N6,000</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/am3.jpg"
                  alt="tp"
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: "50px" }}
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>Efo La'soupe</span>
            </td>
            <td>
              <span className={styles.extras}>
                  Meat & Assorted
              </span>
            </td>
            <td>
              <span className={styles.price}>N4,000</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>N8,000</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>N14,000
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>N0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>N14,000
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
