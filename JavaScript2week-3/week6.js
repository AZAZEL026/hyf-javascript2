function doIt() {
    console.log('I am done');
  }
  setTimeout(doIt, 5000);
  
//1
  function foo(func) {
    // What to do here? 
    func();
  }
  function bar() {
    console.log('Hello, I am bar!');
  }
  foo(bar);
  // 2
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    // make array
    let arr = [];
    // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
    for (let i = startIndex; i <= stopIndex; i++) {
      arr.push(i);
    }
    arr.forEach(num => {
      if (num % 3 === 0) {
        threeCallback(num);
      }
      if (num % 5 === 0) {
        fiveCallback(num);
      }
    })
  }
  // Closure
function say(divisitor) {
  return function(num) {
    console.log(`${num} is divisible by ${divisitor}`);
  }
}

threeFive(10, 15, say(3), say(5));

// 3
// WHILE loop
function repeat(str, num) {
  let blank = '';
    while (num > 0) {
      blank += str;
      num--;
    }   
  return console.log(blank);
}
repeat("abc", 3);

// FOR loop
function repeat(str, num) {
  let blank = '';
    for (let i = 0; i < num; i++) {
      blank += str;
    }   
  return console.log(blank);
}
repeat("abc", 2);

// DO  loop
function repeat(str, num) {
  let blank = '';
    do {
      blank += str;
      num--;
    }
    while (num > 0);
  return console.log(blank);
}
repeat("abc", 1);

// 6
let arr3d = [[[1, 'a'], [2, 'b'], [3, 'c']]];
function printarr3d(arg) {
  if(Array.isArray(arg)) {
    arg.forEach(elementent => printarr3d(elementent));
  } else {
    console.log(arg);
  }
}
printarr3d(arr3d);

// 7
let x = 9;
function f1(val) { 
  val = val + 1; 
  return val;
}
f1(x);
console.log(x); // function f1 doesn't modify the value of variable x:x is passed by value


let y = {x: 9};
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y); // function f2 modifies the value of property y.x: y is passed by reference
// 8
function createBase(num1) {
  return function(num2) {
    return num1 + num2;
  }
}
let addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));

// 9
let arr = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
let array = arr.filter((element, index) => { return  arr.indexOf(element) === index });
array.forEach(element => console.log(element));
