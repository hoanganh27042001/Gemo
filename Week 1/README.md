- calculatePrice1(drink_type, size, whipped_cream):  
I implemented the function by providing the drink type, size, and whipped cream topping as arguments. The function utilized the conditional statement 'If...else...'
to handle the input and return the calculated price. If the combination of parameters is invalid (e.g., a large size for a hot drink), it will print an error message and return None.  
Please note that the function assumes valid inputs for the drink type ("hot," "cold," or "blended"), size ("S," "M," or "L"), and whipped cream topping ("with" or "without").
- calculatePrice2(drink_type, size, whipped_cream, milk_type):  
In this function, I use dictionaries to store the base prices, size prices, and milk prices. I then retrieve the 
corresponding prices based on the provided parameters. If any of the parameters are invalid, it will print an error 
message and return None. Otherwise, it calculates the total price by adding the base price, size price, milk price, and 
whipped cream price (if applicable).  
This version reduces the number of conditional statements and makes the code more concise and efficient.
- calculatePrice3(drink_type, size, whipped_cream, milk_type, chocolate_pumps):  
The calculatePrice3 function now includes the chocolate_pumps parameter, which represents the number of pumps of 
chocolate sauce to be added. It calculates the price based on the provided parameters, taking into account the additional 
customization options for chocolate sauce.  
If the drink type is hot, it calculates the price for the chocolate sauce based on the following rules:  
-- The first 2 pumps are free.  
-- Each extra pump costs $0.5.  
-- The maximum number of pumps is 6.  
```
chocolate_price = max(0, min(chocolate_pumps - 2, 4)) * 0.5
```
If the drink type is not hot, the price for the chocolate sauce is not included in the calculation.
- calculatePrice4(item_type, topping, bread_type):  
The calculatePrice4 function is implemented with the same ideal as previous. It now includes the item_type, topping, and 
bread_type parameters, which represent the type of breakfast item, the topping to add (if any), and the type of bread for the item.
- calculatePrice5(items):  
The calculatePrice5 function now delegates the pricing calculation for drinks to the calculatePrice3 function and the 
pricing calculation for breakfast items to the calculatePrice4 function. It iterates over each item in the list, determines 
the item type (drink or breakfast), and calls the corresponding pricing function with the appropriate parameters.  
The function accumulates the total price and generates a breakdown of the price for each item. It then calculates the 
tax amount (7.25% of the total price) and adds it to the total price. Finally, it returns a dictionary that includes the
total price and the breakdown of prices for each item.