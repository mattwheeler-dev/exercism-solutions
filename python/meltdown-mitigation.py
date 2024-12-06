def is_criticality_balanced(temperature, neutrons_emitted):
    if temperature < 800 and neutrons_emitted > 500 and (temperature * neutrons_emitted < 500000):
        return True
    else:
        return False


def reactor_efficiency(voltage, current, theoretical_max_power):
    generated_power = voltage * current
    percentage = (generated_power / theoretical_max_power) * 100
    
    if percentage >= 80:
        return 'green'
    elif percentage >= 60:
        return 'orange'
    elif percentage >= 30:
        return 'red'
    else:
        return 'black'


def fail_safe(temperature, neutrons_produced_per_second, threshold):
    status = temperature * neutrons_produced_per_second
  
    if status < (threshold * 0.9):
        return 'LOW'
    elif  status == threshold or status > (threshold * 0.9) and status < (threshold * 1.1):
        return 'NORMAL'
    else: 
        return 'DANGER'
