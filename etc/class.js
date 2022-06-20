// 'use strict';


class Person {

    constructor(name,age){

        this.name = name;
        this.age = age;

    }
    speak(){
       console.log(this.name +" : hello!");
       
        
        
         
    }

}


const hong = new Person('손홍훈',28)
console.log(hong.name);
console.log(hong.age);
hong.speak();

