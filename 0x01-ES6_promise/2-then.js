function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => new Error());
}

export default handleResponseFromAPI;
import handleResponseFromAPI from './utils.js';

const promise = // your promise here

handleResponseFromAPI(promise)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

