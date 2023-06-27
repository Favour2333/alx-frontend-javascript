function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulating an API call or asynchronous operation
    setTimeout(() => {
      const response = {
        status: 200,
        body: 'Sample response from API'
      };
      resolve(response);
    }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
  });
}

// Testing the function
const responsePromise = getResponseFromAPI();
console.log(responsePromise instanceof Promise);

