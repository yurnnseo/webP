const studentList=[
    {name:'ksd', age:30, math:85, science: 85},
    {name:'ksd', age:30, math:85, science: 85},
    {name:'ksd', age:30, math:85, science: 85}
];

const plus = (a, b) => a+b;
studentList.forEach(student=>{
    console.log(`${student.name}total : ${plus(student.math, student.science)}`)
});
