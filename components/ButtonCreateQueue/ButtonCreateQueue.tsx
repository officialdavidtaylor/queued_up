import { useRouter } from 'next/router'
import { gql, useMutation } from '@apollo/client';

import { Button } from "@chakra-ui/react"

import generateIdCode from '../../functions/generateIdCode';

// Define mutation
const CREATE_NEW_QUEUE = gql`
  # Increments a back-end counter and gets its resulting value
  mutation CreateNewQueue($id: String) {
    insert_active_queues(objects: {
      queue_id: $id
    }) {
      returning {
        queue_id
        queue_uuid
        queue_creation_time
      }
    }
  }
`;

const ButtonCreateQueue = () => {

  const [createQueue, { data, loading, error }] = useMutation(CREATE_NEW_QUEUE);

  const router = useRouter()

  let queueId = generateIdCode();

  let baseHref = '/confirmation/';

  const handleClick = async () => {
    createQueue({ variables: { id: queueId } });

    if (error) { alert(`Submission error! ${error.message}`) }
    else { router.push(baseHref + queueId) };
  }

  return (
    <Button
      isLoading={loading}
      w='95vw'
      size='lg'
      colorScheme='blue'
      loadingText='Creating Queue'
      onClick={() => handleClick()}
    >
      Create Queue
    </Button>
  );
};

export default ButtonCreateQueue;
