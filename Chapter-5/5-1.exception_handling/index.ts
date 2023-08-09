{
  // 에상하지 못한 에러 !
  // 안정성과 유지보수성을 높일 수 있도록 에러 처리를 꼼꼼하게 하자.

  // 예상하지 못한(exception) vs 예상한(error state)
  // Java : Exception => Typescript : Error (object)

  type TDirection = "up" | "down" | "left" | "right" | "😜";
  function directionMove(direction: TDirection) {
    switch (direction) {
      case "up":
        console.log("move up");
        break;
      case "down":
        console.log("move down");
        break;
      case "left":
        console.log("move left");
        break;
      case "right":
        console.log("move right");
        break;
      default:
        // const invalid: never = direction;
        // 새로운 키워드를 추가했지만 사용하지 않아서 never 타입에서 에러가 발생.
        throw new Error("Invalid Move");
    }
  }

  // Error Handling : try -> catch -> finally

  function readFile(fileName: string):string{
    if(!fileName){
      throw new Error(`file not exist! ${fileName}`)
    }
    return 'file contents'
  }

  function closeFile(fileName: string){
    // 
  }

  const fileName = 'file'
  console.log(readFile(fileName))

  const notFile = ""
  try {
    console.log(readFile(notFile))
  } catch(error){
    console.log(`catched!!!`)
  } finally {
    closeFile(notFile)
  }

  // try = 일단 시도해
  // catch = 싪패했으면 이쪽으로
  // finally = 실패했든 성공했든 이 코드는 실행해
}
