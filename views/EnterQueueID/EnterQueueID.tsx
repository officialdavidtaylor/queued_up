import { Flex, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import ButtonJoinQueue from '../../components/ButtonJoinQueue';
import InputNDigitCode from '../../components/InputNDigitCode';

const EnterQueueID = () => {

  const router = useRouter()

  const BASE_HREF = '/confirmation/';
  const CODE_DIGIT_COUNT = 6;

  const handleSubmit = (event, n) => {

    event.preventDefault();

    const inputs = event.target.elements;
    let inputString = '';

    for (let i = 0; i < n; i++) {
      inputString += inputs[i].value;
    }

    if (inputString.length == n) {
      router.push(BASE_HREF + inputString)
    }
    else {
      alert('It looks like the input is incomplete. Please try again.')
    }
  };

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
        marginBottom='15vh'
      >
        <Text>Enter Queue ID:</Text>
      </Heading>
      <Flex
        direction='column'
      >
        <form
          onSubmit={(e) => handleSubmit(e, CODE_DIGIT_COUNT)}
        >
          <InputNDigitCode n={CODE_DIGIT_COUNT} />
          <ButtonJoinQueue text='Join!' />
        </form>
      </Flex>
    </Flex>
  );
};

export default EnterQueueID;
