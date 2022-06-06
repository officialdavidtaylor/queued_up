import { ApolloError, gql, useMutation } from '@apollo/client';
import { Flex, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import ButtonJoinQueue from '../../components/ButtonJoinQueue';
import InputNDigitCode from '../../components/InputNDigitCode';

// View:
//  EnterQueueID
// Desc:
//  This view is where the 6-digit code is collected from the user.
//  Upon entry, Apollo Client will be used to ensure the queue code is valid,
//  then a new record will be made in the User-Queue Intersection table. After
//  this is completed, the user will be routed to the position page.

const JOIN_QUEUE = gql`
  mutation CreateNewUser($queue_id: String, $user_id: uuid) {
    insert_queue_user_intersection(objects: {
      queue_id: $queue_id,
      user_id: $user_id,
      in_queue: true,
    }) {
      returning {
        id
        timestamp
      }
    }
  }
`;

const EnterQueueID = () => {

  const router = useRouter();
  const POSITION_HREF = '/position/';

  const queueIdInput = useRef('');
  const queryStatus = useRef(null);
  const CODE_DIGIT_COUNT = 6;

  const [joinQueue, { data, loading, error }] = useMutation(JOIN_QUEUE);

  const onMutationError = (error: ApolloError) => {
    // if the error is a constraint-violation, it is likely because the user is already in the queue.
    if (error.graphQLErrors[0].extensions.code === 'constraint-violation') {
      // put them through to the position page!
      router.push(POSITION_HREF + queueIdInput.current);
    }
    // otherwise, I don't know what the error is :(
    else {
      alert('Unknown GraphQL Error encountered.');
    }
  };

  // Extract the characters from each of the input boxes, save to string reference variable
  const handleSubmit = (event, n) => {
    event.preventDefault();

    // Extract all n characters and load into reference variable
    for (let i = 0; i < n; i++) {
      queueIdInput.current += event.target.elements[i].value;
    }

    // ensure string is correct length
    if (queueIdInput.current.length == n) {
      // mutate the database to add user/queue intersection
      queryStatus.current = joinQueue({
        variables: {
          'queue_id': queueIdInput.current,
          'user_id': localStorage.getItem('QueuedUpUserId'),
        },
        onError: onMutationError,
      });
    }
    else {
      // reset reference variable
      queueIdInput.current = '';
      alert('It looks like the input is incomplete. Please try again.');
    };
  };

  useEffect(() => {
    if (error) {
      // alert(`The following GraphQL errors have occured : ${error.graphQLErrors.map((e) => `${e.message}`)}`);
    }
  }, [error])

  // once the mutation has been completed, navigate to the 'position' page
  useEffect(() => {
    if (data && !loading && !error) {
      router.push(POSITION_HREF + queueIdInput.current);
    }
  }, [data, loading, error, router, queueIdInput]);

  return (
    <>
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
          <ButtonJoinQueue isLoading={loading} text='Join!' />
        </form>
      </Flex>
    </>
  );
};

export default EnterQueueID;
