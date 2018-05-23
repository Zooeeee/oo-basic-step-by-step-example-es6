import Person from "../../src/practice_6/person.js";
function Student(name,age,klass){
    Person.call(this,name,age);
    this.klass = klass;
    var a = this.introduce();
    this.introduce = function()
    { return a+" I am a Student. I am at Class "+this.klass+"."
    }
}
module.exports = Student;

