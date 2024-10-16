const foodDelivery = {
  getCategory(category) {
    if (category === "Vegan") {
      return "Dishes that contain no animal products.";
    } else if (category === "Vegetarian") {
      return "Dishes that contain no meat or fish.";
    } else if (category === "Gluten-Free") {
      return "Dishes that contain no gluten.";
    } else if (category === "All") {
      return "All available dishes.";
    } else {
      throw new Error("Invalid Category!");
    }
  },
  addMenuItem(menuItem, maxPrice) {
    if (
      !Array.isArray(menuItem) ||
      typeof maxPrice !== "number" ||
      menuItem.length < 1 ||
      maxPrice < 5
    ) {
      throw new Error("Invalid Information!");
    }
    let availableItems = [];
    menuItem.forEach((item) => {
      if (item.price <= maxPrice) {
        availableItems.push(item);
      }
    });
    return `There are ${availableItems.length} available menu items matching your criteria!`;
  },
  calculateOrderCost(shipping, addons, discount) {
    if (
      !Array.isArray(shipping) ||
      !Array.isArray(addons) ||
      typeof discount !== "boolean"
    ) {
      throw new Error("Invalid Information!");
    }
    let totalPrice = 0;

    shipping.forEach((item) => {
      if (item === "standard") {
        totalPrice += 3;
      } else if (item === "express") {
        totalPrice += 5;
      }
    });
    addons.forEach((item) => {
      if (item === "sauce") {
        totalPrice += 1;
      } else if (item === "beverage") {
        totalPrice += 3.5;
      }
    });
    if (discount) {
      totalPrice = totalPrice * 0.85;
      return `You spend $${totalPrice.toFixed(
        2
      )} for shipping and addons with a 15% discount!`;
    } else {
      return `You spend $${totalPrice.toFixed(2)} for shipping and addons!`;
    }
  },
};
const obj = [{name: 'Apple', price: 7},{name: 'Orange', price: 3}];
console.log(foodDelivery.addMenuItem(obj, 6));

const shipping = ['express'];
const addons = ['sauce', 'beverage'];
console.log(foodDelivery.calculateOrderCost(shipping, addons, false));


export {
  foodDelivery
}