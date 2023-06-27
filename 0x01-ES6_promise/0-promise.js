function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          name: "John Doe",
          age: 30,
        },
      });
    }, 1000);
  });
}
