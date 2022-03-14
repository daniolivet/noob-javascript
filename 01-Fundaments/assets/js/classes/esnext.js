class Test {

    #area = 0;

    constructor(base = 0, height = 0) {
        this.base   = base;
        this.height = height;

        this.#area   = base * height;
    }

}

const test = new Test(10, 15);
console.log(test);