import { Button, ButtonProps } from "@chakra-ui/react"

interface ButtonJoinQueueProps {
  text: string,
}

const ButtonJoinQueue: React.FC<ButtonJoinQueueProps> = ({ text }) => {

  return (
    <Button
      w='95vw'
      size='lg'
      colorScheme='blue'
      type='submit'
    >
      {text}
    </Button>
  );
};

export default ButtonJoinQueue;