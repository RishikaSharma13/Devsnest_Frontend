// Q1
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(Object.keys(student));

//Q2
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(Object.keys(student));
delete student.rollno;
console.log(Object.keys(student));

//Q3
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log("Length of object is: " + Object.keys(student).length);

//Q4
var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
console.log(Object.values(library));

//Q5
var cylinder = {
  pie: 3.14,
  r: 2,
  h: 1,
  volume: function () {
    let x = this.pie * this.r * this.r * this.h;
    x = x.toFixed(4);
    return x;
  },
};

console.log(cylinder.volume());

//Q6
var library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

function comp(x, y) {
  if (x.libraryID > y.libraryID) return 1;
  else return -1;
}

console.log(library.sort(comp));