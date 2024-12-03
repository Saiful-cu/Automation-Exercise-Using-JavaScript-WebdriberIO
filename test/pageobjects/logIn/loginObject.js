class LoginObject{
     get  emailField(){
          return $("//input[@data-qa='login-email']")
     }
     get loggedInUsername(){
          return $("//a[contains(.,'Logged in as')]");
     }
     get  passwordField(){
          return $("//input[@data-qa='login-password']");
     }
     get logInButton(){
          return $("//button[@data-qa='login-button']")
     }
     get errorMessage(){
          return $("//p[contains(.,'Your email or password is incorrect!')]")
     }
}
export default new LoginObject();