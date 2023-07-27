{
  type Command = "up" | "down" | "left" | "right";

  let init = { x: 0, y: 0 };
  function coordinate(command: Command, num?: number) {
    let weight = 1;
    if (num) {
      if (Number.isInteger(num) && num > 0 && num < 11) {
        weight = weight * num;
      } else {
        throw new Error("0<num<10, integer");
      }
    }

    switch (command) {
      case "up":
        init.y = init.y + 1 * weight;
        break;
      case "down":
        init.y = init.y - 1 * weight;
        break;
      case "right":
        init.x = init.x + 1 * weight;
        break;
      case "left":
        init.x = init.x - 1 * weight;
        break;
      default:
        return new Error("Invalid command. plases check your command");
    }
  }

  try {
    coordinate("up");
    coordinate("up");
    coordinate("up");
    coordinate("down");
    coordinate("left", 100);
    console.log(init);
  } catch (error) {
    console.log(error);
  }
}
