import Person from "../../src/practice_4/person.js";
function Worker(name,age){
    Person.call(this,name,age);
    var a = this.basic_introduce();
    this.introduce = b=>a+" I am a Worker. I have a job."
    
}
module.exports = Worker
