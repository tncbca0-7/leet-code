const e=new(require('events'))();
e.on('User Joined',(u,i)=>console.log(`${u} (ID:${i}) has  joined the chat`));
e.emit('User Joined','abdul aziz',46);
