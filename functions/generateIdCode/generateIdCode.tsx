// Generate a six-digit string between 1 and 999999 that is zero-padded

const generateIdCode = () => {

  const NUM_CODE = Math.floor(Math.random() * 999999) + 1;

  const STR_CODE = String(NUM_CODE).padStart(6, '0');

  return STR_CODE;
};

export default generateIdCode;
