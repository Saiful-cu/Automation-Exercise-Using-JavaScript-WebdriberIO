import loginObject from "./loginObject";

class LoginAction{
     async findLoggedInUsername(){
          return await loginObject.loggedInUsername.getText();
     } 
     async setEmail(email){
          await loginObject.emailField.setValue(email);
     }
     async setPassword(password){
          await loginObject.passwordField.setValue(password);
     }
     async clickLoginButton(){
          await loginObject.logInButton.click();
     }
     
     async login(email, password){
          await this.setEmail(email);
          await this.setPassword(password);
          await this.clickLoginButton();
     }
}

export default new LoginAction();