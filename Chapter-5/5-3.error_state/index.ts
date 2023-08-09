{
  type SuccessState = {
    result: "success";
  };

  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "serverdown" | "timeout";
  };
  
  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {
      throw new Error("no network");
    }
  }
  // 예상 가능한 에러 = Error State

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        console.log("error");
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
