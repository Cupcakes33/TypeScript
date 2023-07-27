{
  const enum STATE {
    LOADING = "loading",
    SUCCESS = "success",
    FAIL = "fail",
  }

  type LoadingState = {
    state: STATE.LOADING;
  };

  type SuccessState = {
    state: STATE.SUCCESS;
    response: {
      body: string;
    };
  };

  type FailState = {
    state: STATE.FAIL;
    reason: string;
  };

  type LoadState = LoadingState | SuccessState | FailState;

  function printLoginState(state: LoadState) {
    switch (state.state) {
      case STATE.LOADING:
        console.log("Loading...");
        break;
      case STATE.SUCCESS:
        console.log(state.response.body);
        break;
      case STATE.FAIL:
        console.log(state.reason);
      default:
        throw new Error("invalid State");
    }
  }
}
