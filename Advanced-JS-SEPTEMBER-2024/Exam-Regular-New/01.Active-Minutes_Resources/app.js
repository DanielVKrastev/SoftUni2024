window.addEventListener("load", solve);

function solve() {
      //initial аadd button
      const addBtn = document.querySelector('#add-activity');
      addBtn.addEventListener('click', readInput);
  
      //data panels
      const previewActivity = document.querySelector('#preview-activity');
      const activityTable = document.querySelector('#activities-table');
  
      //input fields
      const typeActivityInput = document.querySelector('#type');
      const intensityInput = document.querySelector('#intensity');
      const caloriesInput = document.querySelector('#calories');
      const durationInput = document.querySelector('#duration');
      const dateInput = document.querySelector('#date');
  
      let typeActivity = '';
      let intensity = '';
      let calories = '';
      let duration = '';
      let date = '';

      function readInput(){
          typeActivity = typeActivityInput.value;
          intensity = intensityInput.value;
          calories = caloriesInput.value;
          duration = durationInput.value;
          date = dateInput.value;

          if(typeActivity == '' || intensity == '' || calories == '' || duration == '' || date == ''){
            return;
          }

          //clear inputs
          addBtn.disabled = true;

          typeActivityInput.value = '';
          intensityInput.value = '';
          caloriesInput.value = '';
          durationInput.value = '';
          dateInput.value = '';
          
          createPreviewActivity();
      }

      function createPreviewActivity(){
        const liPreview = document.createElement('li');
        const articlePreview = document.createElement('article');

        articlePreview.appendChild(createPar(`Activity: ${typeActivity}`));
        articlePreview.appendChild(createPar(`Intensity: ${intensity}`));
        articlePreview.appendChild(createPar(`Duration: ${duration} min.`));
        articlePreview.appendChild(createPar(`Date: ${date}`));
        articlePreview.appendChild(createPar(`Calories: ${calories}`));

        liPreview.appendChild(articlePreview);

        const divButtons = document.createElement('div');
        divButtons.className = 'btn-container';

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', edit);
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'next-btn';
        nextBtn.textContent = 'Next';
        nextBtn.addEventListener('click', createTableActivities);

        divButtons.appendChild(editBtn);
        divButtons.appendChild(nextBtn);

        liPreview.appendChild(divButtons);

        previewActivity.appendChild(liPreview);
      }

      function edit(){
        addBtn.disabled = false;

        typeActivityInput.value = typeActivity;
        intensityInput.value = intensity;
        caloriesInput.value = calories;
        durationInput.value = duration;
        dateInput.value = date;

        previewActivity.innerHTML = '';
    }

    function createTableActivities(){
      
      const tr = document.createElement('tr');

      tr.appendChild(createTd('type-cell', typeActivity));
      tr.appendChild(createTd('duration-cell', duration));
      tr.appendChild(createTd('calories-cell', calories));
      tr.appendChild(createTd('date-cell', date));
      tr.appendChild(createTd('intensity-cell', intensity));

      const tdButton = document.createElement('td');
      tdButton.className = 'btn-cell';

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
        tr.remove();
      });

      tdButton.appendChild(deleteBtn);
      tr.appendChild(tdButton);

      activityTable.appendChild(tr);

      //clear previewActivity
      previewActivity.innerHTML = '';

      //enable again add button
      addBtn.disabled = false;
    }

    function createPar(element){
      const par = document.createElement('p');
      par.textContent = element;
      return par;
    }

    function createTd(className, content){
      const td = document.createElement('td');
      td.className = className;
      td.textContent = content;
      return td;
    }
}
