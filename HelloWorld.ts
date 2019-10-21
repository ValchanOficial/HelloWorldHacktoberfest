class HelloWorld {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    greet(): string {
        return this.greeting;
    }
}

let greeter = new HelloWorld('Hello, world!!!');
console.log(greeter.greet());