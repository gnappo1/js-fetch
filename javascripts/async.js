console.log("Hi!");

setTimeout(function timeout() {
    console.log("What a nice day!");
}, 2000);

setTimeout(function timeout() {
    console.log("What a bad day!");
}, 1000);

console.log("Bye");


// const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
//     resolutionFunc(777);
//     rejectionFunc(new Error)
// });
// // At this point, "promiseA" is already settled.
// promiseA.then( (val) => console.log("asynchronous logging has val:",val) );
// console.log("immediate logging");
