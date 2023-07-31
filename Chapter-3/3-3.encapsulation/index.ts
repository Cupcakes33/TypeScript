{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
// public : 자유롭게 접근 가능
// private : 외부에서 접근할 수 없음
// protected : 외부에서 접근할 수 없지만 상속받은 자식 클래스에서는 접근 가능

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    // static 키워드를 사용해서 생성자 함수를 리턴하는 형식의 구조라면
    // constructor 를 이용한 생성을 금지한다는 것을 상정한다.

    fillCoffeeBeans(beans: number){
      if(beans < 0){
        throw new Error("Value for beans shold be greater than 0")
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  
}

