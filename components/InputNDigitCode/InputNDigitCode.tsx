import { Flex, InputGroup } from "@chakra-ui/react";
import InputSingleDigit from "../InputSingleDigit";

interface InputNDigitCodeProps {
  n: number,
  validation?: string,
}

function eventHandler(event, setValidity, setValue) {

  const rawInput = event.target.value;

  const inputCoercedToNumber = Number(rawInput);
  const inputIsNumber = !isNaN(inputCoercedToNumber);

  if (inputIsNumber) {
    const inputCoercedToString = inputCoercedToNumber.toString()
    const inputLength = inputCoercedToString.length

    if (inputLength === 1) {
      setValue(inputCoercedToString)
    }

    if (inputLength > 1) {
      setValue(inputCoercedToString.charAt(0));
    }
  }

  if (inputIsNumber) {
    const form = event.target.form;
    const index = Array.prototype.indexOf.call(form, event.target);
    form.elements[index + 1].focus();
    event.preventDefault();

    setValidity(true);
  }
  else {
    setValidity(false);
  }
}

const InputNDigitCode: React.FC<InputNDigitCodeProps> = ({ n, validation }) => {

  const inputBoxes = Array(n);
  const inputState = Array(n);

  return (
    <Flex
      w='95vw'
      direction='row'
      justify='space-between'
      align='center'
      marginBottom='5vh'
    >
      <InputSingleDigit key={0} eventHandler={eventHandler} />
      <InputSingleDigit key={1} eventHandler={eventHandler} />
      <InputSingleDigit key={2} eventHandler={eventHandler} />
      <InputSingleDigit key={3} eventHandler={eventHandler} />
      <InputSingleDigit key={4} eventHandler={eventHandler} />
      <InputSingleDigit key={5} eventHandler={eventHandler} />
    </Flex >
  );
};

export default InputNDigitCode;
