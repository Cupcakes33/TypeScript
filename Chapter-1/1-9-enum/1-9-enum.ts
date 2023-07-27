{
  // enum === 상수의 집합
  // enum은 대문자로 시작하는 것이 관례

  enum Days {
    Monday,
    // Monday = 1,
    // number 자료형을 할당하면 해당 숫자부터 시작한다.
    // string 자료형도 가능하지만, 모든 값에 할당해야 한다.
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday); // 0

  enum Errors {
    passwordError = "비밀번호가 틀렸습니다.",
    networkError = "네트워크가 불안정합니다.",
    versionError = "버전이 맞지 않습니다.",
  }

  console.log(Errors.passwordError); // 비밀번호가 틀렸습니다.
  
  // Errors.networkError = 1; // 읽기 전용 속성이므로 'networkError'에 할당할 수 없습니다.ts(2540)
  // 5.0 버전 이후로는 enum의 프로퍼티를 변경할 수 없다.

}
