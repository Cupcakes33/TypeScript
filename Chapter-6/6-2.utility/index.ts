// 타입스크립트는 유일하게 타입을 "변환" 하는 타입을 지정하는 것이 가능하다!

{
  // index type
  const obj = {
    name: "soo",
  };

  obj.name;
  obj["name"];

  type Human = {
    name: string;
    age: number;
    gender: "male" | "femail";
  };

  type Name = Human["name"];
  type gender = Human["gender"];

  // object 의 index 를 이용해 value 값을 불러오는 것 처럼 타입을 가져올 수 있다.

  type Keys = keyof Human;
  const key: Keys = "age";

  type Human2 = {
    name: Human["name"];
    age: Human["age"];
  };

  type Name2 = Human2["name"];
}

{
  // Mapped Type
  // 기존의 타입을 이용해 다른 형태로 변환할 수 있는 타입.

  // X

  type Video = {
    title: string;
    author: string;
  };

  type OptionalVideo = {
    title?: string;
    author?: string;
  };

  // 일일히 복사하는건 싫으니까

  type Optional<T> = {
    // [] === for...in
    [P in keyof T]?: T[P];
  };
  // type 을 순회하면서 '?', optional 을 넣기.

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;
}

{
  // Conditional type

  type Check<T> = T extends string ? boolean : number;

  type TypeName<T> = T extends string
    ? "string"
    : T extends number
    ? "number"
    : T extends boolean
    ? "boolean"
    : T extends undefined
    ? "undefined"
    : T extends Function
    ? "function"
    : "object";

  type T1 = TypeName<string>; // 'string'
  type T1string = TypeName<'a'>; // 'string'
  type T2 = TypeName<number>; // 'number
}
