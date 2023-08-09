{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMakerImpl implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
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
      return this.extract(shots);
    }
  }

  class CaffeLatteMakerImpl extends CoffeeMakerImpl {
    // overite
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk() {
      console.log("Steaming some milk... 🥛");
    }
    makeCoffe(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMakerImpl extends CoffeeMakerImpl {
    private addSugar() {
      console.log(`add sugar... 🍬`);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.addSugar();
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMakerImpl(16, "1"),
    new SweetCoffeeMakerImpl(16),
  ];

  machines.forEach(machine => {
    console.log('---------------------')
    machine.makeCoffee(1)
  })

  // 
}
