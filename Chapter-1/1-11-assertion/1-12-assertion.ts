{
  // Type Assertion == 타입을 강요한다.
  // 타입 체크를 우회하는 것이므로 최대한 피하는 것이 좋고, 최대한 사용하지 않는 방향으로 코딩하되, 불가피하게 사용할 경우가 존재한다.
  // 가장 대표적인 예시로는 DOM API 조작이 있는데,
  // 예를 들어, 페이지에 있는 어떤 특정 요소를 선택하려고 할 때, 해당 요소가 'div', 'span' 등 다양한 타입 중
  // 어떤 타입인지는 실행 이후의 시점에만 알 수 있으므로, 런타임 이전에 타입을 체크하는 타입스크립트는 해당 요소의 타입을 알 수 없다.

  let canvas = document.querySelector("#myCanvas");
  let ctx = (canvas as HTMLCanvasElement).getContext("2d");

  // 위의 코드에서 canvas는 HTMLElement | null 이라는 타입을 가지고 있으므로, canvas.getContext("2d")를 실행하면
  // null.getContext("2d")가 되어 런타임 에러가 발생한다.
  // 따라서, canvas가 null이 아님을 확신할 때, canvas as HTMLCanvasElement 를 통해 타입을 강제할 수 있다.

  // 또 다른 예시로는, 아래와 같이 타입을 강제할 수 있다.
  const a = "a";
  const b = a!;
  // a! 는 a가 null이 아님을 확신할 때, a as string 과 같은 의미이다.
 
}
