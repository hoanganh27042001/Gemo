// Global variables
const items = [];
let language = 'english'; // Default language
console.log(items)
// Get DOM elements
const drinkSection = document.getElementById('drink-section');
const foodSection = document.getElementById('food-section');
const addItemButton = document.getElementById('add-item-btn');
const orderList = document.getElementById('order-list');
const calculateButton = document.getElementById('calculate-btn');
const priceBreakdownElement = document.getElementById('price-breakdown');
const totalPriceElement = document.getElementById('total-price');
const taxAmountElement = document.getElementById('tax-amount');
const languageSwitchButton = document.getElementById('language-switch');


// Event listeners
addItemButton.addEventListener('click', addItemToList);
calculateButton.addEventListener('click', calculateTotal);
// languageSwitchButton.addEventListener('click', switchLanguage);


// Function to add an item to the order list
function addItemToList() {
  // Retrieve input values
  const drinkType = document.getElementById('drink-type').value;
  const size = document.getElementById('size').value;
  const whippedCream = document.getElementById('whipped-cream').checked ? 'with' : 'without';
  const milkType = document.getElementById('milk-type').value;
  const chocolateSaucePumps = parseInt(document.getElementById('chocolate-sauce-pumps').value);
  const itemType = document.getElementById('item-type').value;
  const option1 = document.getElementById('option1').value;

  // Create item object
//   let item = {
//     type: 'drink',
//     name: drinkType, // Update with localized names if needed
//     drinkType,
//     size,
//     whippedCream,
//     milkType,
//     chocolateSaucePumps
//   };

  if (drinkType) {
    // item.type = 'drink';
    // item.name = drinkType;
    // item.size = size;
    // item.whippedCream = whippedCream;
    // item.milkType = milkType;
    // item.chocolateSaucePumps = chocolateSaucePumps;
    let item1 = {
        type: 'drink',
        name: drinkType, // Update with localized names if needed
        drinkType: drinkType,
        size: size,
        whippedCream: whippedCream,
        milkType: milkType,
        chocolateSaucePumps: chocolateSaucePumps
      };
    // Add item to the items array
    items.push(item1);
    console.log(item1);
    console.log("Drink type:");
    console.log(items);
  };
  

  if (itemType) {
    let item2 = {
    type: 'food',
    name: itemType, // Update with localized names if needed
    itemType: itemType,
    option1: option1,
    };
    // Add item to the items array
    items.push(item2);
    console.log(item2);
    console.log("Drink type:");
    console.log(items);
  };


  // Update order list display
  displayOrderList();

  // Clear input fields
  clearInputs();
}


// Function to display the order list
function displayOrderList() {
  // Clear existing order list
  orderList.innerHTML = '';

  // Create list items for each selected item
  items.forEach((item, index) => {
    const listItem = document.createElement('li');
    let itemPrice = 0;
    let itemDetails = `${item.type}: ${item.name}`;

    if (item.type === 'drink') {
    // itemPrice = calculatePrice3(item.drinkType, item.size, item.whippedCream, item.milkType, item.chocolateSaucePumps);
        itemDetails += `, Size: ${item.size}, Whipped Cream: ${item.whippedCream}, Milk Type: ${item.milkType}, Chocolate Sauce Pumps: ${item.chocolateSaucePumps}`;
    } else if (item.type === 'food') {
    // itemPrice = calculatePrice4(item.itemType, item.option1);
        itemDetails += `, Option: ${item.option1}`;
    }

    // listItem.innerHTML = `${item.type}: ${item.name}`;
    listItem.innerHTML = `${itemDetails} \n`;

    // Remove button for each item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeItem(index));

    listItem.appendChild(removeButton);
    orderList.appendChild(listItem);
  });
}

// Function to remove an item from the order list
function removeItem(index) {
  items.splice(index, 1); // Remove item from the array
  displayOrderList(); // Update order list display
}

// Function to calculate the price
function calculatePrice3(drink_type, size, whipped_cream, milk_type, chocolate_pumps) {
    const prices = {
        "hot": 2.0,
        "cold": 2.25,
        "blended": 2.25,
        "milk tea": 2.25
    };

    const size_prices = {
        "S": 0.0,
        "M": 0.5,
        "L": 1.0,
        "XL": 1.5
    };

    const milk_prices = {
        "whole milk": 0.5,
        "almond milk with almond": 0.5
    };

    const base_price = prices[drink_type];
    const size_price = size_prices[size];
    const milk_price = milk_prices[milk_type] || 0.0;

    if (base_price === undefined || size_price === undefined) {
        window.alert("Invalid drink type or size.");
        return null;
    }

    if (size === "L" && drink_type === "hot") {
        window.alert("Large size is not available for hot drinks.");
        return null;
    }

    let total_price = base_price + size_price + milk_price;

    if (drink_type === "hot") {
        const chocolate_price = Math.max(0, Math.min(chocolate_pumps - 2, 4)) * 0.5;
        total_price += chocolate_price;
    }

    if (whipped_cream === "with") {
        total_price += 0.5;
    }

    return total_price;
}
  
  function calculatePrice4(itemType, option1) {
    const basePrice = 3;
    let priceAdjustment = 0;
  
    if (itemType === 'sandwich') {
      if (option1 === 'egg' || option1 === 'turkey') {
        priceAdjustment += 1;
      } else {
        window.alert('Invalid option for sandwich type.');
        return;
      }
    } else if (itemType === 'bagel') {
      if (option1 === 'butter' || option1 === 'cream cheese') {
        priceAdjustment += 0.5;
      } else {
        window.alert('Invalid option for bagel topping.');
        return;
      }
    } else {
        window.alert('Invalid item type.');
      return;
    }
  
    return basePrice + priceAdjustment;
  }

// Function to calculate the total price
function calculateTotal() {
    let totalPrice = 0;
    let priceBreakdown = '';
  
    items.forEach((item) => {
      let itemPrice = 0;
      let itemDetails = `${item.type}: ${item.name}`;
  
      if (item.type === 'drink') {
        itemPrice = calculatePrice3(item.drinkType, item.size, item.whippedCream, item.milkType, item.chocolateSaucePumps);
        itemDetails += `, Size: ${item.size}, Whipped Cream: ${item.whippedCream}, Milk Type: ${item.milkType}, Chocolate Sauce Pumps: ${item.chocolateSaucePumps}`;
      } else if (item.type === 'food') {
        itemPrice = calculatePrice4(item.itemType, item.option1);
        itemDetails += `, Option: ${item.option1}`;
      }
  
      totalPrice += itemPrice;
      priceBreakdown += `${itemDetails} - $${itemPrice.toFixed(2)}\n`;
    });
  
    const taxRate = 0.0725; // 7.25% tax rate
    const taxAmount = totalPrice * taxRate;
    const totalAmount = totalPrice + taxAmount;
  
    // Update price breakdown display
    priceBreakdown += `Tax (7.25%): $${taxAmount.toFixed(2)}\n`;
    priceBreakdown += `Total: $${totalAmount.toFixed(2)}`;
    priceBreakdownElement.textContent = priceBreakdown;
  
    // Update total price and tax amount display
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
    taxAmountElement.textContent = `Tax Amount: $${taxAmount.toFixed(2)}`;
  }
  
// Function to clear all input/select fields
function clearInputs() {
    const inputs = document.querySelectorAll('input');
    const selects = document.querySelectorAll('select');
  
    inputs.forEach((input) => {
      input.value = '';
    });
  
    selects.forEach((select) => {
      select.selectedIndex = 0;
    });
  }
  