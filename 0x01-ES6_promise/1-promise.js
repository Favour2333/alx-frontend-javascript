function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const response = {
        status: 200,
        body: 'Success',
      };

      resolve(response);
    } else {
      const errorMessage = 'The fake API is not working currently';
      reject(new Error(errorMessage));
    }
  });
}

export default getFullResponseFromAPI;
import getFullResponseFromAPI from './1-promise.js';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));
Promise { { status: 200, body: 'Success' } }
Promise { <rejected> Error: The fake API is not working currently }

