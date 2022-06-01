import { Button } from '@chakra-ui/react';
import { MdIosShare } from 'react-icons/md';

interface ButtonShareQueueIdProps {
  queueId: string,
}

const ButtonShareQueueId: React.FC<ButtonShareQueueIdProps> = ({ queueId }) => {

  const shareAction = async () => {
    try {
      await navigator.share({ title: "Join Queue", url: `/join/${queueId}` });
      console.log("Data was shared successfully");
    } catch (err) {
      console.error("Share failed:", err.message);
    }
  };

  return (
    <Button
      rightIcon={<MdIosShare />}
      marginBottom={4}
      colorScheme='blue'
      size='lg'
      onClick={() => shareAction()}
    >
      Share
    </Button>);
}

export default ButtonShareQueueId;