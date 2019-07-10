// console.log(__dirname,__filename);

class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and i am ${this.age} old`)
  }
}

//torna acessível para  resto da aplicação
module.exports = Person;