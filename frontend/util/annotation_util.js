export const findOffset = (node) => {
  let offset = 0;
  let prevSibling = node.previousSibling;

  while (prevSibling) {
    if (prevSibling.nodeType === 3 ) {
      offset += prevSibling.textContent.length;
    } else if (prevSibling.nodeType === 1 ) {
      offset += 1;
    }
    prevSibling = prevSibling.previousSibling;
  }

  let parent = node.parentElement;
  let prevParentSibling = parent.previousSibling;
  while (prevParentSibling) {
    offset += prevParentSibling.innerText.length;
    prevParentSibling = prevParentSibling.previousSibling;
  }
  return offset;
};

export const randomId = () => {
  return Math.random();
}
