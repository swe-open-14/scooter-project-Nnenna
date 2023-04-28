const User = require('../src/User.js')

// User tests here
describe('User', () => {
    let user0;
    let username;
    let password;
    let age;

    beforeEach(() => {
        username = 'OnlyNne';
        password = 'PaNdAsRuLe@'
        age = 24
        user0 = new User(username, password, age);
    });
// test username
// test password
// test age
    describe('User Constructor', () => {
        test('set properties', () => {
          expect(user0.username).toBe(username);
          expect(user0.password).toBe(password);
          expect(user0.age).toBe(age);
        });
    });

         
// test login
    describe('User Methods', () => {
        test('should successfully login with correct password', () => {
            user0.login('PaNdAsRuLe@');
            expect(user0.loggedIn).toBe(true);
    });

        test('should throw error message with wrong password', () => {
            expect(() => user0.login('Snails123!')).toThrow('Incorrect Password');
            expect(user0.loggedIn).toBe(false);
        })

// test logout  
        test('should logout successfully', () => {
            user0.login(password);
            user0.logout();
            expect(user0.loggedIn).toBe(false)
        });
});
});





