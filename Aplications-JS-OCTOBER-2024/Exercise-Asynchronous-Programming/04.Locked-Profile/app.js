async function lockedProfile() {
    const url = `http://localhost:3030/jsonstore/advanced/profiles`;

    const main = document.getElementById('main');
    
    try{
        const res = await fetch(url);

        if(res.status !== 200){
            throw Error('Error');
        }

        const data = await res.json();
        
        const dataProfiles = Object.entries(data);
        for(let i = 0; i < dataProfiles.length; i++){
            const profileData = dataProfiles[i][1];
           // console.log(profileData);
            
            const divProfile = createElem('div', '', ['class', 'profile']);
            const img = createElem('img','',['src','./iconProfile2.png', 'class', 'userIcon']);
            const labelLock = createElem('label','Lock');
            const inputRadioLock = createElem('input','',['type', 'radio', 'name', `user${i}Locked`, 'value', 'lock', 'checked', '']);
            const labelUnlock = createElem('label','Unlock');
            const inputRadioUnlock = createElem('input','',['type', 'radio', 'name', `user${i}Locked`, 'value', 'unlock']);
            const br = createElem('br', '');
            const hr1 = createElem('hr','');
            const labelUsername = createElem('label','Username');
            const inputUsername = createElem('input','',['type', 'text', 'name', `user${i}Username`, 'value', profileData.username]);
            inputUsername.disabled = true;
            inputUsername.setAttribute('readonly', '');

            const divInfo = createElem('div', '', ['id', `user${i}HiddenFields`]);
            const hr2 = createElem('hr','');
            const labelEmail = createElem('label','Email:');
            const inputEmail = createElem('input','',['type', 'email', 'name', `user${i}Email`, 'value', profileData.email]);
            inputEmail.disabled = true;
            inputEmail.setAttribute('readonly', '');

            const labelAge = createElem('label','Age:');
            const inputAge = createElem('input','',['type', 'number', 'name', `user${i}Age`, 'value', profileData.age]);
            inputAge.disabled = true;
            inputAge.setAttribute('readonly', '');

            divInfo.appendChild(hr2);
            divInfo.appendChild(labelEmail);
            divInfo.appendChild(inputEmail);
            divInfo.appendChild(labelAge);
            divInfo.appendChild(inputAge);

            divInfo.style.display = 'none';

            divProfile.appendChild(img);
            divProfile.appendChild(labelLock);
            divProfile.appendChild(inputRadioLock);
            divProfile.appendChild(labelUnlock);
            divProfile.appendChild(inputRadioUnlock);
            divProfile.appendChild(br);
            divProfile.appendChild(hr1);
            divProfile.appendChild(labelUsername);
            divProfile.appendChild(inputUsername);
            divProfile.appendChild(divInfo);

            

            const buttonInfo = createElem('button','Show More');
            buttonInfo.addEventListener('click', clickEventHandler);

            divProfile.appendChild(buttonInfo);

            main.appendChild(divProfile);
        }
    }catch{
        console.error('Error:', error);
    }

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
