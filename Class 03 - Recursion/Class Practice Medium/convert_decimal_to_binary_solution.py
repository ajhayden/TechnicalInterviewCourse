# Write a function that converts a decimal into binary

def convert_decimal_to_binary(dec, result):
    if dec == 0:
        return result

    result = str(dec % 2) + result
    return convert_decimal_to_binary(dec / 2, result)

print(convert_decimal_to_binary(233, ""))