function hasScrollbar(element) {
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

function findElementsWithScrollbars() {
  const allElements = document.querySelectorAll('*');
  const elementsWithScrollbars = [];

  allElements.forEach((element) => {
    if (hasScrollbar(element)) {
      elementsWithScrollbars.push(element);
    }
  });

  return elementsWithScrollbars;
}

const elementsWithScrollbars = findElementsWithScrollbars();

if (elementsWithScrollbars.length > 0) {
  console.log('The following elements have scrollbars:');
  elementsWithScrollbars.forEach((element) => {
    console.log(element);
  });
} else {
  console.log('No elements with scrollbars found.');
}
