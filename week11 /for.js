const userList = [{name:'ksd', age:31, score:85},
    {name:'kjh', age:13, score:95},
    {name:'pch', age:35, score:76}
];

for(const user of userList){
    console.log('user : ', user);
}

userList.forEach(function(user){
    console.log(user);
});
userList.forEach(user=>console.log(user));
