{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }
  // interface 를 이용하면 명세서에 따른 구현을 통해 의존성을 줄일 수 있다.
  // 원할 때 마다 다른 부품을 끼워서 사용하는 느낌.
  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  class CoffeeMakerImpl implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7;
    private coffeeBeans: number = 0;

    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  class MilkSteamer implements MilkFrother {
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

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  class SugarMixer implements SugarProvider {
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

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  const noSugar = new NoSugar();
  const noMilk = new NoMilk();

  const esspressoMachine = new CoffeeMakerImpl(12, noMilk, noSugar);

  // 오버 엔지니어링을 주의할 것!
  // 너무 처음부터 확장성을 고려해서 코드를 작성하다 보면 오히려 구현을 제대로 못할 경우가 많다.
}
