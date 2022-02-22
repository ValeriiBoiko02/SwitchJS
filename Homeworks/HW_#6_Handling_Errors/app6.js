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
        alert("Invalid data: " + err.message);
}

// Check error for name
try {
    let user = readUser('{ "name": "Jon" }');
} catch (err) {
        alert("Invalid data: " + err.message);
}