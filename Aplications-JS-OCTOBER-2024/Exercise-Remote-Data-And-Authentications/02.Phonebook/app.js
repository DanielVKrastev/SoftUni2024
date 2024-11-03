function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/phonebook';

    const ul = document.getElementById('phonebook');
    const loadButton = document.getElementById('btnLoad');
    const createButton = document.getElementById('btnCreate');

    const person = document.getElementById('person');
    const phone = document.getElementById('phone');

    loadButton.addEventListener('click', onClickLoad);
    createButton.addEventListener('click', onClickCreate);

    async function onClickLoad() {
        //clear
        ul.innerHTML = '';

        const response = await fetch(url);
        const data = await response.json();

        Object.values(data).forEach( e => {
            
            const {person, phone, _id} = e;

            const li = createEl('li', `${person}: ${phone}`, ul);
            li.setAttribute('id', _id);

            const delButton = createEl('button', 'Delete', li);
            delButton.setAttribute('id', 'delButton');

            delButton.addEventListener('click', OnClickDelete);
            
        } );
    }
    
    async function onClickCreate(){

        if(person.value !== '' && phone.value !== ''){

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({person: person.value, phone: phone.value})
            });
            
            loadButton.click();
            person.value = '';
            phone.value = '';

        }
    }

    async function OnClickDelete(ev){

        const id = ev.target.parentNode.id;
        ev.target.parentNode.remove();

        const deleteResponse = await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
        

    }


    function createEl(type, text, appender){

        const result = document.createElement(type);

        result.textContent = text;

        appender.appendChild(result);

        return result;
    }
}

attachEvents();