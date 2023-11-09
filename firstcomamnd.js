class Animal{
    constructor(name)
    {
        this.name=name;
    }
    speak()
 {
console.log(`${this.name}  Makes a noise.`);
 }
}

var ani = new Animal('dog');
ani.speak();
