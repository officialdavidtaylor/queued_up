import { Flex, Heading, Text } from '@chakra-ui/react';

import ButtonConfirmationScreen from '../../components/ButtonConfirmationScreen';
import ButtonShareQueueId from '../../components/ButtonShareQueueId';
import FlexViewContainer from '../../components/FlexViewContainer';

import formatIdWithSpace from '../../functions/formatIdWithSpace';

// View:
//  QueueCreationConfirmation
// Desc:
//  This view displays the newly-created Queue ID to the user who created it.
//  Buttons allow the user to either "Manage" or "Share" the Queue ID.

interface QueueCreationConfirmationProps {
  queueId: string,
};

const QueueCreationConfirmation: React.FC<QueueCreationConfirmationProps> = (props) => {

  return (
    <FlexViewContainer>
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
        <ButtonConfirmationScreen text='Manage Queue' href={`/manage/${props.queueId}`} />
        <ButtonShareQueueId queueId={props.queueId} />
      </Flex>
    </FlexViewContainer>
  );
};

export default QueueCreationConfirmation;
