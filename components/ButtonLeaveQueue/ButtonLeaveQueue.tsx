import { gql, useMutation } from "@apollo/client";
import { Button } from "@chakra-ui/react"
import { useRouter } from 'next/router';
import { useEffect, useRef } from "react";

interface ButtonLeaveQueueProps {
  text: string,
  queueId: string,
  userId?: string,
  isLoading?: boolean,
  w?: string,
  href?: string,
}

const REMOVE_USER_FROM_QUEUE = gql`
  mutation RemoveUserFromQueue ($queue_id:String!, $user_id:uuid!) {
    delete_queue_user_intersection_by_pk(queue_id: $queue_id, user_id: $user_id) {
      id
    }
  }
`;

const ButtonLeaveQueue: React.FC<ButtonLeaveQueueProps> = ({ text, queueId, userId, isLoading, w, href }) => {

  const router = useRouter();
  const userIdRef = useRef(null);

  const [removeUser, { data, loading, error }] = useMutation(REMOVE_USER_FROM_QUEUE);

  // userId can optionally be passed from the parent element
  // if this value is not retrieved from the parent, retreive it from localStorage
  useEffect(() => {
    if (!userId) {
      userIdRef.current = localStorage.getItem('QueuedUpUserId');
    }
    else {
      userIdRef.current = userId;
    };
  });

  const handleClick = () => {
    removeUser({
      variables: {
        'queue_id': queueId,
        'user_id': userIdRef.current,
      }
    });
  };

  useEffect(() => {
    if (data && !loading && !error && href) {
      router.push(href);
    };
  }, [data, loading, error, router, href]);

  return (
    <Button
      isLoading={loading || isLoading}
      w={w}
      size='lg'
      variant='outline'
      colorScheme='red'
      onClick={() => handleClick()}
    >
      {text}
    </Button>
  );
};

export default ButtonLeaveQueue;
