window.addEventListener("load", solve);

function solve() {
    //initial publish button
    const publishBtn = document.querySelector('#form-btn');
    publishBtn.addEventListener('click', readInput);

    //data panels
    const previewList = document.querySelector('#preview-list');

    //input fields
    const firstNameInput = document.querySelector('#first-name');
    const lastNameInput = document.querySelector('#last-name');
    const ageInput = document.querySelector('#age');
    const storyTitleInput = document.querySelector('#story-title');
    const genreInput = document.querySelector('#genre');
    const storyTextInput = document.querySelector('#story');

    let firstName = '';
    let lastName = '';
    let age = '';
    let storyTitle = '';
    let genre = '';
    let storyText = '';

    function readInput(event){
      event.preventDefault();

      firstName = firstNameInput.value;
      lastName = lastNameInput.value;
      age = ageInput.value;
      storyTitle = storyTitleInput.value;
      genre = genreInput.value;
      storyText = storyTextInput.value;

      if(firstName == '' || lastName == '' || age == '' || storyTitle == '' || genre == '' || storyText == ''){
        return;
      }

     publishBtn.disabled = true;

    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    storyTitleInput.value = '';
    storyTextInput.value = '';
      
    createPublish();
    }

    function createPublish(){
      const li = document.createElement('li');
      li.className = 'story-info';
      const article = document.createElement('article');
      const h4 = document.createElement('h4');
      h4.textContent = `Name: ${firstName} ${lastName}`;

      article.appendChild(h4);
      article.appendChild(createPar(`Age: ${age}`));
      article.appendChild(createPar(`Title: ${storyTitle}`));
      article.appendChild(createPar(`Genre: ${genre}`));
      article.appendChild(createPar(`${storyText}`));

      li.appendChild(article);

      const saveBtn =  document.createElement('button');
      saveBtn.className = 'save-btn';
      saveBtn.textContent = 'Save Story';
      saveBtn.addEventListener('click', save);

      const editBtn =  document.createElement('button');
      editBtn.className = 'edit-btn';
      editBtn.textContent = 'Edit Story';
      editBtn.addEventListener('click', edit);

      const deleteBtn =  document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = 'Delete Story';
      deleteBtn.addEventListener('click', () => {
        previewList.innerHTML = '<h3>Preview</h3>';
        publishBtn.disabled = false;
      });

      li.appendChild(saveBtn);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);

      previewList.appendChild(li);

    }

    function edit(){
      publishBtn.disabled = false;

      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      ageInput.value = age;
      genreInput.value = genre;
      storyTitleInput.value = storyTitle;
      storyTextInput.value = storyText;

      previewList.innerHTML = '<h3>Preview</h3>';
  }

  function save(){
    const divMain = document.getElementById('main');
    divMain.innerHTML = '';

    const h1 = document.createElement('h1');
    h1.textContent = 'Your scary story is saved!';

    divMain.appendChild(h1);
  }

    function createPar(element){
      const par = document.createElement('p');
      par.textContent = element;
      return par;
  }
}
