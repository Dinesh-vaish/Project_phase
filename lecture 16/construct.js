class student{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
}


let s1 = new student("kapil",20);
let s2 = new student("gaurav",21);
let s3 = new student("rishabh",34);
console.log(s1);
console.log(s2);
console.log(s3);
s1.study();
class Animal{
    eat(){
        console.log("Eating ");
    }
    sleep(){
        console.log("slleping");
    }
}
class Dog extends Animal{
    break(){
        console.log("breaking");
    }
}
dog.eat();
dog.sleep();
dog.break();
