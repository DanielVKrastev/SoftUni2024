export function renderNavigation(){
    const email = localStorage.getItem('email');
    const accessToken = localStorage.getItem('accessToken');

    const userNavWelcome = document.querySelectorAll('.navbar-nav .user')[0];
    const userWelcomeA = userNavWelcome.querySelector('#welcome-msg');
    const userNavLogout = document.querySelectorAll('.navbar-nav .user')[1];

    const guestNavLogin = document.querySelectorAll('.navbar-nav .guest')[0];
    const guestNavRegister = document.querySelectorAll('.navbar-nav .guest')[1];

    if(email && email !== 'undefined' && accessToken) {
        userNavWelcome.style.display = 'inline-block';
        userWelcomeA.textContent = `Welcome, ${email}`;
        userNavLogout.style.display = 'inline';

        guestNavLogin.style.display = 'none';
        guestNavRegister.style.display = 'none';
    }else{
        userNavWelcome.style.display = 'none';
        userWelcomeA.textContent = `Welcome, email`;
        userNavLogout.style.display = 'none';

        guestNavLogin.style.display = 'inline';
        guestNavRegister.style.display = 'inline';
    }
    
}