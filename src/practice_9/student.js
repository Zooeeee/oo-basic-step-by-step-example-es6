import Person from "../../src/practice_9/person.js";
function Student(id,name,age,klass){
    Person.call(this,id,name,age);
    this.klass = klass;
    var a = this.introduce();
    this.introduce = function(){
    if(this.klass.leader == this)
    return a+ " I am a Student. I am Leader of "+this.klass.getDisplayName()+".";
    else 
    return a +" I am a Student. I am at "+this.klass.getDisplayName()+"."
    }
}
module.exports = Student;


