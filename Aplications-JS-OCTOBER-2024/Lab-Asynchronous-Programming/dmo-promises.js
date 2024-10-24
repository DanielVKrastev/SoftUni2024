function proposal() {
    const promise = new Promise((resolve, reject) => {
        console.log('Will you marry me?');
        
        setTimeout(() => {
            if(Math.random() < 0.5){
                resolve('Just married!');
            }else{
                reject("It's not you, it's me!");
            }
        }, 3650);
    });

    return promise;
}


const promise = proposal();
//console.log(promise);

//vseki promise trqbva da bude CATCH
/*promise
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });*/

// Promise.all
const firstProposal = proposal();
const secondProposal = proposal();
const thirdProposal = proposal();
const fourProposal = proposal();


const groupProposal = Promise.all([
    firstProposal,
    secondProposal,
    thirdProposal,
    fourProposal
]);

groupProposal
    .then((results) => console.log(results))
    .catch((errs) => console.log(errs))
    .finally(() => console.log('I da padnem i da biem...')
    )



//Always resolve......
/*
const groupProposal = Promise.allSettled([
    firstProposal,
    secondProposal,
    thirdProposal,
    fourProposal
])

groupProposal
    .then((results) => console.log(results))
    */
