async function solution() {
    
    const main = document.getElementById('main');
    const url = `http://localhost:3030/jsonstore/advanced/articles/list`;

    const response = await fetch(url);
    const data = await response.json();
    
    data.forEach(topick => {
        let divAccordion = createElem('div', '', ['class', 'accordion']);
        let divHead = createElem('div', '', ['class', 'head']);
        let span = createElem('span', topick.title);
        let button = createElem('button','More',['class', 'button', 'id', topick._id]);

        let divExtra = createElem('div', '', ['class', 'extra']);
        let par = createElem('p');

        button.addEventListener('click', toggle);

        divHead.appendChild(span);
        divHead.appendChild(button);
        divExtra.appendChild(par);
        divAccordion.appendChild(divHead);
        divAccordion.appendChild(divExtra);
        main.appendChild(divAccordion);


    });

    async function toggle(event){
        
        const accordion = event.target.parentNode.parentNode;
        const p = accordion.querySelector('.extra p');
        const extra = accordion.querySelector('.extra');

        const id = event.target.id;

        const url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

        const response = await fetch(url);
        const data = await response.json();

        p.textContent = data.content;

        const hidden = event.target.textContent === 'More';

        extra.style.display = hidden ? 'block' : 'none';
        event.target.textContent = hidden ? 'Less' : 'More';
        
    }


    function createElem(type, content, attributes = []){
        const element = document.createElement(type);

        if(content){
            element.textContent = content;
        }

        if(attributes.length > 0){
            for(let i = 0; i < attributes.length; i+=2){
                element.setAttribute(attributes[i],attributes[i+1]);
            }
        }

        return element;
    }
    
}
window.addEventListener('load', solution);