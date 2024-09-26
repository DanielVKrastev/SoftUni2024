function solve() {
  
  const inputEl = document.querySelector('#input');
  const outputEl = document.querySelector('#output');

  if(inputEl.value == '') return;

  const sentences = inputEl.value.split('. ');
  const sentencesPerParagraph = 3;

  const numberOfParagraphs = Math.ceil(sentences.length / sentencesPerParagraph);

  console.log(sentences, numberOfParagraphs);

  let output = '';

  for(let i = 0; i < numberOfParagraphs; i++){
    const p = i * numberOfParagraphs; 
    const text = sentences.slice(p, (p + sentencesPerParagraph)).join('. '); //EXAMPLE: slice(1, (1+3))
    output += `<p>${text}</p>`;
  }
  
  outputEl.innerHTML = output;
}