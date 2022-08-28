import Image from "next/image";
import styles from "../../styles/Order.module.css";

function Order() {
    const status = 0
    const statusClass = (index) => {
        if (index - status < 1) { return styles.done }
        if (index - status === 1){return styles.inProgress}
        if (index - status > 1) { return styles.undone }
    }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTittle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>12345678</span>
              </td>
              <td>
                <span className={styles.name}>John Doe</span>
              </td>
              <td>
                <span className={styles.address}>456, herbert way, oslo</span>
              </td>
              <td>
                <span className={styles.total}>N6,000</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" alt="" width="30px" height="30px" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image className={styles.checkedIcon}  src="/img/checked.png" width={20} height={20} alt="" />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" alt="" width="30px" height="30px" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image  className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="" />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" alt="" width="30px" height="30px" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image  className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="" />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" alt="" width="30px" height="30px" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image  className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="" />
            </div>
          </div>
        </div>
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
          <button className={styles.button}>PAID</button>
        </div>
      </div>
    </div>
  );
}

export default Order;
