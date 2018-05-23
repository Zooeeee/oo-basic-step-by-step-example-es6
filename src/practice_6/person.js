function Person(name,age){
    this.name = name;
    this.age = age;
    this.introduce = ()=>
     "My name is "+name+". I am "+age+" years old."
}
module.exports = Person;
