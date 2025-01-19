function hasProperty(obj, property) {
  return obj.hasOwnProperty(property);
}
let person = { name: "Alice", age: 25 };
console.log(hasProperty(person, "name"));
console.log(hasProperty(person, "gender"));
