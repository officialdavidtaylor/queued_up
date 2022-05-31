import { Button, ButtonProps } from "@chakra-ui/react"

interface ButtonLeaveQueueProps {
  text: string,
}

const ButtonLeaveQueue: React.FC<ButtonLeaveQueueProps> = ({ text }) => {

  return (
    <Button
      w='95vw'
      size='lg'
      variant='outline'
      colorScheme='red'
    >
      {text}
    </Button>
  );
};

export default ButtonLeaveQueue;
