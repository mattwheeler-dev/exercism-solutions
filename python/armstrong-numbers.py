def is_armstrong_number(number):
    digits = [int(digit) for digit in str(number)]
    total = 0
    for digit in digits:
        total += (digit ** len(digits))
    if number == total: 
        return True
    if number != total:
        return False
