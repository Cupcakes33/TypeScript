{
  // add, subtract, multiply, divide, remainder

  type Command = "add" | "subtract" | "multiply" | "divide" | "remainder";

  const calculate = (
    command: Command,
    num1: number,
    num2: number
  ): number | Error => {
    switch (command) {
      case "add":
        return num1 + num2;
      case "subtract":
        return num1 - num2;
      case "multiply":
        return num1 * num2;
      case "divide":
        if (num2 !== 0) return num1 / num2;
        else
          throw new Error(
            "Num2 cannot be 0. Please verify the number you entered."
          );
      case "remainder":
        return num1 % num2;
      default:
        throw new Error("Invalid Calculate Type! Please check first argument");
    }
  };

  console.log(calculate("add", 1, 2));
  console.log(calculate("subtract", 2, 3));
  console.log(calculate("multiply", 3, 4));
  console.log(calculate("remainder", 3, 5));
  console.log(calculate("divide", 4, 6));
}
