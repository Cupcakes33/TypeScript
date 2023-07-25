{
  //  Discriminate Union === tagged union

  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  const printLoginState = (state: LoginState) => {
    if (state.result === "success") {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  };

  // type alias 의 고유 식별 번호 처럼 사용할 수 있다.
  // 타입 안정성과 가독성, 유지보수 측면에 유용하다.
  
}
