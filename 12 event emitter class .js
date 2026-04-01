const EventEmitter = require('events');

const chatEmitter = new EventEmitter();

chatEmitter.on('User Joined', (username, userId) => {
    console.log(`${username} (ID: ${userId}) has joined the chat.`);
});

chatEmitter.emit('User Joined', 'Yaseen', 42);
