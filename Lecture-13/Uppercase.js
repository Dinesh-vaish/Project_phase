const names =["gagan", "ishan", "ogesh"];
const name = names.map(name=>name.toUpperCase());
console.log(name);



//Qustions Extrat product name 
// const products = [
//     {id:1, name="Laptop"},
//     {id:2, name="phone"},
//     {id:3, name="Tablet"}
// ];
// const q2arr= prosucts.map(product=>product.name);
// console.log(name);



//Qustions Filter long Words
// const words = ["apple", "banana", "cat", "elephant", "dog"];

// const q3=words.filter(function(words))
// {
//     return words.length >5;
// }
// const w = words.filter((w)=>w.length >5);
// console.log(w);


// filter Adults  keep only  user aged  18 or avove 
const users =[{name: "A", age:16}, {name: "B", age:22}, {name: "C", age:19}];
const q4 =users.filter(function(user)
{
    return user.age>=18;
})
console.log(q4);

//second methord 
const q4arr=users.filter(age=> age.age>18);
console.log(q4arr);



//find total charter all string
const words =["hello", "words","javaScript"];
//fuctions throught
const q5 = words.reduce((total, word)=>total +=word.length,0);
console.log(q5);
const q5demo = words.reduce((join,word)=> join +=word);
console.log(q5demo);


// Get Squares of Even
const num1 =[1,2,3,4,5,6,7,8];
const q6 = num1.filter(function (num)
{
    return num%2==0;
}).map(function (num){
  return num*num;
})
console.log(q6);

//total salary of employees
 const employees=[{name:"A", salary: 3000}, {name:"B", salary: 50000}, {name:"C", salary:70000}];
 const q7 = employees.reduce(function(total,e){
    return total +=e.salary;
 },0)
  

 const q7arr=employees.reduce((total,e)=> total+=e.salary,0);
 console.log(q7arr);
 console.log(q7);

 // names Of Passed Student 
 //Qustions pass maks =40

 const students =[{name:"A", marks:35}, {name:"B", marks:75},{name:"C", marks:45},{name:"D",marks:25}];
 const q8 = students.filter(function(Student)
{
    return Student.marks > 40;
}).map(function(name){
    return name.name;
})

//second 
const q8arr=students.filter(mark=>mark.marks>40).map(name=>name.name);
console.log(q8arr);
console.log(q8);


// //avarage marks of student 
// const marks1= [80,90,70,60];
// const q9= marks1.reduce(function(total),n)
// {
//     return
// }



// count 
const fruits=["apple", "banana", "apple", "orange", "banana", "apple"];
const q10 =  fruits.reduce(function (occ,fruit)
{
    occ[fruit]=(occ[fruit]||0)+1;
    return occ;
},{});

// const q10arr=fruits.reduce((occ,fruits)=>{(occ[fruit]=(occ)[fruit]||0),fruit})
console.log(q10);

//top performinng student 

 const students2=[{name:"Lufiya", marks:[80,90,85]},{name:"Yukiya", marks:[80, 70, 88]}, {name:"naman",marks:[80,70,65]}];
// const q11 =students2.map(function(s){
//     return{
//         name:s.name,
//     avg : s.marks.reduce(function (total,marks) {
//         return total +=marks;
        
// },0)/s.marks.length,
//     }
// }).filter((a)=>{
//    return a.avg>=85;
// })
// console.log(q11);




const q11arr=(students2.map((s)=>{
    return {
        name:s.name,
        avg:s.marks.reduce((total,m)=>{
             return total +m;

        },0) /s.marks.length
    };
})).filter(s=>s.avg>=85)
.sort((a,b)=>b.avg-a.avg)
.map(s=>s.name);
console.log(q11arr);


//qustions groupo productions by category 

const product1 =[{name:"Laptop",category:"Electeonics"},{ name:"phone",category:"Electronics"},{name:"shirt",category:Clothing}];
const q12 = product.reduce(function(group,p)
{
    if(!group[product.category])
    {
        group[product.category]=[];

    }
    group[product.category].push(product.name);``
    return group;
},{});
console.log(q12);