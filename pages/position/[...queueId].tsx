import { useRouter } from 'next/router';

import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import QueuePosition from '../../views/QueuePosition';
import { useEffect, useRef } from 'react';

export default function Position() {

  const router = useRouter();
  const { queueId } = router.query;

  const userId = useRef('');

  useEffect(() => {
    userId.current = localStorage.getItem('QueuedUpUserId');
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Queue Position</title>
        <meta name="Webservice for virtual queues" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QueuePosition queueId={queueId} userId={userId.current} />
    </div>
  );
};
