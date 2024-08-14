# TASK 1: ESTIMATE EXCHANGED VALUE
def exchange_money(budget, exchange_rate):
    return budget / exchange_rate

# TASK 2: CALC CHANGE AFTER EXCHANGE
def get_change(budget, exchanging_value):

    return budget - exchanging_value

# TASK 3: CALC BILL VALUE
def get_value_of_bills(denomination, number_of_bills):
    return denomination * number_of_bills

# TASK 4: CALC NUM OF BILLS
def get_number_of_bills(amount, denomination):
    return amount // denomination

# TASK 5: CALC REMAINDER AFTER EXCHANGE
def get_leftover_of_bills(amount, denomination):
    return amount % denomination

# TASK 6: CALC MAX VAL AFTER EXCHANGE
def exchangeable_value(budget, exchange_rate, spread, denomination):
    new_rate = exchange_rate + (exchange_rate * (spread / 100))
    return int(budget / new_rate / denomination) * denomination
