{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array...
   */

  // number
  const num: number = 1;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined (결정되지 않은)
  let age: number | undefined;
  age = undefined;
  age = 10;
  const find = (input:[]): number | undefined => {
    if(input.length === 0) return undefined;
    else return input.length;
  };

  // null (비어있는)
  let person: string | null; // 💩
  person = null;
  person = "Kim";

  // unknown (알 수 없는)
  let unknown: unknown = 0;
  unknown = "hello";
  unknown = true;

  // any (어떤 것이든 담을 수 있는)
  let anything: any = 0;
  anything = "hello";
  anything = true;

  // why ? 타입이 없는 자바스크립트와 연동할 때 사용
  // 가능하면 사용하지 않는 것이 좋다.

  // void (아무것도 리턴하지 않는)
  function print(): void {
    console.log("hello");
    return;
  }

  // void의 경우 생략이 가능하지만 함수의 리턴은 가능한 한 명시해주는 것이 좋은 관습이다.

  // never (절대 리턴하지 않는)
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message); 
    // while(true) {} // 도달할 수 없는 코드
  }
  
  // object (Primitive type 을 제외한 모든 object)
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "kim" });
  acceptSomeObject({ animal: "dog" });

  // 가능하면 구체적으로 명시해주기 위해 사용을 지양하는 것이 좋다.


}
