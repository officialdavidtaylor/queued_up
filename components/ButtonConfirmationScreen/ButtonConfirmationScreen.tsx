import Link from 'next/link'
import { Button, Text } from '@chakra-ui/react'

interface ButtonConfirmationScreenProps {
  href: string,
  text: string,
}

const ButtonConfirmationScreen: React.FC<ButtonConfirmationScreenProps> = ({ href, text }) => {
  return (
    <Link href={href}>
      <Button
        marginBottom={4}
        colorScheme='blue'
        size='lg'
        as='a'
      >
        <Text>{text}</Text>
      </Button>
    </Link>
  );
};

export default ButtonConfirmationScreen