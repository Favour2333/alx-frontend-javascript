function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Perform API request or any asynchronous operation here
    // For demonstration purposes, we'll resolve the promise after a delay of 1 second
    setTimeout(() => {
      resolve("API response");
    }, 1000);
  });
}

export default getResponseFromAPI;
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

