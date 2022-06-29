import { GasCar } from "../src/gasCar";

describe("GasCar class", () => {
    test("team and fuel properties are set from constructor parameters", () => {
        const newTeam = new GasCar("Ian", 30);
        expect(newTeam.team).toBe("Ian");
        expect(newTeam.fuel).toBe(30);
    });

    test("fuel defaults to 10 when second param isnt used", () => {
        const newTeam = new GasCar("Ian");
        expect(newTeam.team).toBe("Ian");
        expect(newTeam.fuel).toBe(10);
    });

    test("speed starts at 0", () => {
        const newTeam = new GasCar("Ian");
        expect(newTeam.speed).toBe(0);
    });

    test("calling accelerate once brings speed to 2", () => {
        const newTeam = new GasCar("Ian");
        newTeam.accelerate();
        expect(newTeam.speed).toBe(2);
    });

    test("calling accelerate twice brings speed to 4", () => {
        const newTeam = new GasCar("Ian");
        newTeam.accelerate();
        newTeam.accelerate();
        expect(newTeam.speed).toBe(4);
    });

    test("calling accelerate once reduces fuel by 1", () => {
        const newTeam = new GasCar("Ian");
        newTeam.accelerate();
        expect(newTeam.fuel).toBe(9);
    });

    test("calling accelerate twice reduces fuel by 2", () => {
        const newTeam = new GasCar("Ian");
        newTeam.accelerate();
        newTeam.accelerate();
        expect(newTeam.fuel).toBe(8);
    });

    test("isFuelEmpty returns true when fuel is 0", () => {
        const newTeam = new GasCar("Ian", 0);
        expect(newTeam.isFuelEmpty()).toBe(true);
    });

    test("isFuelEmpty returns false when fuel is greater than 0", () => {
        const newTeam = new GasCar("Ian");
        expect(newTeam.isFuelEmpty()).toBe(false);
    });
})