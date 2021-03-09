class Cat {
    age = 3;
    constructor(initialAge) {
        if (initialAge < 0) {
            this.age = 0
            console.log("Age is not valid, setting age to 0.");
        } else {
            this.age = initialAge
        }
        console.log("siema");
    }
    meowNTimes(factor = 1) {
        console.log("meow ".repeat(factor));
    }
    yearPasses() {
        this.age++
    }
}


const murczyx = new Cat(4) // 4 to jest initialAge kota
const wuzekSportowy = new Cat(-2)

console.log(murczyx);
console.log(murczyx.age);
murczyx.meowNTimes(14);
murczyx.meowNTimes();

console.log(wuzekSportowy);  

console.log(murczyx.age);
console.log(wuzekSportowy.age);
murczyx.yearPasses(); // wywoływane tylko dla murczyxa!!! 
console.log(wuzekSportowy.age);
console.log(murczyx.age);
wuzekSportowy.yearPasses(); 
murczyx.yearPasses();
console.log(wuzekSportowy.age);
console.log(murczyx.age);
