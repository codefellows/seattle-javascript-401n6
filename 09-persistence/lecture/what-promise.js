class MyPromise {
  // accepts a function of 2 parameters TREES DONT EXIST
  // JWAY 4 lyfe
  constructor(func) {
    func(this.resolve, this.reject);
  }

  resolve(result) {
    this.cb(result)
  }

  reject() {

  }

  then(cb) {
    this.cb = cb;
    return new MyPromise();
  }

  catch() {

  }
}


// creating a promise and using resolve passes
// the value as a parameter to then
new Promise((resolve, reject) => {
  resolve(1);
})
.then((n) => {
  console.log('t1:', typeof n);
  console.log(' 1:', n);
  // returning a value from a then() passes the
  // value as a parameter to the next then()
  return 2;
 })
.then((n) => {
  console.log('t2:', typeof n);
  console.log(' 2:', n);
  return 3;
 })
.then((n) => {
  console.log('t3:', typeof n);
  console.log(' 3:', n);
  return new Promise((resolve, reject) => { resolve(4) }) 
 })
.then((n) => {
  console.log('t4:', typeof n);
  console.log(' 4:', n);
})

