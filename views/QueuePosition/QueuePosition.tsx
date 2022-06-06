import { gql, useQuery } from "@apollo/client";
import { Flex, Heading, Skeleton, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import ButtonLeaveQueue from "../../components/ButtonLeaveQueue";
import TextQueuePosition from "../../components/TextQueuePosition";

// View:
//  QueuePosition
// Desc:
//  Stated simply, this view displays the user's position in the queue, and
//  allows the user to leave the queue (via button) at any time.

interface QueuePositionProps {
  queueId: string,
  userId: string,
  isLoading: boolean,
};

// Define queries
// const GET_QUEUE_WITH_ID = gql`
//   # Query to determine if Queue exists
//   query GetQueueWithId($id: String) {
//     active_queues(where: {queue_id: {_eq: $id}}){
//       queue_id
//       queue_uuid
//       queue_creation_time
//     }
//   }
// `;

// Query the user/queue intersection table for all users in the given queue
// Filter out users that have removed themselves, and sort in ascending order
// The frontend will simply search for the position of the user in the array,
// and use the index as the "Position" in line. (zero-indexed as it should be)
const GET_USERS_IN_QUEUE = gql`
  query GetUsersInQueue ($queue_id: String){
    queue_user_intersection(where: {queue_id: {_eq: $queue_id}, in_queue: {_eq: true}}, order_by: {timestamp: asc}) {
      timestamp
      id
      user_id
    }
  }
`;

const getLocalUserId = (userIdRef) => {
  const LOCAL_USER_ID = localStorage.getItem('QueuedUpUserId');
  // use conditional to avoid re-writing the userId Ref with the same data
  if (userIdRef.current !== LOCAL_USER_ID) {
    userIdRef.current = LOCAL_USER_ID;
  };
}

const QueuePosition: React.FC<QueuePositionProps> = (props) => {

  // use Apollo client to query the users in the queue
  const { loading, error, data } = useQuery(GET_USERS_IN_QUEUE, {
    variables: { 'queue_id': `${props.queueId}` },
    pollInterval: 2000,
  });

  const userId = useRef(null);
  const [linePosition, setLinePosition] = useState(null);

  // extract the userId from localStorage (useEffect is necessary when using NextJS: only runs on the frontend)
  useEffect(() => getLocalUserId(userId), [userId]);

  // Identify index of userId in the query data
  useEffect(() => {
    // ensure data isn't loading, and userId has been set (not null)
    if (!loading && !!userId.current) {
      // the location of userId in the array corresponds to the position in the queue
      setLinePosition(data.queue_user_intersection
        .findIndex((element) => (element.user_id == userId.current)));
    };
  }, [linePosition, loading, data]);

  return (
    <>
      <Heading
        as='h1'
        size='4xl'
        marginBottom='5vh'
      >
        <Text>Queue Position</Text>
      </Heading>
      <TextQueuePosition>
        {linePosition}
      </TextQueuePosition>
      <Flex
        direction='column'
      >
        <ButtonLeaveQueue text='Leave Queue' queueId={props.queueId} isLoading={props.isLoading} href='/' />
      </Flex>
    </>
  );
};

export default QueuePosition;
