{
  // Union Types == OR
  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  async function login(id: string, password: string): Promise<LoginState> {
    try {
      const res = await fetch("url", {
        method: "POST",
        body: JSON.stringify({
          id,
          password,
        }),
      });

      if (res.status === 200) {
        return {
          response: {
            body: "logged in!",
          },
        };
      } else {
        return {
          reason: "failed to login",
        };
      }
    } catch (error) {
      return {
        reason: "network error",
      };
    }
  }

  const printLoginState = (state: LoginState) => {
    if ("response" in state) {
      console.log(state.response.body);
    } else {
      console.log(state.reason);
    }
  };
}
