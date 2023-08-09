{
  interface IEither {
    left: () => number;
    right: () => number;
  }

  class Either implements IEither {
    constructor(private leftValue: number, private rightValue: number) {}
    left(): number {
      return this.leftValue;
    }

    right(): number {
      return this.rightValue;
    }
  }
  const either = new Either(4, 5);
  console.log(either.left()); //4
  console.log(either.right()); //5

  // 위와 같은 방식으로 구현한 Either 클래스는 number 타입만 받을 수 있다.
  // 재사용성, 확장성 측면에서 굉장히 좋지 않다.
}

{
  interface IEither<L, R> {
    left: () => L;
    right: () => R;
  }

  class Either<L, R> implements IEither<L, R> {
    constructor(private leftValue: L, private rightValue: R) {}
    left(): L {
      return this.leftValue;
    }

    right(): R {
      return this.rightValue;
    }
  }
  const numberEither: IEither<number,number> = new Either(4, 5);
  console.log(numberEither.left()); //4
  console.log(numberEither.right()); //5

  const stringEither: IEither<string, string> = new Either('string','spring')
  console.log(stringEither.left()); //'string'
  console.log(stringEither.right()); //'spring'
  
  // 위와 같이 제네릭을 활용하면 타입을 파라미터 형식으로 받을 수 있어서 타입의 안정성도 보장될 뿐 아니라 재사용성 측면에서 효과적이다.
}
