export class User {
    public name: string;
    public age: number;
    public weight: number;
    public height: number;
    public BMI: number;

    constructor(name: string, age: number, weight: number, height: number, BMI: number) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.BMI = BMI;
    }
}
