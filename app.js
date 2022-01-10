const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
        },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers;
    },
    get mains() {
        return this._courses.mains;
    },
    set mains(mains) {
        this._courses.mains = mains;
    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(desserts) {
        this._courses.desserts = desserts;
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
        const randomIndex = Math.Floor(Math.random()*dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('apetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;      
    }
};

menu.addDishToCourse('apetizers','Ceasar Salad', 4.25);
menu.addDishToCourse('apetizers','Garlic Toast with Avocado', 2);
menu.addDishToCourse('apetizers','Eggs Benedict with Salmon', 5.75);

menu.addDishToCourse('mains','Spaghetti Carbonara', 6);
menu.addDishToCourse('mains','Margharita Pizza', 8);
menu.addDishToCourse('mains','Lasagna', 6.5);

menu.addDishToCourse('desserts','Chocolate Gelato', 4.5);
menu.addDishToCourse('desserts','Sweet Corn Pana Cotta', 4.5);
menu.addDishToCourse('desserts','Tiramisu', 4.5);

const meal = menu.generateRandomMeal();
console.log(meal);