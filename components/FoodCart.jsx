import Image from 'next/image'
import styles from '../styles/FoodCart.module.css'

const FoodCart = ({props}) => {
    return (
        <div className={styles.container}>
           <Image src={props.img} alt="rel" width='700' height='500'/>
            <div className={styles.title}>{props.name }</div>
            <span className={styles.price}>{props.price }</span>
            <p className={styles.desc}>{props.desc}</p>
        
        </div>
    )
}

export default FoodCart
