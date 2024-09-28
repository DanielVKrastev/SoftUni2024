function create(words) {
   /*
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
   */


   const container = document.getElementById('content');

   for (const word of words) {
      const div = createSelection(word);
      container.appendChild(div);
   }

   function createSelection(content){
      const div = document.createElement('div');
      const para = document.createElement('p');
      para.style.display = 'none';
      para.textContent = content;
      div.appendChild(para);

      div.addEventListener('click', () => reveal(para));

      return div;

   }

   function reveal(para){
      para.style.display = '';      
   }
}