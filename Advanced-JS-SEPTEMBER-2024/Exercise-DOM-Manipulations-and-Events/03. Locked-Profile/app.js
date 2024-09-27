function lockedProfile() {
    /*NEW */
    document.querySelector('main').addEventListener('click', (e) => {
        if(e.target.nodeName == 'BUTTON'){
            clickEventHandler(e);
    }
});

    /*OLD ****************************************************/
   /* [...document.querySelectorAll('button')].forEach(button => {
        button.addEventListener('click', clickEventHandler);
    })*/

    function clickEventHandler(e){

        const profile = e.target.closest('.profile');
        const state = profile.querySelector('input[type="radio"]:checked').value;

       // console.log(state);
        
        if(state == 'unlock'){
            const hiddenFieldEl = profile.querySelector('[id*="HiddenFields"]');

            if(hiddenFieldEl.style.display == 'block'){
                hiddenFieldEl.style.display = 'none';
                e.target.textContent = 'Show more';
            }else{
                hiddenFieldEl.style.display = 'block';
                e.target.textContent = 'Hide it';
            }
        }

    }
    
}