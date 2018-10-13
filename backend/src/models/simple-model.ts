/**
 * Simple model class
 */
export class SimpleHello {
    greeting: string;

    constructor(title: string) {
        this.greeting = title;
    }
}

export type SimpleHelloType = {
    greeting: string;
};

export class WorkHello {
    working: number;

    constructor(workLevel: number) {
        this.working = workLevel;
    }
}
