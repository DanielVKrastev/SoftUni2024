const form = document.querySelector('form');
const active = document.querySelectorAll("a").forEach(el => {
    el.classList.remove('active')
    document.querySelector('#register').classList.add('active')
});
const userData = JSON.parse(sessionStorage.getItem('dataUser'));

if (userData !== null && userData.accessToken) {
    document.getElementById('guest').style.display = 'none';
    document.getElementById('user').style.display = 'inline-block';
  } else {
    document.getElementById('guest').style.display = 'inline-block';
    document.getElementById('user').style.display = 'none';
  }


form.addEventListener('submit', onCheck)


function onCheck(e){
    e.preventDefault();
        const formData = new FormData(e.target);
        onRegister([...formData.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {}));
}
   async function onRegister(info) {

  
    const url = 'http://localhost:3030/users/register'
    const body = {
        email: info.email,
        password: info.password,
    }
    try {
        if (info.email == '' || info.password == '' || info.rePass == '') {
            throw new Error('All fields are required!');
          }
      
          if (info.password !== info.rePass) {
            throw new Error('Passwords don\'t match');

          }
      
        const response = await fetch(url, {
            method: 'POST',
            headers: {
             'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)

        })

        const data = await response.json()
    
        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
          }
      
        sessionStorage.setItem("dataUser", JSON.stringify({
            email: data.email,
            accessToken: data.accessToken,
            id: data._id

        }))
      window.location ='index.html'

    } catch (e) {
        document.querySelector('p.notification').textContent = e.message
         form.reset()
     
    }

}
