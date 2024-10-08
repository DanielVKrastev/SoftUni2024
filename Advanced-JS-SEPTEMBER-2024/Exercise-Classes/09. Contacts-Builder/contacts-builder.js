class Contact{
    constructor(firstName, lastName, phone, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    render(id){
        const targetElement = document.querySelector('#' + id)

        const articleTemplate = document.querySelector('#' + id + ' article');

        const newContact = articleTemplate.cloneNode(true);

        const titleEl = newContact.querySelector('.title');
        const infoEl = newContact.querySelector('.info');
        
        titleEl.innerHTML = titleEl.innerHTML.replace('{firstName lastName}', `${this.firstName} ${this.lastName}`);
        infoEl.innerHTML = infoEl.innerHTML.replace('{phone}', `${this.phone}`);
        infoEl.innerHTML = infoEl.innerHTML.replace('{email}', `${this.email}`);
        
        newContact.setAttribute('data-identify', `${this.firstName.toLowerCase()}-${this.lastName.toLowerCase()}-${this.email.toLowerCase()}`);
        newContact.style.display = 'block';
        infoEl.style.display = 'none'
        
        const toggleEl = newContact.querySelector('.title button');
        toggleEl.addEventListener('click', (e) => {
             infoEl.style.display = (infoEl.style.display == 'block') ? 'none' : 'block';
        });

        targetElement.append(newContact);
        
    }

    get online(){
        return this._online;
    }

    set online(state){
        this._online = state;

        const contact = document.querySelector('[data-identify="' + `${this.firstName.toLowerCase()}-${this.lastName.toLowerCase()}-${this.email.toLowerCase()}` + '"]');

        if(state){
            contact.querySelector('.title ').classList.add('online');
            // console.log(contact);
        }else{
            contact.querySelector('.title ').classList.remove('online');
        }
        
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  contacts.forEach(c => c.render('main'));
  
  // After 1 second, change the online status to true
  setTimeout(() => contacts[1].online = true, 2000);
  setTimeout(() => contacts[1].online = false, 5000);
  