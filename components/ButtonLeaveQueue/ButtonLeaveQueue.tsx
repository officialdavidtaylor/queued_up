import { Button } from "@chakra-ui/react"
import { useRouter } from 'next/router';
interface ButtonLeaveQueueProps {
  text: string,
}

const ButtonLeaveQueue: React.FC<ButtonLeaveQueueProps> = ({ text }) => {

  const router = useRouter();
  const HREF = '/';

  const handleClick = () => {
    router.push(HREF);
  };

  return (
    <Button
      w='95vw'
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
