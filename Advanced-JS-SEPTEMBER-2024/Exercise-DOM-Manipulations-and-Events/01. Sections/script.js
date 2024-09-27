function create(words) {
   const contentEl = document.querySelector('#content');

   words.forEach((word) => {

      const divEl = document.createElement('div');
      const pEl = document.createElement('p');

      divEl.appendChild(pEl);
      
      pEl.textContent = word;
      pEl.style.display = 'none';

      divEl.addEventListener('click', (e) => {
         //console.log(e.target.querySelector('p'));
         e.target.querySelector('p').style.display = 'block';
      })

      contentEl.appendChild(divEl);

   })
   
}