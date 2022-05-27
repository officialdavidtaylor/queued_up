import { Flex, Heading, Kbd, Text } from '@chakra-ui/react'
import ButtonWelcomeScreen from '../../components/ButtonWelcomeScreen';

const WelcomeScreen = () => {
  return (
    <Flex
      h='100vh'
      direction='column'
      align='center'
      justifyContent='center'
    >
      <Heading
        as='h1'
        size='4xl'
        marginBottom='20vh'
      >
        <Text>Welcome to <Kbd>queued_up</Kbd></Text>
      </Heading>
      <Flex
        direction='column'
      >
        <ButtonWelcomeScreen text='Join Queue' href='/join' />
        <ButtonWelcomeScreen text='Create Queue' href='/create' />
      </Flex>
    </Flex>
  );
};

export default WelcomeScreen;