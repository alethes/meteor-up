var path = require('path');
var privateKey = path.join(__dirname, 'id_rsa');

// remove these two lines after adding required server information
const msg = 'Please fill ./tests/server.example.js and rename it to servers.js';
throw new Error(msg);

module.exports = {
  mymeteor: {
    host: '1.2.3.4',
    user: 'username',
    pem: privateKey,
  },
  mymongo: {
    host: '1.2.3.4',
    user: 'username',
    pem: privateKey,
  },
  myproxy: {
    host: '1.2.3.4',
    user: 'username',
    pass: 'password',
  },
};
