const Scooter = require('../src/Scooter.js')
const User = require('../src/User.js')
const ScooterApp = require('../src/ScooterApp.js')

// ScooterApp tests here
describe('Scooter App', () => {
    let scooterApp0;
    
    beforeEach(() => {
        scooterApp0 = new ScooterApp();
    });
// register user
    describe('registerUser', () => {
        test('should register a new user', () => {
            const user = scooterApp0.registerUser('OnlyNne', 'PaNdAsRuLe@', 24);
            expect(user).toBeInstanceOf(User);
            expect(scooterApp0.registeredUsers).toHaveProperty('OnlyNne', 'PaNdAsRuLe@', 24)
        });
//        test();
//        test();
    })
// log in
//    describe('loginUser', () => {
//        test();
//        test();
//    });
// log out
//    describe('logoutUser', () => {
//        test();
//        test();
//    })

//    describe('createScooter', () => {
//        test();
//        test();
//    })
    
//    describe('dockScooter', () => {
//        test();
//    })
})






// rent scooter

// dock scooter
