import { GasCar } from "./gasCar";
import { Racer } from "./racer";

export function findRacersWithEmptyFuel (racers: Racer[]) {
    const newRacers: Racer[] = [];
    racers.filter((racer: Racer) => {
        if (racer.isFuelEmpty() === true) {
            newRacers.push(racer);
        };
    });
    return newRacers;
};

export function findAverageSpeed (racers: Racer[]) {
    if (!racers.length) return 0;

    let count = 0;
    racers.forEach((racer: Racer) => {
        count += racer.speed;
    });
    let averageSpeed = count / racers.length;

    return averageSpeed;
};

export function getFasterRacer (racerA: Racer, racerB: Racer) {
    return racerA.speed === racerB.speed ? null:
        racerA.speed > racerB.speed ? racerA : racerB;
};