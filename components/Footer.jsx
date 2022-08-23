import Image from 'next/image'
import styles from '../styles/Footer.module.css'


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <Image src='/img/bg.png' layout='fill' objectFit="cover" alt='rel'/>
      </div>
      <div className={styles.items}>
        <div className={styles.card}>
          <h2 className={styles.motto}>OH YES, WE DID. THE TIMBA CUSINE, WELL COOKED FOODS</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}> FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            145 herbert merculy way, yaba #304.
            <br /> lagos, 234567
            <br/> (234) 812 641 4677
          </p>
          <p className={styles.text}>
            145 herbert merculy way, yaba #304.
            <br /> lagos, 234567
            <br/> (234) 812 641 4677
          </p>
          <p className={styles.text}>
            145 herbert merculy way, yaba #304.
            <br /> lagos, 234567
            <br/> (234) 812 641 4677
          </p>
          <p className={styles.text}>
            145 herbert merculy way, yaba #304.
            <br /> lagos, 234567
            <br/> (234) 812 641 4677
          </p>
          <p className={styles.text}>
            145 herbert merculy way, yaba #304.
            <br /> lagos, 234567
            <br/> (234) 812 641 4677
          </p>
          
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}> WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br/>9:00 -22:00
          </p>
          <p className={styles.text}>
            SATURDAY -SUNDAY
            <br/>12:00 -24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer