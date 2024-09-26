function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   
   function onClick () {
      
      const inputStr =document.querySelector('#inputs textarea').value;

      const restaurantsArr = JSON.parse(inputStr);
      
      let allRestaurant = [];
      for(let i = 0; i < restaurantsArr.length; i++){

         let restaurantData = {
            nameRestaurant: '',
            workers: [],
            avarageSalary: 0
         };

         let [restaurantName, workerStr] = restaurantsArr[i].split(' - ');
         
         restaurantData.nameRestaurant = restaurantName;

         const workerArr = workerStr.split(', ');

         let workerData = {};
         console.log(restaurantName);
         
         for (const worker of workerArr) {
            const [workerName, salary] = worker.split(' ');
            workerData.workerName = salary;
            
         }
         console.log(workerData);
         
      }
      
   }
   

   
}