import loginObject from "./loginObject";

class LoginAction{
     async findLoggedInUsername(){
          return await loginObject.loggedInUsername.getText();
     } 
}

export default new LoginAction();