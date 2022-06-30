import { findAverageSpeed, findRacersWithEmptyFuel, getFasterRacer } from "../src/racer-functions";
import { GasCar } from "../src/gasCar";
import { SolarCar } from "../src/solarCar";
import { Racer } from "../src/racer";

describe("findRacersWithEmptyFuel function", () => {
    test("array of GasCar, some have no fuel", () => {
        const gasCar1 = new GasCar('Ian', 0);
        const gasCar2 = new GasCar('Mitch');

        const racersArray: GasCar[] = [gasCar1, gasCar2];
        const result = findRacersWithEmptyFuel(racersArray);

        expect(result).toEqual([
            {team: 'Ian', fuel: 0, speed: 0}
        ]);
    });

    test("array of GasCar, all have no fuel", () => {
        const gasCar1 = new GasCar('Ian', 0);
        const gasCar2 = new GasCar('Mitch', 0);

        const racersArray: GasCar[] = [gasCar1, gasCar2];
        const result = findRacersWithEmptyFuel(racersArray);

        expect(result).toEqual([
            {team: 'Ian', fuel: 0, speed: 0},
            {team: 'Mitch', fuel: 0, speed: 0}
        ]);
    });

    test("array of GasCar, all have fuel", () => {
        const gasCar1 = new GasCar('Ian', 20);
        const gasCar2 = new GasCar('Mitch', 10);

        const racersArray: GasCar[] = [gasCar1, gasCar2];
        const result = findRacersWithEmptyFuel(racersArray);

        expect(result).toEqual([]);
    });

    test("array of SolarCar, return should be empty array", () => {
        const solarCar1 = new SolarCar('Ian');
        const solarCar2 = new SolarCar('Mitch');

        const racersArray: SolarCar[] = [solarCar1, solarCar2];
        const result = findRacersWithEmptyFuel(racersArray);

        expect(result).toEqual([]);
    });

    test("array of SolarCar and GasCar", () => {
        const solarCar1 = new SolarCar('Ian');
        const solarCar2 = new SolarCar('Kristina');
        const gasCar1 = new GasCar('Mitch', 20);
        const gasCar2 = new GasCar('Tanner', 0);

        const racersArray = [solarCar1, solarCar2, gasCar1, gasCar2];
        const result = findRacersWithEmptyFuel(racersArray);

        expect(result).toEqual([
            {team: 'Tanner', fuel: 0, speed: 0}
        ]);
    });

    test("empty array, empty result", () => {
        const emptyArray: [] = [];

        const result = findRacersWithEmptyFuel(emptyArray);

        expect(result).toEqual([]);
    });
});


describe("findAverageSpeed function", () => {
    test("array of GasCar, with different speeds", () => {
        const gasCar1 = new GasCar('Ian');
        const gasCar2 = new GasCar('Mitch');
        gasCar1.accelerate();
        gasCar1.accelerate();
        gasCar2.accelerate();

        const racersArray: GasCar[] = [gasCar1, gasCar2];
        const result = findAverageSpeed(racersArray);

        expect(result).toEqual(3);
    });

    test("array mix of GasCar and SolarCar, with different speeds", () => {
        const gasCar1 = new GasCar('Ian');
        const solarCar1 = new SolarCar('Mitch');
        gasCar1.accelerate();
        gasCar1.accelerate();
        solarCar1.accelerate();

        const racersArray = [gasCar1, solarCar1];
        const result = findAverageSpeed(racersArray);

        expect(result).toEqual(2.5);
    });

    test("array of cars that have 0 speed", () => {
        const gasCar1 = new GasCar('Ian');
        const solarCar1 = new SolarCar('Mitch');

        const racersArray = [gasCar1, solarCar1];
        const result = findAverageSpeed(racersArray);

        expect(result).toEqual(0);
    });

    test("empty array", () => {
        const emptyArray: [] = [];

        const result = findAverageSpeed(emptyArray);

        expect(result).toEqual(0);
    });
});


describe("getFasterRacer function", () => {
    test("test with racerA being faster", () => {

        const racerA: Racer = {
            team: 'Ian',
            speed: 20,
            accelerate(){},
            isFuelEmpty() {
              return true  
            },
        };
        const racerB: Racer = {
            team: 'Kristina',
            speed: 10,
            accelerate(){},
            isFuelEmpty() {
              return true  
            },
        };

        let result = getFasterRacer(racerA, racerB);

        expect(result).toBe(racerA);
    });

    test("test with racerB being faster", () => {
        
        const racerA: Racer = {
            team: 'Ian',
            speed: 20,
            accelerate(){},
            isFuelEmpty() {
              return true  
            },
        };
        const racerB: Racer = {
            team: 'Kristina',
            speed: 40,
            accelerate(){},
            isFuelEmpty() {
              return true  
            },
        };

        let result = getFasterRacer(racerA, racerB);

        expect(result).toBe(racerB);
    });

    test("test with both racers the same speed", () => {
        
        const racerA: Racer = {
            team: 'Ian',
            speed: 20,
            accelerate(){},
            isFuelEmpty() {
              return true  
            },
        };
        const racerB: Racer = {
            team: 'Kristina',
            speed: 20,
            accelerate(){},
            isFuelEmpty() {
              return true  
            },
        };

        let result = getFasterRacer(racerA, racerB);

        expect(result).toBe(null);
    });

    test("test with GasCar and SolarCar", () => {
        
        const racerA = new GasCar('Ian');
        racerA.accelerate();
        racerA.accelerate();
        racerA.accelerate();
        const racerB = new SolarCar('Kristina');
        racerB.accelerate();
        racerB.accelerate();
        racerB.accelerate();
        racerB.accelerate();

        let result = getFasterRacer(racerA, racerB);

        expect(result).toBe(racerA);
    });
})