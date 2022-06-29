import { Racer } from "./racer";

export class SolarCar {
    team: string;
    speed: number;

    constructor(team: string,) {
        this.team = team;
        this.speed = 0;
    };

    accelerate() {
        this.speed++;
    };
    isFuelEmpty() {
        return false;
    }; 
};
