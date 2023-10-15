enum API_STATUS {
  PENDDING,
  FULFILLED = 'FULFILLED asfdasfasf',
  REJECTED = 'FULFILLED', //PROMISE
}

//constant
//java

let a1 = API_STATUS.PENDDING;
let a2 = API_STATUS.FULFILLED;
let a3 =API_STATUS.REJECTED;

//frontend : syntax
console.log('>>> a1 = ', a1, ' a2 = ', a2);

// $ ts-node index.ts
// >>> a1 =  0  a2 =  FULFILLED asfdasfasf
