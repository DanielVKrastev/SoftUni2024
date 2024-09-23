let counter = 0;
function sayHello() {
    counter++;

    alert(`You clicked the button ${counter} times.`); 
    const input = confirm('oke');

    console.log('The user sait:' + input ? 'Yes' : 'No');
}