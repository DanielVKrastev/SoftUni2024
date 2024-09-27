function solve() {
  /*
  tr
  td image
  td name
  td price
  td decaration
  td checkbox
  */

  const btnElGen = document.querySelector('button');

  btnElGen.addEventListener('click', (e) => {
    const inputEl = document.querySelector('textarea');
    const data = JSON.parse(inputEl.value);
   // console.log(data);
    
    const productListEl = document.querySelector('table.table tbody');
    
    data.forEach(item => {

     // console.log(item);
      
      const product = document.createElement('tr');

      const productImageCell = document.createElement('td');
      const productImage = document.createElement('img');
      productImage.setAttribute('src', item.img);
      productImageCell.appendChild(productImage);

      const productNameCell = document.createElement('td');
      productNameCell.textContent = item.name;

      const productPriceCell = document.createElement('td');
      productPriceCell.textContent = item.price;

      const producDecFactorCell = document.createElement('td');
      producDecFactorCell.textContent = item.decFactor;

      const productMarkCell = document.createElement('td');
      const productMarkCheckBox = document.createElement('input');
      productMarkCheckBox.setAttribute('type', 'checkbox');
      productMarkCell.appendChild(productMarkCheckBox);

      product.append(
        productImageCell,
        productNameCell,
        productPriceCell,
        producDecFactorCell,
        productMarkCell
      )

      productListEl.appendChild(product);

    });
  })

  const shopBtnEl = document.querySelectorAll('button')[1];

  shopBtnEl.addEventListener('click', (e) => {

    const outputEl = document.querySelectorAll('textarea')[1];

    const data = [...document.querySelectorAll('.table tbody tr:has(input:checked)')].map(item => ({
      name: item.childNodes[1].textContent,
      price: Number(item.childNodes[2].textContent),
      decFactor: Number(item.childNodes[3].textContent)
    }));

    //console.log(data);
    
    let output = `Bought furniture: ${data.map(i => i.name).join(', ')}\n`;
    output += `Total price: ${Number(data.reduce((acc, el) => {return acc + el.price}, 0)).toFixed(2)}\n`;
    output += `Average decoration factor: ${data.reduce((acc, el) => {return acc + el.decFactor} , 0) / data.length}`;
    
    outputEl.value = output;
    
  })
}