{
  interface Employee {
    pay(): void;
  }

  class FulltimeEmployee implements Employee {
    pay(): void {
      console.log(`full time worker`);
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log(`part time worker`);
    }
    workPartTime() {}
  }

  // 세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 좋지 않다.
  function pay(employee: Employee): Employee {
    employee.pay();
    return employee;
  }
  // 아래와 같이 extends 를 명시해주면 해당 interface 를 확장한 경우에만~ 이라는 제한을 걸어줄 수 있다.
  function pay2<I extends Employee>(employee:I):I{
    employee.pay()
    return employee;
  }

  const soo = new FulltimeEmployee();
  const bob = new PartTimeEmployee();

  const sooAfterPay = pay(soo);
  const bobAfterPay = pay(bob);
}
