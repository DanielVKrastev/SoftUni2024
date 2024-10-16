window.addEventListener('load', solve);

function solve() {
    //initial next button
    const nextBtn = document.querySelector('#next-btn');
    nextBtn.addEventListener('click', readInput);

    //data panels
    const vacationInfo = document.querySelector('.info-list');
    const confirmVacation = document.querySelector('.confirm-list');

    //input fields
    const firstNameInput = document.querySelector('#first-name');
    const lastNameInput = document.querySelector('#last-name');
    const fromDateInput = document.querySelector('#from-date');
    const toDateInput = document.querySelector('#to-date');

    let firstName = '';
    let lastName = '';
    let fromDate = '';
    let toDate = '';

    function readInput(element){
        element.preventDefault();

        firstName = firstNameInput.value;
        lastName = lastNameInput.value;
        fromDate = new Date(fromDateInput.value);
        toDate = new Date(toDateInput.value);

        if(firstName === '' || lastName === '' || !fromDateInput.value || !toDateInput.value) return;

        if(fromDate > toDate){
            return;
        }
        
        //clear inputs
        nextBtn.disabled = true;
        firstNameInput.value = '';
        lastNameInput.value = '';
        fromDateInput.value = '';
        toDateInput.value = '';

        createVacationInfo();
    }

    function createVacationInfo(){
        console.log(firstName);
        
        const li = document.createElement('li');
        li.className = 'vacation-content';

        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = `Name: ${firstName} ${lastName}`;

        article.appendChild(h3);
        article.appendChild(createPar(`From date: ${fromDate.toISOString().split('T')[0]}`));
        article.appendChild(createPar(`To date: ${toDate.toISOString().split('T')[0]}`));

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', edit);
    
        const continueBtn = document.createElement('button');
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';
        continueBtn.addEventListener('click', createConfirmVacation);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        vacationInfo.appendChild(li);
        

    }

    function edit(){
        nextBtn.disabled = false;
        firstNameInput.value = firstName;
        lastNameInput.value = lastName;
        fromDateInput.value = fromDate.toISOString().split('T')[0];
        toDateInput.value = toDate.toISOString().split('T')[0];

        vacationInfo.innerHTML = '';
    }

    function createConfirmVacation(){
        const li = vacationInfo.querySelector('li');
        li.querySelector('.edit-btn').remove();
        li.querySelector('.continue-btn').remove();

        const h1Text = document.querySelector('#status');

        const confirmBtn = document.createElement('button');
        confirmBtn.className = 'confirm-btn';
        confirmBtn.textContent = 'Confirm';
        confirmBtn.addEventListener('click', () => {
            nextBtn.disabled = false;
            li.remove();
            h1Text.className = 'vacation-confirmed';
            h1Text.textContent = 'Vacation Requested';
        })

        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'cancel-btn';
        cancelBtn.textContent = 'Cancel';
        cancelBtn.addEventListener('click', () => {
            nextBtn.disabled = false;
            li.remove();
            h1Text.className = 'vacation-cancelled';
            h1Text.textContent = 'Cancelled Vacation';
        })

        li.appendChild(confirmBtn);
        li.appendChild(cancelBtn);

        confirmVacation.appendChild(li);

        h1Text.addEventListener('click', () => {
            window.location.reload();
        })
        
    }

    function createPar(element){
        const par = document.createElement('p');
        par.textContent = element;
        return par;
    }
}


    
    
