import Image from 'next/image'
import styles from '../styles/FoodCart.module.css'

const FoodCart = () => {
    return (
        <div className={styles.container}>
           <Image src='/img/pizza.png' alt="rel" width='500' height='500'/>
            <div className={styles.title}>Amala deu soup</div>
            <span className={styles.price}>N4,000</span>
            <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        
        </div>
    )
}

export default FoodCart
