function solve() {
  const text = document.getElementById("text");
  const transformTo = document.getElementById("naming-convention");
  const final = document.getElementById('result');

  let splitText = text.value.split(' ');

  let result = [];

  for (let word of splitText) {
    let splitWord = word.split('');
    let newWord = splitWord[0].toUpperCase();
    for (i = 1; i < splitWord.length; i++) {
      newWord += splitWord[i].toLowerCase();
    }
    result.push(newWord);
  }


  if (transformTo.value == "Camel Case") {
    let firstWord = result.shift();
    firstWord = firstWord[0].toLowerCase() + firstWord.slice(1);
    result.unshift(firstWord);
    result = result.join('');

  } else if(transformTo.value == "Pascal Case") {
    result = result.join('');
  } else {
    result = "Error!";
  }

  
  final.textContent = result;
   

}