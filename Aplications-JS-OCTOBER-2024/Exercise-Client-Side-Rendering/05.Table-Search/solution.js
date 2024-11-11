import { html, render} from '../node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/advanced/table';
const rootTbody = document.querySelector('tbody');

function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

  
   

   function onClick() {
      const userListRows = document.querySelectorAll('table tbody tr');
      const searchFiledEl = document.getElementById('searchField');
      const searchStr = searchFiledEl.value.toLowerCase();

      const userList = [...userListRows].map((el) => el.textContent.toLowerCase());

      const result = [];

      userListRows.forEach(el => {
         el.classList.remove('select');
      })

      for(let i = 0; i < userList.length; i++){
         if(userList[i].indexOf(searchStr) >= 0){
            result.push(i);
         }
      }
      

      result.forEach((pos, index) => {
         userListRows[pos].classList.add('select');
      })

      searchFiledEl.value = '';
      
   }

   onLoadUsers()
   async function onLoadUsers() {
      const response = await fetch(url);
      const data = await response.json();
   
      const tableRow = Object.values(data).map(row => tableRowTemplate(row));
      
      update(tableRow);
      
   }

   function update(data){
      render(data,rootTbody)
   };
   
   function tableRowTemplate(data){
      return html`
      <tr data-id='${data._id}'>
            <td>${data.firstName} ${data.lastName}</td>
            <td>${data.email}</td>
            <td>${data.course}</td>
      </tr>
      `;
   }

}

solve();