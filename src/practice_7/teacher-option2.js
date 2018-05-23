import Person from "../../src/practice_7/person.js";
function Teacher(name,age,klass){
    Person.call(this,name,age);
    this.klass = klass;
    var a = this.introduce();
    this.introduce = function(){
        if(this.klass)
            return a + " I am a Teacher. I teach "+this.klass.getDisplayName()+".";
        else
            return a + " I am a Teacher. I teach No Class.";
    }
    this.introduceWith = function(studentJerry){
       if(this.klass.number == studentJerry.klass.number)
       return a + " I am a Teacher. I teach "+studentJerry.name+"."
       else
       return a + " I am a Teacher. I don't teach "+studentJerry.name+"."
    }
}
module.exports = Teacher
