import { gql, useQuery } from "@apollo/client";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import ButtonLeaveQueue from "../../components/ButtonLeaveQueue";

interface QueuePositionProps {
  queueId: string,
  userId: string,
};

// Define queries
const GET_QUEUE_WITH_ID = gql`
  # Query to determine if Queue exists
  query GetQueueWithId($id: String) {
    active_queues(where: {queue_id: {_eq: $id}}){
      queue_id
      queue_uuid
      queue_creation_time
    }
  }
`;

const GET_USERS_IN_QUEUE = gql`
  # Query the intersection table to determine position
  query GetUsersInQueue ($queue_id: String){
    queue_user_intersection(where: {queue_id: {_eq: $queue_id}, in_queue: {_eq: true}}, order_by: {timestamp: asc}) {
      timestamp
      id
      user_id
    }
  }
`;

const QueuePosition: React.FC<QueuePositionProps> = (props) => {

  const { loading, error, data } = useQuery(GET_USERS_IN_QUEUE, {
    variables: { 'queue_id': '123456' }
  });

  const userId = useRef('');
  const linePosition = useRef(null);

  useEffect(() => {
    userId.current = localStorage.getItem('QueuedUpUserId');
  }, []);

  // FIXME: The Current Position feature isn't working :(
  useEffect(() => {
    if (!loading && (userId.current !== '')) {
      linePosition.current = data["queue_user_intersection"].reduce((acc, element, index) => {
        if (element.user_id == userId.current) {
          acc = index;
        };
        return acc;
      }, [Number.POSITIVE_INFINITY])
    };
  }, [loading, data, userId])

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
        marginBottom='5vh'
      >
        <Text>Queue Position</Text>
      </Heading>
      <Text
        fontSize='75vw'
        fontWeight='200'
        lineHeight='1.1'
        paddingY='0px'
      >
        {linePosition.current}
      </Text>
      <Flex
        direction='column'
      >
        <ButtonLeaveQueue text='Leave Queue' />
      </Flex>
    </Flex>
  );
};

export default QueuePosition;
