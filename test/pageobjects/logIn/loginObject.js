class LoginObject{
     get  emailField(){
          return $("//input[@data-qa='login-email']")
     }
     get loggedInUsername(){
          return $("//a[contains(.,'Logged in as')]");
     }
}
export default new LoginObject();