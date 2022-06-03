import { Button, ButtonProps } from "@chakra-ui/react"

interface ButtonJoinQueueProps {
  text: string,
  isLoading: boolean,
}

const ButtonJoinQueue: React.FC<ButtonJoinQueueProps> = ({ text, isLoading }) => {

  return (
    <Button
      isLoading={isLoading}
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
