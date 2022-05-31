
const formatIdWithSpace = (id: string) => {

  let returnVal = null;

  if (id.length === 6) {
    returnVal = (id.slice(0, 3) + ' ' + id.slice(3))
  }

  return returnVal;
};

export default formatIdWithSpace;