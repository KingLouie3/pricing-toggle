import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Card from '../components/Card'
import ProCard from '../components/ProCard'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-primary-Very-Light-Grayish-Blue ">
      <Header />
      <Card className package="Basic" price="$19.99"/>
      <ProCard package="Basic" price="$24.99"/>
      <Card package="Master" price="$39.99"/>
    </div>
  )
}
