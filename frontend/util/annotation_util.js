export const findOffset = (node) => {
  let offset = 0;
  let prevSibling = node.previousSibling;
  
  while (prevSibling) {
    if (prevSibling.nodeType === 1 && !!prevSibling.innerHTML) {
      offset += prevSibling.textContent.length || 1;
    }
    prevSibling = prevSibling.previousSibling;
  }
  return offset;
};
