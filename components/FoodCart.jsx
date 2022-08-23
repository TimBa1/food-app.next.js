import Image from 'next/image'
import styles from '../styles/FoodCart.module.css'

const FoodCart = () => {
    return (
        <div className={styles.container}>
           <Image src='/img/am3.jpg' alt="rel" width='700' height='500'/>
            <div className={styles.title}>Amala deu la soupe</div>
            <span className={styles.price}>N7,000</span>
            <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        
        </div>
    )
}

export default FoodCart
