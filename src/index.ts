function greet(name: string): string {
    return `Hello, ${name}`
}

const username: string = "Raja";
// const username2 = "Raja"; // sometimes automatically typecast kr deta hai 

console.log(greet(username));