import { Flex, Heading, Text } from '@chakra-ui/react';

import ButtonConfirmationScreen from '../../components/ButtonConfirmationScreen';
import ButtonShareQueueId from '../../components/ButtonShareQueueId';

import formatIdWithSpace from '../../functions/formatIdWithSpace';

interface QueueCreationConfirmationProps {
  queueId: string,
};

const QueueCreationConfirmation: React.FC<QueueCreationConfirmationProps> = (props) => {

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
        alignSelf='start'
      >
        <Text>Queue ID:</Text>
      </Heading>
      <Text
        fontSize='64px'
        fontWeight='300'
        marginBottom='5vh'
        color='grey'
        alignSelf='start'
      >
        {formatIdWithSpace(props.queueId)}
      </Text>
      <Flex
        direction='column'
      >
        <ButtonConfirmationScreen text='Manage Queue' href='/manage' />
        <ButtonShareQueueId queueId={props.queueId} />
      </Flex>
    </Flex>
  );
};

export default QueueCreationConfirmation;
