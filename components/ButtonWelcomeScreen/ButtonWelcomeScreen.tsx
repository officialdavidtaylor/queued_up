import Link from 'next/link'
import { Button, Text } from '@chakra-ui/react'

interface ButtonWelcomeScreenProps {
  href: string,
  text: string,
}

const ButtonWelcomeScreen: React.FC<ButtonWelcomeScreenProps> = ({ href, text }) => {
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

export default ButtonWelcomeScreen