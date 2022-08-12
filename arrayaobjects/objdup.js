const users =[{id:1,name:"om"},{id:1,name:"om"},{id:2,name:"kiran"},{id:2,name:"kiran"},{id:3,name:"kiran"}]
let result = {};

for(let i = 0; i < users.length; ++i)
    result[users[i].name] = users[i];

result = Object.values(result);
console.log(result);
