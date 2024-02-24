def main():
    print("Welcome to the calculator program")
    print("Please enter the operation you would like to perform")
    print("1. Addition")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")
    operation = int(input("Enter the number of the operation you would like to perform: "))
    if operation != 1 and operation != 2 and operation != 3 and operation != 4:
        print("Invalid operation")
        main()
    else:
        num1 = input("Enter the first number: ")
        num2 = input("Enter the second number: ")

        try:
            num1 = float(num1)
            num2 = float(num2)
        except ValueError:
            print("Invalid input")
            main()

        if operation == 1:
            print("The result is", num1 + num2)
        elif operation == 2:
            print("The result is", num1 - num2)
        elif operation == 3:
            print("The result is", num1 * num2)
        elif operation == 4:
            print("The result is", num1 / num2)

main()