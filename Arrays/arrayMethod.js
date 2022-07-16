//Push
const friends = ["John", "Jane", "Mark"];
console.log(friends);
friends.push("Mary"); // add a new element to the end of the array
console.log(friends[friends.length - 1]);

//Unshift
friends.unshift("Mike"); //adds to the beginning of the array
console.log(friends);

//Pop
friends.pop(); // removes the last element
friends.pop();
console.log(friends);

//Shift
friends.shift(); // removes the first element
console.log(friends);

//Splice
friends.splice(1, 1); // remove 1 element from index 1
console.log(friends);

//IndexOf
console.log(friends.indexOf("John")); // returns the index of the element

//Includes
console.log(friends.includes("John")); // returns true or false
console.log(friends.includes("hector")); // returns true or false
friends.push("hector");
if (friends.includes("hector")) {
  console.log("hector is a friend");
} else {
  console.log("hector is not a friend");
}
//
