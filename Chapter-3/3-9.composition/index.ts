{
  // 상속의 문제점
  // 상속의 깊이가 길어지면 길어질수록 관계도가 복잡해진다.
  // 그리고 타입스크립트에서는 두 번 이상의 상속이 불가능하다.
  // 따라서 Composition 을 활용하여 해결할 수 있다.
  // Composition ? 필요한 부품을 레고처럼 가져와 조립하는 과정

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMakerImpl implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMakerImpl {
      return new CoffeeMakerImpl(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("Value for beans shold be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log(`clean!`);
    }

    grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMakerImpl.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMakerImpl.BEANS_GRAM_PER_SHOT;
    }

    preHeat() {
      console.log("heating up... 🔥");
    }

    extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preHeat();
      return this.extract(shots);
    }
  }

  class MilkSteamer {
    private steamMilk() {
      console.log("Steaming some milk...");
      return true;
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      const milk = this.steamMilk();
      return {
        ...cup,
        hasMilk: milk,
      };
    }
  }

  class SugarMixer {
    private getSugar() {
      console.log("getting sugar...");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class CaffeLatteMakerImpl extends CoffeeMakerImpl {
    constructor(
      beans: number,
      public readonly serialNumber: string,
      private milk: MilkSteamer
    ) {
      super(beans);
    }

    makeCoffe(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milk.makeMilk(coffee);
    }
  }

  class SweetCoffeeMakerImpl extends CoffeeMakerImpl {
    constructor(private beans: number, private sugar: SugarMixer) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMakerImpl extends CoffeeMakerImpl {
    constructor(
      private beans: number,
      private milk: MilkSteamer,
      private sugar: SugarMixer
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }
  // 하지만 milkSteamer, SugarMixer 의 사양이 바뀐다면 composition 한 class 모두를 일일히 바꾸어주어야 한다.
  // 따라서, 이렇게 긴밀하게 의존성을 주입하는 것은 좋지 않다.
}
