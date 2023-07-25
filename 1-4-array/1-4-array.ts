{
  // Array
  const strings: string[] = ["a", "b", "c"];
  const numbers: Array<number> = [1, 2, 3];

  function printArray(arr: readonly string[]) {
    // arr.push('d'); // error
  }

  // readonly 를 사용하면 배열을 변경하는 함수를 사용할 수 없다.
  // ex) push, splice, pop, shift, unshift, reverse, sort
  // 배열의 불변성을 보장해야 하는 경우에 사용한다.

  // Tuple
  // 서로 다른 타입의 데이터를 담을 수 있는 배열

  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123

  const [name, age] = student;

  // 튜플사용을 권장하지 않는 이유
  // 1. 인덱스로 접근하는 것이 가독성이 떨어진다.
  // 2. 인덱스로 접근하면 타입이 정확하게 보장되지 않는다.
  // 보통 Tuple 대신 interface, type alias, class로 대체해서 사용한다.
  // 튜플 사용의 올바른 예로는 React의 useState를 들 수 있다.
}
