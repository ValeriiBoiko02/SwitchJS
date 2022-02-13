class MyPromise {
    constructor(executor) {
        this.queue = []
        executor.call(null, this.orResolve.bind(this))
    }

    orResolve(data) {
        setTimeout(() => {
            this.queue.forEach(callback => {
                data = callback(data)
            })
        }, 0)
    }

    then(fn) {
        this.queue.push(fn)
        return this
    }

    synchThen(fn) {
        fn()
        return this
    }
}

let promise = new MyPromise((resolve) => {
    console.log(1);
    resolve();
}).synchThen(() => {
    console.log(2);
}).then(() => {
    console.log(3);
})
console.log(4)