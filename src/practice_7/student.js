import Person from "../../src/practice_7/person.js";
function Student(name,age,klass){
    Person.call(this,name,age);
    this.klass = klass;
    var a = this.introduce();
    this.introduce = ()=> a + 
    " I am a Student. I am at "+this.klass.getDisplayName()+"."
}
module.exports = Student;
