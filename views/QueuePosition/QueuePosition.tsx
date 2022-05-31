import { Flex, Heading, Text } from "@chakra-ui/react";
import ButtonLeaveQueue from "../../components/ButtonLeaveQueue";

const QueuePosition = () => {

  const linePosition = 12;

  return (
    <Flex
      h='100vh'
      direction='column'
      align='center'
      justifyContent='center'
    >
      <Heading
        as='h1'
        size='4xl'
        marginBottom='5vh'
      >
        <Text>Queue Position</Text>
      </Heading>
      <Text
        fontSize='75vw'
        fontWeight='200'
        lineHeight='1.1'
        paddingY='0px'
      >
        {linePosition}
      </Text>
      <Flex
        direction='column'
      >
        <ButtonLeaveQueue text='Leave Queue' />
      </Flex>
    </Flex>
  );
};

export default QueuePosition;
