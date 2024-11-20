
import signupObject from "./signupObject";


class SignUpAction {
     async clickSignUpOrLoginButton() {
          await signupObject.singUpOrLogin.click();
     }
     async setName(name) {
          await signupObject.nameField.setValue(name);
     }
     async setEmail(email) {
          await signupObject.emailField.setValue(email);
     }
     async clickSignUpButton() {
          await signupObject.signUpButton.click();
     }
     async clickTitle() {
          await signupObject.genderTitle.click();
     }
     async setPassword(password) {
          await signupObject.password.setValue(password)
     }
     async setDate(date) {
          await signupObject.day.selectByVisibleText( date);
     }
     async setMonth(month) {
          await signupObject.Month.selectByVisibleText(month);
     }
     async setYear(year) {
          await signupObject.Year.selectByVisibleText(year);
     }

     async setDateOfBirth(date, month, year) {
          await this.setDate(date);
          await this.setMonth(month);
          await this.setYear(year);
     }
     async clickNewsletter() {
          await signupObject.newsLetter.click();
     }
     async clickSpecialOffer() {
          await signupObject.receiveSpecialOffer.click();
     }
     async setFirstName(firstName) {
          await signupObject.FirstName.setValue(firstName);
     }
     async setLastName(lastName) {
          await signupObject.LastName.setValue(lastName);
     }
     async setCompany(company) {
          await signupObject.company.setValue(company);
     }
     async setAddress1(address1) {
          await signupObject.address1.setValue(address1);
     }
     async setAddress2(address2) {
          await signupObject.address2.setValue(address2);
     }
     async setCountry(country) {
          await signupObject.country.selectByAttribute('value', country);
     }
     async setState(state) {
          await signupObject.state.setValue(state);
     }
     async setCity(city) {
          await signupObject.city.setValue(city);
     }
     async setZipcode(zipcode) {
          await signupObject.zipCode.setValue(zipcode);
     }
     async setMobileNumber(number) {
          await signupObject.mobileNumber.setValue(number);
     }
     async clickCreateAccount() {
          await signupObject.createAccountButton.click();
     }
     async clickContinueButton(){
          await signupObject.continueButton.click();
     }

     async addressInformation(firstName,lastName,company,address1,address2,country,state,city,zip,number) {
          await this.setFirstName(firstName);
          await this.setLastName(lastName);
          await this.setCompany(company);
          await this.setAddress1(address1);
          await this.setAddress2(address2);
          await this.setCountry(country);
          await this.setState(state);
          await this.setCity(city);
          await this.setZipcode(zip);
          await this.setMobileNumber(number);
         // await browser.pause(1500);
          await this.clickCreateAccount();
         // await browser.pause(1000);
     }
     async enterAccountInformation(password, date, month, year) {
         // await browser.pause(1000);
          await this.clickTitle();
          //await browser.pause(1100)
          await this.setPassword(password);
          await this.setDateOfBirth(date, month, year);
          await this.clickNewsletter();
          await this.clickSpecialOffer();
     }

     async signup(name, email) {
          await this.setName(name);
          await this.setEmail(email);
          await this.clickSignUpButton();
     }
     


}

export default new SignUpAction();