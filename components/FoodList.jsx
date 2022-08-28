import styles from "../styles/FoodList.module.css";
import FoodCart from "./foodCart";

const FoodList = () => {
  const Pizza = [
    {
      id: 1,
      img: "/img/am3.jpg",
      name: "Amala deu la soupe",
      price: '5,000',
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.odit qui vero, optio sint praesentium.",
    },
    {
      id: 2,
      img: "/img/amala1.jpg",
      name: "Amala deu la soupe",
      price: '7,000',
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.odit qui vero, optio sint praesentium.",
    },
    {
      id: 3,
      img: "/img/amala2.jpg",
      name: "Amala deu la soupe",
      price: '3,000',
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.odit qui vero, optio sint praesentium.",
    },
    {
      id: 4,
      img: "/img/amala1.jpg",
      name: "Amala deu la soupe",
      price: '7,000',
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.odit qui vero, optio sint praesentium.",
    },
    {
      id: 5,
      img: "/img/am3.jpg",
      name: "Amala deu la soupe",
      price: '5,000',
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.odit qui vero, optio sint praesentium.",
    },
    {
      id: 6,
      img: "/img/amala2.jpg",
      name: "Amala deu la soupe",
      price: '3,000',
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.odit qui vero, optio sint praesentium.",
    },
    {
      id: 7,
      img: "/img/amala1.jpg",
      name: "Amala deu la soupe",
      price: '7,000',
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.odit qui vero, optio sint praesentium.",
    },
    {
      id: 8,
      img: "/img/am3.jpg",
      name: "Amala deu la soupe",
      price: '5,000',
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.odit qui vero, optio sint praesentium.",
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Best Food Resturant In Town</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad perferendis
        et, autem commodi aut iste perspiciatis odit qui vero, optio sint
        praesentium, alias nostrum deserunt quae reprehenderit similique fugit
        ab.
      </p>

      <div className={styles.wrapper}>
              {Pizza.slice(0, 8)
                    .map((props) => (
          <FoodCart props={props} key={props.id} />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
