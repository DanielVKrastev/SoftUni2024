function toggle() {
    const buttonEl = document.querySelector('.button');
    const extraEl = document.querySelector('#extra');

    const initialDisplay = extraEl.style.display;
    console.log(buttonEl.textContent);

    /*
    if(buttonEl.textContent == 'More'){
        extraEl.style.display = 'block';
        buttonEl.textContent = 'Less'
    }else if(buttonEl.textContent == 'Less'){
        extraEl.style.display = 'none';
        buttonEl.textContent = 'More'
    }*/

        if(initialDisplay == 'block'){
            extraEl.style.display = 'none'
            buttonEl.textContent = 'More'
        }else{
            extraEl.style.display = 'block';
            buttonEl.textContent = 'Less'
        }
    
}