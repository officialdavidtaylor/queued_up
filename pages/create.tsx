import Head from 'next/head'
import styles from '../styles/Home.module.css'
import WelcomeScreen from '../views/WelcomeScreen'

export default function JoinQueue() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create a Queue!</title>
        <meta name="Webservice for virtual queues" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WelcomeScreen />

    </div>
  )
}
