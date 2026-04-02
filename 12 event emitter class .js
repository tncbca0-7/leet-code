const Eventemitter= require('events');
const chatEmitter= new Eventemitter();
chatEmitter.on('user joined',(username,userid)=>{
    console.log(`${username}(ID:${userid})has joined the chat.`);
});
chatEmitter.emit('user joined','aziz',46);

