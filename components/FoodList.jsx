import styles from "../styles/FoodList.module.css";
import FoodCart from './foodCart'

const FoodList = () => {
  return (
      <div className={styles.container}>
          <h1 className={styles.title}>Best Food Resturant In Town</h1> 
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad perferendis et, autem commodi aut iste perspiciatis
              odit qui vero, optio sint praesentium, alias nostrum deserunt quae reprehenderit similique fugit ab.</p> 
      
          <div className={styles.wrapper}>
              <FoodCart />
              <FoodCart />
              <FoodCart />
              <FoodCart />
              <FoodCart />
              <FoodCart />
              <FoodCart />
              <FoodCart />
          </div>

      </div>
  )
}

export default FoodList