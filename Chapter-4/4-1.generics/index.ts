{
  function checkNotNullNumber(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  function checkNotNullString(arg: string | null): string {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  // 재사용성이 떨어짐

  function checknotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }

  // 타입을 parameter로 받아서 사용
  // 타입을 보장받을 수 있고 재사용성이 높아짐

  const number = checknotNull(123); // number
  const bool: boolean = checknotNull(true); // boolean
}
