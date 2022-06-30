import { SolarCar } from "../src/solarCar";

describe("SolarCar class", () => {
    test("team property is set from constructor parameter", () => {
        const teamName = new SolarCar('Rams');
        expect(teamName.team).toBe('Rams');
    });

    test("speed property stars at 0", () => {
        const teamSpeed = new SolarCar("Rams");
        expect(teamSpeed.speed).toBe(0);
    });

    test("calling accelerate once brings speed to 1", () => {
        const newSpeed = new SolarCar('Rams');
        newSpeed.accelerate();
        expect(newSpeed.speed).toBe(1);
    });

    test("calling accelerate twice brings speed to 2", () => {
        const newSpeed = new SolarCar('Rams');
        newSpeed.accelerate();
        newSpeed.accelerate();
        expect(newSpeed.speed).toBe(2);
    });

    test("isFuelEmpty method returns false", () => {
        const isFuelEmptyResult = new SolarCar('Rams');
        isFuelEmptyResult.isFuelEmpty();
        expect(isFuelEmptyResult.isFuelEmpty()).toBe(false);
    });
})