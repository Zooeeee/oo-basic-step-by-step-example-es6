function Class(number){
    this.number = number;
    this.getDisplayName = q => "Class "+this.number;
    
    this.assignLeader = function (student){
        if(student.klass == this)
            this.leader = student ;
            if(this.teacher)
            console.log("I am "+this.teacher.name+". I know "+student.name+" become Leader of "+this.getDisplayName()+".")
        else 
            console.log("It is not one of us.")

    }
    this.appendMember = function(student){
        student.klass = this;
        if(this.teacher)
        console.log("I am "+this.teacher.name+". I know "+student.name+" has joined "+this.getDisplayName()+".")
    }
    this.registerAssignLeaderListener=function(teacher){
        this.teacher = teacher;
    }

    this.registerJoinListener = function(teacher){
        this.teacher = teacher;
    }
}
module.exports = Class;

