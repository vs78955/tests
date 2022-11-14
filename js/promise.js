/*
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");
*/

/*
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");
*/

/*
console.log("start");

setTimeout(() => {
  console.log("setTimeout");
});

Promise.resolve().then(() => {
  console.log("resolve");
});

console.log("end");
*/

/*
async function fun() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000);
  });

  let result = await promise;

  console.log(result);

  console.log("123");
}

fun();
*/
