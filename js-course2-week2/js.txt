//1-Odd numbers : 

let numbers = [1, 2, 3, 4,5,6,7,8,9,15,12];

let oddnumbers = numbers.filter(num => num % 2 !== 0).map(num * 2);
   

//printing doubled odd numbers
console.log("The doubled numbers using map are", oddnumbers);




//2 

let monday = [
  { name: 'Write a summary HTML/CSS', duration: 180 },
  { name: 'Some web development', duration: 120 },
  { name: 'Fix homework for class10', duration: 20 },
  { name: 'Talk to a lot of people', duration: 200 }
];


let tuesday = [
  { name: 'Keep writing summary', duration: 240 },
  { name: 'Some more web development', duration : 180 },
  { name: 'Staring out the window', duration: 10 },
  { name: 'Talk to a lot of people', duration: 200 },
  { name: 'Look at application assignments new students', duration: 40 }
];




let task = monday.concat(tuesday);

let taskname = task.map(obj => obj.name);
console.log(taskname);

let convertime = tasks.map(minute => {
    minute.duration /= 60;
    return minute;
});
console.log(convertime);

let timefilter = takehour.filter(take => take.duration<2);
console.log(timefilter);

let biling = timefilter.map(take => take.duration * 8).reduce((x,y) => x+y).toFixes(3);
console.log('spend : ' + biling + '$');