function Person(id,name,age){
    this.id = id;
    this.name = name;
    this.age = age;
    this.introduce = ()=>
     "My name is "+name+". I am "+age+" years old."
}
module.exports = Person;