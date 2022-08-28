import Image from "next/image";
import styles from "../../styles/Product.module.css";
import { useState } from "react";

const Product = () => {
  const [size, setSize] = useState([2]);
  const Pizza = {
    id: 1,
    img: "/img/am3.jpg",
    name: "Amala deu la soupe",
    price: [3000, 5000, 7000],
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.odit qui vero, optio sint praesentium,Lorem ipsum dolor, sit amet consectetur adipisicing elit.odit qui vero, optio sint praesentium, alias nostrum deserunt quae reprehenderit similique fugit ab",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={Pizza.img} alt="rel" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{Pizza.name}</h1>
        <span className={styles.price}>N{Pizza.price[size]}</span>
        <p className={styles.desc}>{Pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={()=>setSize([0])}>
            <Image src="/img/am3.jpg" alt="rel" layout="fill" style={{borderRadius:'20px'}} />
            <span className={styles.number}>1 wrap</span>
          </div>
        
        
          <div className={styles.size} onClick={()=>setSize([1])}>
            <Image src="/img/am3.jpg" alt="rel" layout="fill" style={{borderRadius:'25px'}} />
            <span className={styles.number}>2 wraps</span>
          </div>
        
        
          <div className={styles.size} onClick={()=>setSize([2])}>
            <Image src="/img/am3.jpg" alt="rel" layout="fill" style={{borderRadius:'30px'}} />
            <span className={styles.number}>3 wraps</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
           <div className={styles.option}>
             <input type='checkbox' id='double' name='double' className={styles.checkbox}/>
             <label htmlFor="double"> Meat & Assorted</label>
           </div> 
           <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese">Extra vegetables</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="spicy"
              name="spicy"
            />
            <label htmlFor="spicy">Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic">puply orange</label>
          </div>
        </div>
        <div className={styles.add}>
            <input type='number' defaultValue={1} className={styles.quantity}/>
            <button className={styles.button}>Add to Cart</button>            
        </div>
      </div>
    </div>
  );
};
export default Product;
