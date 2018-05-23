import Person from "../../src/practice_6/person.js";
function Teacher(name,age,klass){
    Person.call(this,name,age);
    this.klass = klass;
    var a = this.introduce();
    this.introduce = function()
    {   if(this.klass)
            return a+" I am a Teacher. I teach Class "+this.klass+".";  
        else 
            return a+" I am a Teacher. I teach No Class.";
      
    }
}
module.exports = Teacher;
