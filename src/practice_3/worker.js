import Person from "../../src/practice_3/person.js";
function Worker(name,age){
    Person.call(this,name,age);
    this.introduce = a=>"I am a Worker. I have a job."
    
}
module.exports = Worker