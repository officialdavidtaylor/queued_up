import { Box, Input } from "@chakra-ui/react";
import { useState } from "react";

const InputSingleDigit = ({ key, eventHandler }) => {

  const [isValid, setIsValid] = useState(true);
  const [value, setValue] = useState('');

  return (
    <Input
      isInvalid={!isValid}
      id={key}
      paddingX='0'
      textAlign='center'
      size='lg'
      w='50px'
      h='80px'
      fontSize='5xl'
      value={value}
      onChange={(e) => eventHandler(e, setIsValid, setValue)}
    />
  );
};

export default InputSingleDigit;
