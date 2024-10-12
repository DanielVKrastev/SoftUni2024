window.addEventListener('load', solution);

function solution() {
  // Get all  values from fields

  // Create DOM Structure needed to be added to preview

  // Add element to preview and disable submit button
  // Implement a way to edit values in the form
  // Move element from preview to pending and change buttons
  // Move element from pending to resoved and change buttons
  // Remove element from resolved and enable form submit button
  
  const formEl = document.querySelector('.container-text > form');
  const addBtnEl = document.querySelector('#add-btn');

  const previewListEl = document.querySelector('.preview-list');
  const pendingListEl = document.querySelector('.pending-list');
  const resolveListEl = document.querySelector('.resolved-list');

  const formFieldsPrefix = ['From:', 'Category:', 'Urgency:', 'Assigned to:', 'Description:'];
  const formFields = Array.from(formEl.querySelectorAll('input, select'));

  addBtnEl.addEventListener('click', (e) => {
    e.preventDefault();

    const emptyFieldsCount = formFields.filter((el) => el.value == '');
    //console.log(emptyFieldsCount);
    if(emptyFieldsCount.length > 0) return;

    const problemListEl = document.createElement('li');
    problemListEl.className = 'problem-content';

    const problemElement = document.createElement('article');

    formFields.forEach((field, index) => {
     // console.log(field);
    // console.log(index);
      
      const paragraph = document.createElement('p');
      paragraph.textContent = formFieldsPrefix[index] + ' ' + field.value;
      paragraph.setAttribute('data-value', field.value);
      paragraph.setAttribute('data-field-id', field.getAttribute('id'));
      problemElement.appendChild(paragraph);
    });

    const editBtnEl = document.createElement('button');
    editBtnEl.className = 'edit-btn';
    editBtnEl.textContent = 'Edit';

    const continueBtnEl = document.createElement('button');
    continueBtnEl.className = 'continue-btn';
    continueBtnEl.textContent = 'Continue';

    problemListEl.appendChild(problemElement);
    previewListEl.appendChild(problemListEl);

    problemListEl.appendChild(editBtnEl);
    problemListEl.appendChild(continueBtnEl);

    editBtnEl.addEventListener('click', () => {
      eventHandlerEdit(problemListEl);
    });

    continueBtnEl.addEventListener('click', () => {
      eventHandlerContinue(problemListEl);
    });

    e.target.parentNode.reset();
    e.target.setAttribute('disabled', 'disabled');
    
    
  });

  function eventHandlerEdit(problemListEl) {
    problemListEl.remove();
    Array.from(problemListEl.children[0].children).forEach((entry) => {
      document.querySelector('#' + entry.getAttribute('data-field-id')).value = entry.getAttribute('data-value');
    })
    addBtnEl.removeAttribute('disabled');

    
  }

  function eventHandlerContinue(problemListEl){
    problemListEl.remove();
    problemListEl.querySelector('button').remove();
    problemListEl.querySelector('button').remove();

    const resolvedBtnEl = document.createElement('button');
    resolvedBtnEl.className = 'resolve-btn';
    resolvedBtnEl.textContent = 'Resolved';

    resolvedBtnEl.addEventListener('click', () => {
      eventHandlerResolve(problemListEl);
    });

    problemListEl.appendChild(resolvedBtnEl);
    pendingListEl.appendChild(problemListEl);
  }

  function eventHandlerResolve(problemListEl){
    problemListEl.remove();
    problemListEl.querySelector('button').remove();

    const cleardBtnEl = document.createElement('button');
    cleardBtnEl.className = 'clear-btn';
    cleardBtnEl.textContent = 'Clear';

    cleardBtnEl.addEventListener('click', () => {
      eventHandlerClear(problemListEl);
    });

    problemListEl.appendChild(cleardBtnEl);
    resolveListEl.appendChild(problemListEl);
  }

  function eventHandlerClear(problemListEl){
    problemListEl.remove();
    addBtnEl.removeAttribute('disabled');
  }
  
}

document.querySelector('#employee').value = 'Daniel';
document.querySelector('#category').value = 'Hardware';
document.querySelector('#urgency').value = 'Medium';
document.querySelector('#team').value = 'Hardware Support Division';
document.querySelector('#description').value = 'Its work!';


    
    
