// 19. 
// Write a JavaScript program that simulates a food delivery process using asynchronous functions. The 
// program should: 
// 1. Simulate placing an order with a delay of 1 second. 
// 2. Simulate preparing food with a delay of 3 seconds. 
// 3. Simulate packaging the food and delivering it concurrently, where packaging takes 1 second and 
// delivery takes 2 seconds. 
// 4. Log messages at each step to indicate the progress of the food delivery process.



const placeOrder = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order placed.");
      resolve();
    }, 1000); // 1 second delay
  });
};

const prepareFood = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Food prepared.");
      resolve();
    }, 3000); // 3 seconds delay
  });
};

const deliverFood = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Food delivered.");
      resolve();
    }, 2000); // 2 seconds delay
  });
};

const packageFood = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Food packaged.");
      resolve();
    }, 1000); // 1 second delay
  });
};

const startFoodDeliveryProcess = async () => {
  try {
    // Step 1: Place the order
    await placeOrder();

    // Step 2: Prepare the food
    await prepareFood();

    // Step 3: Start both packaging and delivery concurrently
    await Promise.all([packageFood(), deliverFood()]);

    console.log("Food delivery process complete.");
  } catch (error) {
    console.log("Error during the food delivery process:", error);
  }
};

startFoodDeliveryProcess();
