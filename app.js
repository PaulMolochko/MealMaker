const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
        },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(appetizer) {
        this._courses.appetizers = appetizer;
    },
    get mains() {
        return this._courses.mains;
    },
    set mains(main) {
        this._courses.mains = main;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(dessert) {
        this._courses.desserts = dessert;
    },
    get courses(){
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        };
    },
    addDishToCourse (courseName, name, price) {
        const dish = {
            name: name,
            price: price,
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse (courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random()*dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;      
    }
};

menu.addDishToCourse('appetizers','Ceasar Salad', 4.25);
menu.addDishToCourse('appetizers','Garlic Toast with Avocado', 2);
menu.addDishToCourse('appetizers','Eggs Benedict with Salmon', 5.75);

menu.addDishToCourse('mains','Spaghetti Carbonara', 6);
menu.addDishToCourse('mains','Margharita Pizza', 8);
menu.addDishToCourse('mains','Lasagna', 6.5);

menu.addDishToCourse('desserts','Chocolate Gelato', 4.5);
menu.addDishToCourse('desserts','Sweet Corn Pana Cotta', 4.5);
menu.addDishToCourse('desserts','Tiramisu', 4.5);

const meal = menu.generateRandomMeal();
console.log(meal);