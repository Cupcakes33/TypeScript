{
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {}
  }

  //  getter 와 setter 를 사용하면 내부적인 속성을 직접 노출하지 않아 객체의 상태를 보호할 수 있으며 입력값에 대한 유효성 검사도 수행할 수 있다. 또한, 내부 구조가 변경되더라도 클라이언트 코드에는 영향을 주지 않는다.
}
