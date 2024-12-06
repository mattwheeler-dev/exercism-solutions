# TASK 1: RETURN IF PACMAN EATS GHOST
def eat_ghost(power_pellet_active, touching_ghost):
    if power_pellet_active and touching_ghost:
        return True
    else:
        return False

# TASK 2: RETURN IF PACMAN SCORES
def score(touching_power_pellet, touching_dot):
    if touching_power_pellet or touching_dot:
        return True
    else:
        return False

# TASK 3: RETURN IF YOU LOSE
def lose(power_pellet_active, touching_ghost):
    if not power_pellet_active and touching_ghost:
        return True
    else:
        return False

# TASK 4: RETURN IF YOU WIN
def win(has_eaten_all_dots, power_pellet_active, touching_ghost):
    if has_eaten_all_dots and not lose(power_pellet_active, touching_ghost):
        return True
    else:
        return False
        
