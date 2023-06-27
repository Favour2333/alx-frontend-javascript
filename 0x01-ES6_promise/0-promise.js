function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an API call or asynchronous operation
    setTimeout(() => {
      const response = "Sample response from API";
      resolve(response);
    }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
  });
}

// Testing the function
const response = getResponseFromAPI();
console.log(response instanceof Promise);

