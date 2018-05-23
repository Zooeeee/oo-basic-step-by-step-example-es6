import Person from "../../src/practice_10/person.js";
function Teacher(id,name,age,klasses){
    Person.call(this,id,name,age);
    this.klasses = klasses;
    var a = this.introduce();
    this.introduce = function(){
        if(this.klasses)
       { var b = "";
        b =  this.klasses[0].number;
        for(var i = 1 ; i < this.klasses.length;i++)
           b =b + ", " + this.klasses[i].number;
        return a+" I am a Teacher. I teach Class "+b+".";
    }
    else
            return a + " I am a Teacher. I teach No Class.";
    }
	this.isTeaching = function(student){
        for(var i = 0 ; i < this.klasses.length ; i++){
            if (student.klass.number === this.klasses[i].number)
            return true;
        }
        return false;
    }
    
}
module.exports = Teacher
