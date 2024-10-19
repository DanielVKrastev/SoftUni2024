window.addEventListener("load", solve);

function solve() {
  const addBtn = document.querySelector('.add-btn');
  addBtn.addEventListener('click', readInput);

  //card panel
  const snowmanPreview = document.querySelector('.snowman-preview');
  const snowList = document.querySelector('.snow-list');

  //input fields
  const nameInput = document.getElementById('snowman-name');
  const heightInput = document.getElementById('snowman-height');
  const locationtInput = document.getElementById('location');
  const creatorNameInput = document.getElementById('creator-name');
  const specialAttrInput = document.getElementById('special-attribute');

  let name;
  let height;
  let location;
  let creatorName;
  let specialAttr;

  function readInput(event){
    event.preventDefault();

    name = nameInput.value;
    height = heightInput.value;
    location = locationtInput.value;
    creatorName = creatorNameInput.value;
    specialAttr = specialAttrInput.value;

    if(name == '' || height == ''  || location == '' || creatorName == '' || specialAttr == '' ) return;

    //clear inputs
    nameInput.value = ''; 
    heightInput.value = ''; 
    locationtInput.value = ''; 
    creatorNameInput.value = ''; 
    specialAttrInput.value = '';

    addBtn.disabled = true;

    createSnowManPreview();
  }

  function createSnowManPreview(){
    const li = document.createElement('li');
    li.className = 'snowman-info';

    const article = document.createElement('article');
    article.appendChild(createPar(`Name: ${name}`));
    article.appendChild(createPar(`Height: ${height}`));
    article.appendChild(createPar(`Location: ${location}`));
    article.appendChild(createPar(`Creator: ${creatorName}`));
    article.appendChild(createPar(`Attribute: ${specialAttr}`));

    const btnDiv = document.createElement('div');
    btnDiv.className = 'btn-container';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', edit);

    const nextBtn = document.createElement('button');
    nextBtn.className = 'next-btn';
    nextBtn.textContent = 'Next';
    nextBtn.addEventListener('click', createSnowList);

    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(nextBtn);

    li.appendChild(article);
    li.appendChild(btnDiv);

    snowmanPreview.appendChild(li);
  }

  function edit(){
    nameInput.value = name; 
    heightInput.value = height; 
    locationtInput.value = location; 
    creatorNameInput.value = creatorName; 
    specialAttrInput.value = specialAttr;

    addBtn.disabled = false;

    snowmanPreview.innerHTML = '';
  }

  function createSnowList(){
    snowmanPreview.innerHTML = '';

    const li = document.createElement('li');
    li.className = 'snowman-content';

    const article = document.createElement('article');
    article.appendChild(createPar(`Name: ${name}`));
    article.appendChild(createPar(`Height: ${height}`));
    article.appendChild(createPar(`Location: ${location}`));
    article.appendChild(createPar(`Creator: ${creatorName}`));
    article.appendChild(createPar(`Attribute: ${specialAttr}`));

    const sendBtn = document.createElement('button');
    sendBtn.className = 'send-btn';
    sendBtn.textContent = 'Send';
    sendBtn.addEventListener('click', sendList);

    article.appendChild(sendBtn);
    li.appendChild(article);
    

    snowList.appendChild(li);

  }

  function sendList(){

    const main = document.getElementById('hero');
    main.remove();

    const addBtn = document.createElement('button');
    addBtn.className = 'back-btn';
    addBtn.textContent = 'Back';
    addBtn.addEventListener('click', () => {
      window.location = window.location;
    });

    document.getElementById('back-img').removeAttribute("hidden");

    document.body.appendChild(addBtn);
  }

  function createPar(content){
    const par = document.createElement('p');
    par.textContent = content;
    return par;
  }
}
