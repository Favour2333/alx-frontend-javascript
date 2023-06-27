function handleResponseFromAPI(promise) {
  return promise
    .then(function(response) {
      return {
        status: 200,
        body: 'success'
      };
    })
    .catch(function(error) {
      return new Error();
    });
}
promise.then(
    response => {
      console.log("Got a response from the API");
      return {
        status: 200,
        body: "success"
      };
    },
    error => {
      console.log("Got an error from the API");
      return {
        status: 500,
        body: "error"
      };
    }
  );
}
