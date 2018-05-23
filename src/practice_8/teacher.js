import Person from "../../src/practice_8/person.js";
function Teacher(id,name,age,klass){
    Person.call(this,id,name,age);
    this.klass = klass;
    var a = this.introduce();
    this.introduce = function(){
        if(this.klass)
            return a + " I am a Teacher. I teach "+this.klass.getDisplayName()+".";
        else
            return a + " I am a Teacher. I teach No Class.";
    }
    
}
module.exports = Teacher
