class ReversePromise {
    constructor(executor) {
        this.queue = []
        executor.call(null, this.orResolve.bind(this))
    }

    orResolve(data) {
        setTimeout(() => {
            let reversedQueue = this.queue.reverse()
            reversedQueue.forEach(callback => {
                data = callback(data)
            })
        }, 0)
    }

    then(fn) {
        this.queue.push(fn)
        return this
    }
}

let promiseReversed = new ReversePromise((resolve) => {
    console.log(1);
    resolve();
})
    .then(() => console.log(2))
    .then(() => console.log(3))
    .then(() => console.log(4))