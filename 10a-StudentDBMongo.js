// 10a. 
// Create a student database in Mongo DB with all the details of students of a class. 

// use school;
//switched to db school and created collection students
db = db.getSiblingDB("school"); // Switch to the 'school' database
db.students.insertMany([
  {
    name: "John Doe",
    age: 20,
    gender: "Male",
    rollNumber: "101",
    subjects: ["Math", "Science", "English"],
    address: {
      street: "123 Main St",
      city: "Anytown",
      zip: "12345",
    },
  },
  {
    name: "Jane Smith",
    age: 19,
    gender: "Female",
    rollNumber: "102",
    subjects: ["Math", "History", "Art"],
    address: {
      street: "456 Maple Ave",
      city: "Othertown",
      zip: "67890",
    },
  },
  {
    name: "Alice Johnson",
    age: 21,
    gender: "Female",
    rollNumber: "103",
    subjects: ["Biology", "Chemistry", "Physics"],
    address: {
      street: "789 Oak Dr",
      city: "Sometown",
      zip: "54321",
    },
  },
]);
