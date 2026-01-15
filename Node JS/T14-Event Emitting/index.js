import { EventEmitter } from "events";

const myEventEmitter = new EventEmitter()

function greetHandler(name) {
    console.log(`Hello ${name}!!!`);
}

function goodByeHandler(name) {
    console.log(`Good Bye ${name}!!!`);
}

// Register Event Listner
myEventEmitter.on('greet', greetHandler)
myEventEmitter.on('goodBye', goodByeHandler)

// Emit Events
myEventEmitter.emit('greet', 'Rushi')
myEventEmitter.emit('goodBye', 'Rushi')

// Error handling
myEventEmitter.on('error', (err) => {
    console.log('An Error occured:', err);
})

// Simulate Error
myEventEmitter.emit('error', new Error("Something went Wrong"))