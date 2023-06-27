function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Your API logic goes here
    // For demonstration purposes, let's assume a successful API response
    const response = {
      status: 200,
      body: 'API response data',
    };

    // Resolve the Promise with the response
    resolve(response);

    // Reject the Promise if there's an error
    // reject(new Error('API request failed'));
  });
}

