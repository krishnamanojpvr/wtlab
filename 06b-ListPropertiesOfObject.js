// 6b. 
// Write a JavaScript program to list the properties of a JavaScript object. 
function listProperties(obj) {
  return Object.keys(obj);
}
let sampleObject = { name: "John", age: 30, city: "New York" };
console.log("The list properties are : " + listProperties(sampleObject));
