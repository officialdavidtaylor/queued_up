import { useRouter } from 'next/router'

import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import QueueCreationConfirmation from '../../views/QueueCreationConfirmation';

export default function ConfirmQueue() {

  const router = useRouter()
  const { queueId } = router.query

  return (
    <div className={styles.container}>
      <Head>
        <title>Queue Position</title>
        <meta name="Webservice for virtual queues" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QueueCreationConfirmation queueId={queueId[0]} />
    </div>
  );
};