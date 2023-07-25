
{
  // Optional parameter
  function printName(firstName: string, lastName: string) {
    console.log(firstName);
    console.log(lastName);
  }
  // printName("Steve"); // error

  function printName2(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName2("Steve"); // ok

  // or

  function printName3(firstName: string, lastName: string | undefined) {
    console.log(firstName);
    console.log(lastName);
  }
  printName3("Steve", undefined); // ok


  // Default parameter
  function printMessage(message = "default message") {
    console.log(message);
  }

  printMessage(); // default message

  // Rest parameter
  function addNum(...rest:number[]):number {
    return rest.reduce((a, b) => a + b);
  }
}
