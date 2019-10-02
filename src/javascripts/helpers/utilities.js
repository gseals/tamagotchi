const printToDom = (divId, toPrint) => {
  document.getElementById(divId).innterHTML = toPrint;
};

export default { printToDom };
