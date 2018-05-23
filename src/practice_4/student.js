import Person from "../../src/practice_4/person.js";
function Student(name,age,klass){
   Person.call(this,name,age);
   this.klass = klass;
   var a = this.basic_introduce();
   this.introduce = function(){
       return a+" I am a Student. I am at Class "+klass+"."
   }
}
module.exports = Student;
