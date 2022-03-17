import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import BaseLayout from '../components/layouts/BaseLayout'
import Card from '../components/Card';
import { sumOfTwo } from '../helpers/helper'

export default function Home() {
  return (
    <BaseLayout>
      <div className={styles.container}>
        <h1>Welcome to the home page </h1>
        <h2>Sum of 2 + 2 is {sumOfTwo(2, 2)}</h2>
        <Card />
      </div>
    </BaseLayout>
  )
}
