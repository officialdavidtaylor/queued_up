
const formatIdWithSpace = (id: string) => {

  let returnVal = null;
  try {
    if (id.length === 6) {
      returnVal = (id.slice(0, 3) + ' ' + id.slice(3))
    }
  }
  catch { };

  return returnVal;
};

export default formatIdWithSpace;