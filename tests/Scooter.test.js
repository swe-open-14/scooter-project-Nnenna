const Scooter = require('../src/Scooter.js')
const User = require('../src/User.js')

//typeof scooter === object
describe('Scooter', () => {
  let scooter0;
  let user;
  let station;

  beforeEach(() => {
    user = {};
    station = "Baltimore Station A";
    scooter0 = new Scooter(station);
  });


  describe('scooter constructor', () => {
    test('set properties', () => {
      expect(scooter0.station).toBe(station);
      expect(scooter0.user).toBe(null);
      expect(scooter0.charge).toBe(100);
      expect(scooter0.isBroken).toBe(false);
    }); 

    test('should increment serial number for each new scooter created', () => {
      const scooter1 = new Scooter(station);
      expect(scooter1.serial).toBe(scooter1.serial++);
    });
  });

         //Method tests
  describe('scooter methods', () => {
  //rent method
    test('should rent out scooter if it has enough charge and is not damaged', () => {
      scooter0.rent(user);
      expect(scooter0.station).toBe(null)
      expect(scooter0.user).toBe(user)    
    });
    test('should return an error if scooter is damaged or low battery', () => {
      scooter0.charge = 19;
      scooter0.isBroken = false;
      expect(() => {
        scooter0.rent(user)
      }).toThrow('Scooter Unavailable: charge and/or repair.')

      scooter0.charge = 100;
      scooter0.isBroken = true;
      expect(() => {
        scooter0.rent(user)
      }).toThrow('Scooter Unavailable: charge and/or repair.')
    });
  //dock method
    test('should allow a user to dock the scooter at a station', () => {
      scooter0.user = user;
      scooter0.dock(station);
      expect(scooter0.station).toBe(station);
      expect(scooter0.user).toBe(null)
    })

  //requestRepair method

  //charge method
});
});
