export function renderNavigation(){
    const email = localStorage.getItem('email');

    const userNav = document.getElementById('user');
    const guestNav = document.getElementById('guest');
    const parWelcome = document.querySelector('nav .email span')

    if(email && email !== 'undefined'){
        userNav.style.display = 'inline';
        guestNav.style.display = 'none';
        parWelcome.textContent = email;
    }else{
        userNav.style.display = 'none';
        guestNav.style.display = 'inline';
        parWelcome.style.display = 'guest';
    }
}