const onlineStore = {
    isProductAvailable(product, stockQuantity) {
    if (typeof product !== "string" || typeof stockQuantity !== "number") {
            throw new Error("Invalid input.");
        }
        
      if (stockQuantity <= 0) {
        return `Sorry, ${product} is currently out of stock.`;
      } else {
        return `Great! ${product} is available for purchase.`;
      }
    },
    canAffordProduct(productPrice, accountBalance) {
      if (typeof productPrice !== "number" || typeof accountBalance !== "number") {
        throw new Error("Invalid input.");
      }
  
      let remainingBalance = accountBalance - productPrice;
  
      if (remainingBalance < 0) {
        return "You don't have sufficient funds to buy this product.";
      } else {
        return `Product purchased. Your remaining balance is $${remainingBalance}.`;
      }
    },
    getRecommendedProducts(productList, category) {
      let recommendedProducts = [];
  
      if (!Array.isArray(productList) || typeof category !== "string") {
        throw new Error("Invalid input.");
      }
  
      productList.forEach((product) => {
        if (product.category === category) {
          recommendedProducts.push(product.name);
        }
      });
  
      if (recommendedProducts.length === 0) {
        return `Sorry, we currently have no recommended products in the ${category} category.`;
      } else {
        return `Recommended products in the ${category} category: ${recommendedProducts.join(", ")}`;
      }
    },
  };
  
  export {
    onlineStore
  } 