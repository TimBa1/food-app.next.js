import Head from 'next/head'
import Image from 'next/image'
import Featured from '../components/Featured'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import FoodList from '../components/FoodList';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TimBa Cusine</title>
        <meta name="description" content="best food site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <FoodList/>
    </div>
  )
}
