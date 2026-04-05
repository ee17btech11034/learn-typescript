function greet(name){ // here we are expecting name as a string, so we can greet
    return ("Hello "+ name)
}

console.log(greet("Raj")); // is valid as input is string

console.log(greet(42)); // it will run and won't throw an error. this should be an error or should atleast tell user that we expect a string. 

