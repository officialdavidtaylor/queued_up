import { Flex, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import ButtonJoinQueue from '../../components/ButtonJoinQueue';
import FlexViewContainer from '../../components/FlexViewContainer';
import InputNDigitCode from '../../components/InputNDigitCode';

// View:
//  EnterQueueID
// Desc:
//  This view is where the 6-digit code is collected from the user.
//  Upon entry, Apollo Client will be used to ensure the queue code is valid,
//  then a new record will be made in the User-Queue Intersection table. After
//  this is completed, the user will be routed to the position page.

const EnterQueueID = () => {

  const router = useRouter()

  const BASE_HREF = '/position/';
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
    <FlexViewContainer>
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
    </FlexViewContainer>
  );
};

export default EnterQueueID;
