{
  // Javascript
  function add(num1, num2) {
    return num1 + num2;
  }

  // Typescript
  function add2(num1: number, num2: number): number {
    return num1 + num2;
  }

  // Javascript
  function jsFetchNum(id) {
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Typescript
  function tsFetchNum(id: string): Promise<number> {
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //  타입스크립트의 의의를 "문서화"에서 찾을 수 있다.
}
