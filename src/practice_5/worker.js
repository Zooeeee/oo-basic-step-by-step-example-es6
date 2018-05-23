import Person from "../../src/practice_5/person.js";
function Worker(name,age){
    Person.call(this,name,age);
    var a = this.introduce();
    this.introduce = function()
    { return a+" I am a Teacher. I have a job."
    }
}
module.exports = Worker;
