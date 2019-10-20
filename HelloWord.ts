class HelloWord {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    greet(): string {
        return this.greeting;
    }
}

let greeter = new HelloWord("Hello, world!");
console.log(greeter.greet());