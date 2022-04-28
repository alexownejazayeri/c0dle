const arr = [1, 2, 3, 4];
const sampleFunc = (arg) => 'this funk: ' + arg;

arr.filter(function (el) {
  el === 2;
  return el;
});

let x;

arr.forEach((el) => (x = el + 2));

const sampleArr = () => {
  if (x) {
    const doStuffIdk = 'omg i did it';
    x = doStuffIdk;
  }
};

sampleFunc('is funky');

function f(x) {
  return x;
}

function doFor() {
  for (var x = 1; x < 10; x++) {
    var y = f(x);
  }
}