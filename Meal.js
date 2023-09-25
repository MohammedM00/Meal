const thanksgivingMeal = {
    starter: {
        soup: "Butternut Squash Soup",
        wine: "Chardonnay",
        calories: 220
    },
    entree: {
        meat: "Roast Turkey",
        alt: "Stuffed Portobello Mushrooms",
        vegetables: {
            potatoes: "Garlic Mashed Potatoes",
            greens: "Green Beans Almondine",
            salad: "Cranberry Walnut Salad"
        },
        sides: {
            bread: "Dinner Rolls",
            pasta: "Macaroni and Cheese"
        },
        calories: 550
    },
    dessert: {
        pie: "Pumpkin Pie",
        ice_cream: "Vanilla Ice Cream",
        calories: 320
    },
    total_cost: 30.0,
    senior_discount: 0.10,
    prettyPrint: function () {
        let menuStr = `Starter: ${this.starter.soup}, Wine: ${this.starter.wine}\n`;
        menuStr += `Entree: ${this.entree.meat}, Alt: ${this.entree.alt}\n`;
        menuStr += `Vegetables: ${this.entree.vegetables.potatoes}, ${this.entree.vegetables.greens}, Salad: ${this.entree.vegetables.salad}\n`;
        menuStr += `Sides: ${this.entree.sides.bread}, ${this.entree.sides.pasta}\n`;
        menuStr += `Dessert: ${this.dessert.pie}, Ice Cream: ${this.dessert.ice_cream}`;
        return menuStr;
    },
    totalPrice(isSenior) {
        let price = this.total_cost;
        if (isSenior) {
            price -= price * this.senior_discount;
        }
        return price.toFixed(2);
    },
    totalCalories: function () {
        return this.starter.calories + this.entree.calories + this.dessert.calories;
    },
    caloriesFrom: function (indicator) {
        if (indicator === 1) {
            return this.starter.calories;
        } else if (indicator === 2) {
            return this.entree.calories;
        } else if (indicator === 3) {
            return this.dessert.calories;
        }
    }
};
