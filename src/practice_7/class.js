function Class(number){
    this.number = number;
    this.getDisplayName = ()=> "Class "+this.number;
}
module.exports = Class;