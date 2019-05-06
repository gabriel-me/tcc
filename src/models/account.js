class Account {
  constructor() {
    this.firebase = require('firebase');
  }

  createAccount(email, password) {
    return new Promise((resolve, reject) => {
      this.firebase.database().ref('users/').child(email).set({
        password: password
      }).then(() => {
        resolve('success');
      }).catch(err => {
        reject(err);
      });
    });
  }
}

module.exports = new Account();