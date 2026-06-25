class Employee{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    work(){
        console.log(`${this.name} is currently working`)
    }
    showDetails(){
        console.log(`Employee ID: ${this.id}`);
        console.log(`Employee Name: ${this.name}`);

    }
}
const employee=new Employee(123,"sunil thakare");
employee.work();
employee.showDetails();







//qustions 2 
class Devloper extends Employee{
    constructor(id,name,language){
        super(id,name);
        this.language = language;
    }
    writeCode(){
        console.log(`${this.name} is writing the code in ${this.language}`);
    }
    work(){
        console.log(`${this.name} is building feature using ${this.language}`);
    }
}
const devloper=new Devloper(102,"mahesh shisodiya","Rubby");

devloper.showDetails();
devloper.writeCode();
devloper.work();



//qustions 3
class FrontendDeveloper extends Devloper {
    constructor(id, name, language, framework) {
        super(id, name, language); 
        this.framework = framework;
    }

    buildUI() {
        console.log(`${this.name} is building the user interface using ${this.framework}.`);
    }

    work() {
        console.log(`${this.name} is creating frontend components with ${this.framework} and ${this.language}.`);
    }
}
const frontendDev = new FrontendDeveloper(105, "Amit Sharma", "JavaScript", "React");

frontendDev.showDetails(); 
frontendDev.writeCode();  
frontendDev.buildUI();    
frontendDev.work(); 

//qustions 4

class Manager extends Employee {
    constructor(id, name, teamSize) {
        super(id, name);
        this.teamSize = teamSize;
    }
    conductMeeting() {
        console.log(`${this.name} is conducting a meeting with their team of ${this.teamSize} employees.`);
    }
    work() {
        console.log(`${this.name} is managing project timelines and coordinating with the team.`);
    }
}
