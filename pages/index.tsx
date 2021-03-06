import { useEffect } from 'react';

import Head from 'next/head'
import WelcomeScreen from '../views/WelcomeScreen'
import { useRouter } from 'next/router';
import FlexViewContainer from '../components/FlexViewContainer';

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    let userName = localStorage.getItem('QueuedUpUserName');
    let userId = localStorage.getItem('QueuedUpUserId');

    if (!userName || !userId) {
      router.push('/signin');
    };
  }, [router])

  return (
    <FlexViewContainer>
      <Head>
        <title>Queued Up</title>
        <meta name="Webservice for virtual queues" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WelcomeScreen />

    </FlexViewContainer>
  )
}
