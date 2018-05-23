function Class(number){
    this.number = number;
    this.getDisplayName = q => "Class "+this.number;
    this.assignLeader = function (student){
        if(student.klass == this)
        this.leader = student ;
        else 
        console.log("It is not one of us.")
    }
    this.appendMember = function(student){
        student.klass = this;
    }
    
}
module.exports = Class;