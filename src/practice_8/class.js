function Class(number){
    this.number = number;
    this.getDisplayName = q => "Class "+this.number;
    this.assignLeader = function (student){
        if(student.klass == this)
        this.leader = student ;
    }
}
module.exports = Class