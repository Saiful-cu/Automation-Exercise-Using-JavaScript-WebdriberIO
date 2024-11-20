class SignUpObject {
     get singUpOrLogin() {
          return $("//a[contains(.,' Signup / Login')]")
     }
     get emailField() {
          return $("//input[@data-qa='signup-email']");
     }
     get nameField() {
          return $("//input[@data-qa='signup-name']")
     }
     get signUpButton() {
          return $("//button[@data-qa='signup-button']");
     }
     // Enter Account Information
     get genderTitle() {
          return $("#id_gender1");
     }
     get password() {
          return $("#password")
     }
     get day() {
          return $("#days")
     }
     get Month() {
          return $("#months");
     }
     get Year() {
          return $("#years");
     }
     get newsLetter() {
          return $("#newsletter");
     }
     get receiveSpecialOffer() {
          return $("#optin");
     }

     //Address Information

     get FirstName() {
          return $("#first_name")
     }
     get LastName() {
          return $("#last_name");
     }
     get company() {
          return $("#company");
     }
     get address1() {
          return $("#address1");
     }
     get address2() {
          return $("#address2");
     }
     get country() {
          return $("#country");
     }
     get state() {
          return $("#state")
     }
     get city() {
          return $("#city");
     }
     get zipCode() {
          return $("#zipcode");
     }
     get mobileNumber() {
          return $("#mobile_number")
     }
     get createAccountButton() {
          return $("//button[contains(.,'Create Account')]")
     }
     get continueButton(){
          return $("//a[contains(.,'Continue')]")
     }
}
export default new SignUpObject();