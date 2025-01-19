const readline = require("readline");
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};
// Set up readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Ask for fruit selection
const askFruit = () => {
  rl.question(`Choose a fruit (${stocks.Fruits.join(", ")}): `, (fruit) => {
    if (stocks.Fruits.includes(fruit.toLowerCase())) {
      askHolder(fruit);
    } else {
      console.log("Invalid fruit selection. Please try again.");
      askFruit();
    }
  });
};
// Ask for holder selection
const askHolder = (fruit) => {
  rl.question(`Choose a holder (${stocks.holder.join(", ")}): `, (holder) => {
    if (stocks.holder.includes(holder.toLowerCase())) {
      askTopping(fruit, holder);
    } else {
      console.log("Invalid holder selection. Please try again.");
      askHolder(fruit);
    }
  });
};
// Ask for topping selection
const askTopping = (fruit, holder) => {
  rl.question(
    `Choose a topping (${stocks.toppings.join(", ")}): `,
    (topping) => {
      if (stocks.toppings.includes(topping.toLowerCase())) {
        production(fruit, holder, topping);
      } else {
        console.log("Invalid topping selection. Please try again.");
        askTopping(fruit, holder);
      }
    }
  );
};
// Ice cream production process
const production = (fruit_name, holder_name, topping_name) => {
  console.log(`${fruit_name} was selected`);
  console.log("Production has started");

  setTimeout(() => {
    console.log(`The ${fruit_name} fruit has been chopped`);
    setTimeout(() => {
      console.log("Water and ice added");
      setTimeout(() => {
        console.log("Start the machine");
        setTimeout(() => {
          console.log(`Ice cream placed on ${holder_name}`);
          setTimeout(() => {
            console.log(`${topping_name} as toppings`);
            setTimeout(() => {
              console.log("Serve Ice Cream");
              rl.close(); // Close readline after completion
            }, 2000); // Serve ice cream after 2 seconds
          }, 3000); // Add topping after 3 seconds
        }, 2000); // Place ice cream after 2 seconds
      }, 2000); // Start machine after 2 seconds
    }, 1000); // Add liquid after 1 second
  }, 1000); // Chop fruit after 1 second
};
// Start the process
askFruit();
