{
  // Type Alias vs Interface

  type TPosition = {
    x: number;
    y: number;
  };

  interface IPosition {
    x: number;
    y: number;
  }

  // object
  const obj1: TPosition = {
    x: 10,
    y: 20,
  };

  const obj2: IPosition = {
    x: 10,
    y: 20,
  };

  // class
  class Class1 implements TPosition {
    x: number;
    y: number;
  }

  class Class2 implements IPosition {
    x: number;
    y: number;
  }

  // Extends
  interface IPositionZ extends IPosition {
    z: number;
  }

  type TPositionZ = TPosition & { z: number };
  // 과거에는 불가능했다.

  // interface only
  // 타입의 병합이 가능하다.
  interface IPosition {
    // z:number;
  }

  // Type Alias only
  // computed properties

  type Person = {
    name: string;
    age: number;
  };

  type Name = Person["name"]; // string
  type NumberType = number;
  type UnionType = "a" | "b";


  // 개념적 측면에서 다른점 ?
  // interface = 어떤 객체의 구현사항 - 정해진 interface 를 토대로 구현 - 계약서(규격사항)
  // type = 어떠한 데이터를 담을 때, 데이터의 모습 & 타입을 결정


}
