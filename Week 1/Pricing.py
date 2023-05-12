def calculatePrice1(drink_type, size, whipped_cream):
    base_price = 2.0

    if drink_type == "blended":
        base_price += 1.0

    if size == "M":
        base_price += 0.5
    elif size == "L":
        if drink_type == "hot":
            print("Large size is not available for hot drinks.")
            return None
        base_price += 1.0

    if whipped_cream == "with":
        base_price += 0.5

    return base_price

def calculatePrice2(drink_type, size, whipped_cream, milk_type):
    prices = {
        "hot": 2.0,
        "cold": 2.25,
        "blended": 2.25,
        "milk tea": 2.25
    }

    size_prices = {
        "S": 0.0,
        "M": 0.5,
        "L": 1.0,
        "XL": 1.5
    }

    milk_prices = {
        "whole milk": 0.5,
        "almond milk with almond": 0.5
    }

    base_price = prices.get(drink_type, None)
    size_price = size_prices.get(size, None)
    milk_price = milk_prices.get(milk_type, 0.0)

    if base_price is None or size_price is None:
        print("Invalid drink type or size.")
        return None

    if size == "L" and drink_type == "hot":
        print("Large size is not available for hot drinks.")
        return None

    total_price = base_price + size_price + milk_price

    if whipped_cream == "with":
        total_price += 0.5

    return total_price

def calculatePrice3(drink_type, size, whipped_cream, milk_type, chocolate_pumps):
    prices = {
        "hot": 2.0,
        "cold": 2.25,
        "blended": 2.25,
        "milk tea": 2.25
    }

    size_prices = {
        "S": 0.0,
        "M": 0.5,
        "L": 1.0,
        "XL": 1.5
    }

    milk_prices = {
        "whole milk": 0.5,
        "almond milk with almond": 0.5
    }

    base_price = prices.get(drink_type, None)
    size_price = size_prices.get(size, None)
    milk_price = milk_prices.get(milk_type, 0.0)

    if base_price is None or size_price is None:
        print("Invalid drink type or size.")
        return None

    if size == "L" and drink_type == "hot":
        print("Large size is not available for hot drinks.")
        return None

    if drink_type == "hot":
        chocolate_price = max(0, min(chocolate_pumps - 2, 4)) * 0.5
        total_price = base_price + size_price + milk_price + chocolate_price
    else:
        total_price = base_price + size_price + milk_price

    if whipped_cream == "with":
        total_price += 0.5

    return total_price

def calculatePrice4(item_type, topping, bread_type):
    prices = {
        "sandwich": 3.0,
        "bagel": 3.0
    }

    topping_prices = {
        "egg": 1.0,
        "turkey": 1.0,
        "butter": 0.5,
        "cream cheese": 0.5
    }

    base_price = prices.get(item_type, None)
    topping_price = topping_prices.get(topping, 0.0)

    if base_price is None:
        print("Invalid item type.")
        return None

    total_price = base_price + topping_price

    if item_type == "sandwich":
        if bread_type != "bread":
            print("Invalid bread type.")
            return None

    if item_type == "bagel":
        if bread_type != "bagel":
            print("Invalid bread type.")
            return None

    return total_price

def calculatePrice5(items):
    total_price = 0.0
    breakdown = []

    for item in items:
        if "drink_type" in item:
            drink_type = item["drink_type"]
            size = item["size"]
            whipped_cream = item.get("whipped_cream", "without")
            milk_type = item.get("milk_type", None)
            chocolate_pumps = item.get("chocolate_pumps", 0)

            price = calculatePrice3(drink_type, size, whipped_cream, milk_type, chocolate_pumps)
            if price is None:
                return None
        else:
            item_type = item["item_type"]
            topping = item.get("topping", None)
            bread_type = item.get("bread_type", None)

            price = calculatePrice4(item_type, topping, bread_type)
            if price is None:
                return None

        breakdown.append({"item": item, "price": price})
        total_price += price

    tax_rate = 0.0725
    tax_amount = total_price * tax_rate
    total_price += tax_amount
    print("Total Price:", total_price)
    print("Breakdown:")
    for item in breakdown:
        print(item["item"], "Price:", item["price"])

    return {"total_price": total_price, "breakdown": breakdown}

# price = calculatePrice3("hot", "M", "with", "whole milk", 3)
# print("Price:", price)
#
# price = calculatePrice3("cold", "L", "without", "almond milk with almond", 5)
# print("Price:", price)
#
# price = calculatePrice3("blended", "S", "with", "whole milk", 2)
# print("Price:", price)
#
# price = calculatePrice3("milk tea", "XL", "without", "whole milk", 0)
# print("Price:", price)

items = [
    {"drink_type": "hot", "size": "S", "whipped_cream": "without"},
    {"item_type": "sandwich", "topping": "egg", "bread_type": "bread"},
    {"drink_type": "cold", "size": "M", "whipped_cream": "with", "milk_type": "whole milk"},
    {"item_type": "bagel", "topping": "cream cheese", "bread_type": "bagel"}
]

result = calculatePrice5(items)
