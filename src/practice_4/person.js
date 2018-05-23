function Person(name,age){
    this.name = name;
    this.age = age ;
    this.basic_introduce= function(){
        return "My name is "+name+". I am "+age+" years old."
    }
    this.introduce = this.basic_introduce;
}

module.exports = Person;

