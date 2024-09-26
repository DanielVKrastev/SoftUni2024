function search() {
   //get input
   //get output
   //validate input
   //
   //search
   //clear input for next search
   //change element styling
   //print number of results

   const townsListEl = document.querySelector('#towns');
   const searchFieldEl = document.querySelector('#searchText');
   
   const resultEl = document.querySelector('#result');

   const searchStr = searchFieldEl.value.toLowerCase();
   
   if(searchStr == '') return;

   const townsArray = Array.from(townsListEl.children);
   const towns = townsArray.map((town) => town.textContent.toLowerCase());

   townsArray.forEach((el) => {
      el.style.fontWeight = 'normal';
      el.style.textDecoration = 'none';
   })

   console.log(towns);

   let resultArr = [];

   for(let i = 0; i < towns.length; i++){
      if( towns[i].indexOf(searchStr) >= 0){
         resultArr.push(i);
      }
   }

   resultArr.forEach((position, index) => {
      townsListEl.children[position].style.fontWeight = 'bold';
      townsListEl.children[position].style.textDecoration = 'underline';
   })

   console.log(resultArr);
   
   searchFieldEl.value = '';
   resultEl.textContent = `${resultArr.length} matches found`;
   
}
