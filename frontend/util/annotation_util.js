export const findOffset = (node) => {
  let offset = 0;
  let prevSibling = node.previousSibling;

  while (prevSibling) {
    offset += prevSibling.innerText.length;
    prevSibling = prevSibling.previousSibling;
  }

  return offset;
};

export const validRange = (selection, annotations) => {
  let start = selection[0];
  let end = selection[1];
  let valid = true;
  annotations.forEach( (annotation) => {
    [start, end].forEach( (endPoint) => {
      if (endPoint >= annotation.start_index
        && endPoint <= annotation.end_index) {
          valid = false;
          return;
      }
    });
    if (start <= annotation.start_index && end >= annotation.end_index) {
      valid = false;
    }
  });
  return valid;
};

export const randomId = () => {
  return Math.random();
};
