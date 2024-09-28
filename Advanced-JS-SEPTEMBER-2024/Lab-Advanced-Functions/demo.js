function logThis(msg){
    console.log(msg, this);
    
}

logThis('global')

const myObj= {
    count: 5,
    logThis
}

myObj.logThis('object method')

document.querySelector('button').addEventListener('click', logThis)

console.log(logThis);

const person = {
    name: 'peter',
    age: 31
}

logThis.call(person, 'vie call')