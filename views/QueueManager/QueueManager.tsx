import { gql, useQuery } from "@apollo/client";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FlexViewContainer from "../../components/FlexViewContainer";
import QueueEntryCard from "../../components/QueueEntryCard";

// QUERIES

const GET_USERS_IN_QUEUE = gql`
  query GetUsersInQueue ($queue_id: String){
    queue_user_intersection(where: {queue_id: {_eq: $queue_id}, in_queue: {_eq: true}}, order_by: {timestamp: asc}) {
      timestamp
      id
      user_id
    }
  }
`;

const GET_USER_NAME_WITH_IDS = gql`
  query TestQuery ($user_ids:[uuid!]!) {
    users(where: {id: {_in: $user_ids}}) {
      id
      name
    }
  }
`;

const QueueManager = () => {

  const router = useRouter();

  const [stringQueueId, setStringQueueId] = useState(null);
  const [userIds, setUserIds] = useState([]);
  const [users, setUsers] = useState([]);

  // determine the queueId from the url slug via next router
  useEffect(() => {
    // test if Next router values are ready, and check that stringQueueId is not null
    if (router.isReady && (stringQueueId === null)) {
      // extract the slug from the url path
      const tempQueueId = router.query.queueId;

      if (typeof tempQueueId === 'string') {
        setStringQueueId(tempQueueId);
      }
      else if (Array.isArray(tempQueueId)) {
        // set stringQueueId to index 0 because the stringQueueId is the first entry in the slug per requirements
        setStringQueueId(tempQueueId[0]);
      }
      else {
        alert('NextJS url slug issue encountered :(')
      }
    }
  }, [router, stringQueueId])

  // query the users in the queue
  const usersInQueue = useQuery(GET_USERS_IN_QUEUE, {
    variables: { 'queue_id': `${stringQueueId}` },
    pollInterval: 1000,
  });

  useEffect(() => {
    // ensure Apollo client has provided the data without an error
    if (!usersInQueue.loading && !usersInQueue.error) {
      // extract all user ids from the queue/user intersection data
      const tempUserIds = usersInQueue.data.queue_user_intersection
        .map((element) => element.user_id);
      // update userIds state with array of IDs
      setUserIds(tempUserIds);
    }
  }, [usersInQueue.loading, usersInQueue.error, usersInQueue.data]);

  // query the user names based on IDs
  const usersInfo = useQuery(GET_USER_NAME_WITH_IDS, {
    variables: { "user_ids": userIds }
  });

  useEffect(() => {
    // ensure Apollo client has provided the data without an error
    if (!usersInfo.loading && !usersInfo.error) {
      // extract all user ids from the queue/user intersection data
      const tempUsers = usersInfo.data.users
        .map((element) => {
          return (
            { "user_id": element.id, "user_name": element.name }
          );
        });
      // update userIds state with array of IDs
      setUsers(tempUsers);
    }
  }, [usersInfo.loading, usersInfo.error, usersInfo.data]);

  return (
    <FlexViewContainer>
      <Heading
        as='h1'
        size='4xl'
        marginBottom='5vh'
      >
        <Text>Manage Queue</Text>
      </Heading>
      <Flex
        direction='column'
        overflowY='scroll'
      >
        {users.map((element, index) => {
          return (
            <QueueEntryCard key={index} userId={element.user_id} userName={element.user_name} queueId={stringQueueId} />
          );
        })}
      </Flex>
    </FlexViewContainer>
  );
};

export default QueueManager;
