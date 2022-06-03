import { Text, TextProps } from "@chakra-ui/react";

const TextLinePosition: React.FC<TextProps> = (props) => {
  return (
    <Text
      fontSize='75vw'
      fontWeight='200'
      lineHeight='1.1'
      paddingY='0px'
    >
      {props.children}
    </Text>
  );
};

export default TextLinePosition;