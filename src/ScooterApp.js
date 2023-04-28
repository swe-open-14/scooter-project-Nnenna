const User = require('./User.js')
const Scooter = require('./Scooter.js')

class ScooterApp {
  constructor(){
    this.stations = {
      "Docking St A": [],
      "Docking St B": [],
      "Docking St C": [],
      "Docking St D": []
    };
    this.registeredUsers = {};
  }

  registerUser(username, password, age){
    if(this.registeredUsers[username]){
      throw new Error('Username in use');
    }else if(age < 18){
      throw new Error('Must be over 18')
    }else{
      const user00 = new User(username, password, age)
      this.registeredUsers[username] = user00;
      console.log(`Account for ${username} has been created`)
      return user00
    }
 }

 

}

module.exports = ScooterApp
