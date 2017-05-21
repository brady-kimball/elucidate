export const findOffset = (node) => {
  let offset = 0;
  let prevSibling = node.previousSibling;

  while (prevSibling) {
    offset += prevSibling.innerText.length;
    prevSibling = prevSibling.previousSibling;
  }

  return offset;
};

export const randomId = () => {
  return Math.random();
};
