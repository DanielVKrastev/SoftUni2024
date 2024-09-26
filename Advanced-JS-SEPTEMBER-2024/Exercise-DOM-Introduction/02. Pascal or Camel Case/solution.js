function solve() {
  const input = document.querySelector('#text').value.toLowerCase().split(' ');
  const conversion = document.querySelector('#naming-convention').value.toLowerCase();

  const resultEL = document.querySelector('#result');

  if(input == '' || conversion == ''){
    return;
  }
console.log(conversion);

  let result = '';

  if(conversion == 'camel case'){
    
    result = input[0] + input.slice(1).map((word) => word[0].toUpperCase() + word.slice(1)).join('');
  }else if(conversion == 'pascal case'){
    result = input.map((word) => word[0].toUpperCase() + word.slice(1)).join('');
  }else{
    result = 'Error!';
  }

  resultEL.textContent = result;
}