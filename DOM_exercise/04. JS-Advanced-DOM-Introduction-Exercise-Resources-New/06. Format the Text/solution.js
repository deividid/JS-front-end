function solve() {
  const text = document.getElementById('input');
  const output = document.getElementById('output');

  let splitText = text.value.split('.');

  for (let i = 0; i < splitText.length; i++) {
    if (splitText[i].length < 1) {
      splitText.splice(i, 1);
    }
  }

  function createParagraph(text) {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = text;
    return newParagraph;
  }

  for (let i = 0; i < splitText.length; i += 3) {
    let par = [];
    let j = i;

    while(j < i + 3 && j < splitText.length) {
      par.push(splitText[j]);
      j += 1;
    }

    output.appendChild(createParagraph((par.join('. ') + '.').trim()));

  }
  }
