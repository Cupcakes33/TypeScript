{
  class NetworkClient {
    tryConnect(): void {
      throw new Error('no network')
    }
  }

  class UserService {
    constructor(private client: NetworkClient){}

    login(){
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService:UserService){}
    run(){
      try{
        this.userService.login()
      }catch(error){
        console.log('error')
      }
      
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client)
  const app = new App(service);
  app.run()

  // 에러 핸들링을 할 때
  // 에러가 발생했을 때 처리할 수 없다면 catch 로 잡아내지 않는 편이 오히려 낫다.
  // 위의 예시의 경우 네트워크 클라이언트, 유저 서비스 class 에서 에러 핸들링을 통해 catch 하더라도
  // 유저 입장에서 받을 수 있는 피드백이 한정적이다.
  // 따라서, 어플리케이션 레벨에서, 실제로 에러를 핸들링하고 피드백을 줄 수 있는 위치에서 에러 핸들링을 하는 것이 좋다.

}