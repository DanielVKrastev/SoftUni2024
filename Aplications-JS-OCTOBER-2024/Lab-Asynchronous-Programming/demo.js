// Synchronous code -> line run
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// Asynchronous code
// 1.Callbacks, 2.Promises /2015/, 3.Async Functions /2017/
// code work in 1 thread /JS/


// addeventListener - callback

console.log('Before');
setTimeout(() => {
    console.log('Middle1');
}, 2000);
console.log('After');
setTimeout(() => {
    console.log('Middle2');
}, 1000);
