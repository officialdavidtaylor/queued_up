import { Flex, Heading, Kbd, Text } from '@chakra-ui/react'
import ButtonCreateQueue from '../../components/ButtonCreateQueue';
import ButtonWelcomeScreen from '../../components/ButtonWelcomeScreen';

// View:
//  {name}
// Desc:
//  {description}

const WelcomeScreen = () => {
  return (
    <>
      <Heading
        as='h1'
        size='4xl'
        marginBottom='20vh'
      >
        <Text>Welcome to <Kbd>queued_up</Kbd></Text>
      </Heading>
      <Flex direction='column'>
        <ButtonWelcomeScreen text='Join Queue' href='/join' />
        <ButtonCreateQueue />
      </Flex>
    </>
  );
};

export default WelcomeScreen;