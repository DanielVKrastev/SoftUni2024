window.addEventListener('load', solve);

function solve() {
    // Before: initial event listener and panel references
    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', readInput);

    //card panel
    const preview = document.querySelector('.class-info');
    const confirmPanel = document.querySelector('.confirm-class');

    //input fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const contactInput = document.getElementById('contact-number');
    const classTypeInput = document.getElementById('class-type');
    const timeInput = document.getElementById('class-time');

    let name;
    let email;
    let contactue;
    let classType;
    let time;

    // Task 1: Collect form information and create Preview
    function readInput(event){
        // prevent form submission
        // read input values
        // validate
        // create DOM elements for preview pane
        event.preventDefault();

        name = nameInput.value;
        email = emailInput.value;
        contact = contactInput.value;
        classType = classTypeInput.value;
        time = timeInput.value;

        if(name == '' || email == '' || contact == '' || classType == '' || time == '') return;

        //clear inputs
        nextBtn.disabled = true;
        nameInput.value = ''; 
        emailInput.value = '';  
        contactInput.value = ''; 
        classTypeInput.value = '';  
        timeInput.value = ''; 
 
        createPreview(name, email, contact, classType, time);

        
    }

    function createPreview(name, email, contact, classType, time){
        const element = document.createElement('li'); 
        element.className = 'info-item';
        const article = document.createElement('article');
        article.className = 'personal-info';

        article.appendChild(createPara(name));
        article.appendChild(createPara(email));
        article.appendChild(createPara(contact));
        article.appendChild(createPara(classType));
        article.appendChild(createPara(time));
        element.appendChild(article);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.className = 'edit-btn';
        editBtn.addEventListener('click', edit);

        const continueBtn = document.createElement('button');
        continueBtn.textContent = 'Continue';
        continueBtn.className = 'continue-btn';
        continueBtn.addEventListener('click', continueWithPreview);

        element.appendChild(editBtn);
        element.appendChild(continueBtn);

        preview.appendChild(element);
    }

    // Task 2: Return preview for editing
    function edit(){
        nextBtn.disabled = false;
        nameInput.value = name;
        emailInput.value = email;
        contactInput.value = contact;
        classTypeInput.value = classType;
        timeInput.value = time;

        preview.innerHTML = '';
    }

    // Task 3: Continue with Preview and create Confirmation
    function continueWithPreview(){
        const element = preview.querySelector('li');
        element.className = 'continue-info';
        confirmPanel.appendChild(element);

        element.querySelector('.edit-btn').remove();
        element.querySelector('.continue-btn').remove();

        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.className = 'cancel-btn';
        cancelBtn.addEventListener('click', cancel);

        const confirmBtn = document.createElement('button');
        confirmBtn.textContent = 'Confirm';
        confirmBtn.className = 'confirm-btn';
        confirmBtn.addEventListener('click', confirmAction);

        element.appendChild(cancelBtn);
        element.appendChild(confirmBtn);
    }

    // Task 4: Final confirm or cancel class
    function cancel(){
        nextBtn.disabled = false;
        confirmPanel.innerHTML = '';
    }

    function confirmAction(){
        document.querySelector('#main').remove();

        const thankYou = document.createElement('h1');
        thankYou.id = 'thank-you';
        thankYou.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!";

        const doneBtn = document.createElement('button');
        doneBtn.id = 'done-btn';
        doneBtn.textContent = 'Done';

        doneBtn.addEventListener('click', () => {
            window.location = window.location;
        });

        document.body.appendChild(thankYou);
        document.body.appendChild(doneBtn);
    }

    function createPara(content){
        const p = document.createElement('p');
        p.textContent = content;
        return p;
    }

}




