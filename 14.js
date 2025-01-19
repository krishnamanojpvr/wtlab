let library = [
  {
    title: "The Great Gatsby",
    author: "Francis Scott Fitzgerald",
    libraryId: 1,
  },
  {
    title: "The Catcher in the Rye",
    author: "J. D. Salinger",
    libraryId: 2,
  },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck, Robert DeMott",
    libraryId: 3,
  },
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryId: 4,
  },
  {
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    libraryId: 5,
  },
  {
    title: "Of Mice and Men",
    author: "John Steinbeck",
    libraryId: 6,
  },
  {
    title: "A Song of Ice and Fire",
    author: "R. R. Martin",
    libraryId: 7,
  },
];
let readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let libraryId;
readline.question("", function (line) {
  libraryId = parseInt(line);
  solution(libraryId);
  readline.close();
});
function solution(libraryId) {
  // Find the book with the matching libraryId
  let book = library.find((item) => item.libraryId === libraryId);
  if (book) {
    // If book exists, print the details
    console.log(
      `Book with libraryId ${libraryId} : '${book.title}' by '${book.author}' is available.`
    );
  } else {
    // If book does not exist, print not available message
    console.log(`Sorry! Book with libraryId ${libraryId} is not available.`);
  }
}
