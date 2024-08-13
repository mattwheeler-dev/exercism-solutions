# TASK 1: DEFINE EXPECTED BAKE TIME (40)
EXPECTED_BAKE_TIME = 40

# TASK 2: CALC REMAINING BAKE TIME
def bake_time_remaining(elapsed_bake_time):
    """ DocString here for Task 5
    """

    return EXPECTED_BAKE_TIME - elapsed_bake_time


# TASK 3: CALC PREP TIME
def preparation_time_in_minutes(number_of_layers):
    """DocString here for Task 5
    """
    return number_of_layers * 2


# TASK 4: CALC TOTAL ELAPSED COOK TIME
def elapsed_time_in_minutes(number_of_layers, elapsed_bake_time):
    """DocString here for Task 5
    """
    return (number_of_layers * 2) + elapsed_bake_time

# TASK 5: ADD A DOCSTRING TO EACH FUNCTION 
