import Image from "next/image";
import styles from "../styles/Featured.module.css";
import { useState } from 'react';

const Featured = () => {

const image ={
    
}
const [index, setIndex] =useState(0)
const handleClick=(direction)=>{
    if (direction ==='l') {
        setIndex(index !==0? index -1: 2)
    }
    if (direction ==='r') {
        setIndex(index !==2? index +1: 0)
    }
    console.log(index)
    
}
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left:0}} onClick={()=>handleClick('1')}>
               <Image src='/img/arrowleft.png' alt="rel" layout="fill"/> 
            </div>
            <div className={styles.wrapper}>
                <div className={styles.imgContainer}>
                    
                </div>
            </div>
            <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleClick('r')}>
                <Image src='/img/arrowright.png' alt="rel" layout="fill" />
            </div>
        </div>
    )
}

export default Featured
