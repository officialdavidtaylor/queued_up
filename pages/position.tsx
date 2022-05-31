import Head from 'next/head'
import styles from '../styles/Home.module.css'
import QueuePosition from '../views/QueuePosition'

export default function JoinQueue() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Queue Position</title>
        <meta name="Webservice for virtual queues" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QueuePosition />
    </div>
  );
};
