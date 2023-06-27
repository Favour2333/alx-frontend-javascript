function getResponseFromAPI() {
  return new Promise((resolve) => {
    const response = {
      status: 200,
      body: 'photo-profile-1',
    };
    
    resolve(response);
  });
}

export default getResponseFromAPI;

