function cats(catAsStrings){

    class Cat{
        name;
        age;

        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const catStr of catAsStrings) {
        const tokens = catStr.split(" ");
        const name = tokens[0];
        const age = tokens[1];

        const cat = new Cat(name, age);
        cat.meow();
    }
}
cats(['Mellow 2', 'Tom 5'])