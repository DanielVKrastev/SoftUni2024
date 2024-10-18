window.addEventListener("load", solve);

function solve() {
    //initial next button
    const purchaseBtn = document.querySelector('#purchase-btn');
    purchaseBtn.addEventListener('click', readInput);

    //data panels
    const previewPanel = document.querySelector('#ticket-preview');
    const purchasePanel = document.querySelector('#ticket-purchase');

    //input fields
    const numTicketsInput = document.querySelector('#num-tickets');
    const seatInput = document.querySelector('#seating-preference');
    const nameInput = document.querySelector('#full-name');
    const emailInput = document.querySelector('#email');
    const telephoneInput = document.querySelector('#phone-number');

    let numTickets = '';
    let seat = '';
    let name = '';
    let email = '';
    let telephone = '';

    function readInput(){

        numTickets = numTicketsInput.value;
        seat = seatInput.value;
        name = nameInput.value;
        email = emailInput.value;
        telephone = telephoneInput.value;

        
        if(numTickets == '' || seat == '' || name == '' || email == '' || telephone == '' || seat == 'seating-preference'){
            return;
        }
        
        purchaseBtn.disabled = true;
        
        numTicketsInput.value = '';
        seatInput.value = '';
        nameInput.value = '';
        emailInput.value = '';
        telephoneInput.value = '';
        
        createPreview();
    }

    function createPreview(){
        const li = document.createElement('li');
        li.className = 'ticket-purchase';

        const article = document.createElement('article');

        article.appendChild(createPar(`Count: ${numTickets}`));
        article.appendChild(createPar(`Preference: ${seat}`));
        article.appendChild(createPar(`To: ${name}`));
        article.appendChild(createPar(`Email: ${email}`));
        article.appendChild(createPar(`Phone Number: ${telephone}`));

        const divBtns = document.createElement('div');
        divBtns.className = 'btn-container';

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', edit);
    
        const nextBtn = document.createElement('button');
        nextBtn.className = 'next-btn';
        nextBtn.textContent = 'Next';
        nextBtn.addEventListener('click', createPurchase);

        divBtns.appendChild(editBtn);
        divBtns.appendChild(nextBtn);

        li.appendChild(article);
        li.appendChild(divBtns);

        previewPanel.appendChild(li);
    }

    function edit(){
        purchaseBtn.disabled = false;

        numTicketsInput.value = numTickets;
        seatInput.value = seat;
        nameInput.value = name;
        emailInput.value = email;
        telephoneInput.value = telephone;

        previewPanel.innerHTML = '';
    }

    function createPurchase(){
        const li = previewPanel.querySelector('.ticket-purchase');
        
        const article = li.querySelector('article');
        li.querySelector('.btn-container').remove();

        const buyBtn = document.createElement('button');
        buyBtn.className = 'buy-btn';
        buyBtn.textContent = 'Buy';
        buyBtn.addEventListener('click', thankYou);

        article.appendChild(buyBtn);

        purchasePanel.appendChild(li);

    }

    function thankYou(){
        purchasePanel.innerHTML = '';

        const content = document.querySelector('.bottom-content');
        const h2 = document.createElement('h2');
        h2.textContent = "Thank you for your purchase!";
        const backBtn = document.createElement('button');
        backBtn.className = 'back-btn';
        backBtn.textContent = 'Back';
        backBtn.addEventListener('click', () => {
            h2.remove();
            backBtn.remove();

            purchaseBtn.disabled = false;
        })

        content.appendChild(h2);
        content.appendChild(backBtn);

    }

    function createPar(element){
        const par = document.createElement('p');
        par.textContent = element;
        return par;
      }
}
