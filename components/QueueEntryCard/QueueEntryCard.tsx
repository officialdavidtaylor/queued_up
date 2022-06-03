import { Flex, Heading } from "@chakra-ui/react";
import ButtonLeaveQueue from "../ButtonLeaveQueue";

// COMPONENT
//  QueueEntryCard is the UI element that contains a username and a button (to remove the user from the queue)

interface QueueEntryCardProps {
  userName: string,
  userId: string,
  queueId: string,
}

const QueueEntryCard = ({ userName, userId, queueId }) => {
  return (
    <Flex
      w='90vw'
      borderWidth='1px'
      borderRadius='lg'
      padding='5px'
      marginY='5px'
      direction='row'
      justify='space-between'
    >
      <Heading>{userName}</Heading>
      <ButtonLeaveQueue text='Remove' queueId={queueId} userId={userId} />
    </Flex>
  );
};

export default QueueEntryCard;
