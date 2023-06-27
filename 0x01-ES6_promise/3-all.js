import uploadPhoto from './utils.js';
import createUser from './utils.js';
function handleProfileSignup() {
  const [photo, firstName, lastName] = await Promise.all([
    uploadPhoto(),
    createUser(),
  ]);
  console.log(`${firstName} ${lastName}`);
}
