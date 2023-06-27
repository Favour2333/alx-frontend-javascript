function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulating an API request
    setTimeout(() => {
      const response = {
        status: 200,
        body: 'photo-profile-1',
      };

      resolve(response);
    }, 2000);
  });
}

export default getResponseFromAPI;
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

