import { Flex, FlexProps } from "@chakra-ui/react";

// Component
//  FlexViewContainer
// Description
//  This container is used for all of the views in the project

const FlexViewContainer: React.FC<FlexProps> = (props) => {
  return (
    <Flex
      minH='100vh'
      h='-webkit-fit-available'
      direction='column'
      align='center'
      justifyContent='center'
    >
      {props.children}
    </Flex>
  );
};

export default FlexViewContainer;
