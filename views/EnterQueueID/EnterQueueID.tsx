import { Flex, Heading, Text } from '@chakra-ui/react'
import ButtonJoinQueue from '../../components/ButtonJoinQueue';
import InputNDigitCode from '../../components/InputNDigitCode';

const handleSubmit = (event, n) => {

  event.preventDefault();

  const inputs = event.target.elements;
  let inputString = '';

  for (let i = 0; i < n; i++) {
    inputString += inputs[i].value;
  }

  if (inputString.length == n) {
    console.log(inputString);
  }
  else {
    alert('It looks like the input is incomplete. Please try again.')
  }
};

const EnterQueueID = () => {

  const CODE_DIGITS = 6;

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
        <Text>Enter Queue ID:</Text>
      </Heading>
      <Flex
        direction='column'
      >
        <form
          onSubmit={(e) => handleSubmit(e, CODE_DIGITS)}
        >
          <InputNDigitCode n={CODE_DIGITS} />
          <ButtonJoinQueue text='Join!' />
        </form>
      </Flex>
    </Flex>
  );
};

export default EnterQueueID;