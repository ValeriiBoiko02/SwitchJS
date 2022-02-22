// My custom error
class MyCustomError extends Error {
    constructor(message) {
        super(message)
        this.name = "MyCustomError"
    }
}
// Function that uses my custom error
function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
        throw new MyCustomError("No field: age");
    }
    if (!user.name) {
        throw new MyCustomError("No field: name");
    }

    return user;
}


// Check error for age
try {
    let user = readUser('{ "age": 25 }');
} catch (err) {
    if (err instanceof MyCustomError) {
        alert("Invalid data: " + err.message);
    } else {
        throw err;
    }
}

// Check error for name
try {
    let user = readUser('{ "name": "Jon" }');
} catch (err) {
    if (err instanceof MyCustomError) {
        alert("Invalid data: " + err.message);
    } else {
        throw err;
    }
}

// Check error for JSON format
try {
    let user = readUser('age: 25 ');
} catch (err) {
    if (err instanceof MyCustomError) {
        alert("Invalid data: " + err.message);
    } else {
        alert(new MyCustomError('JSON problem'))
    }
}