import contactUsObject from "./contactUsObject";

class ContactUsAction{
     async clickContactUs(){
          await contactUsObject.contactUsButton.click();
     }
     async setName(name){
          await contactUsObject.nameField.setValue(name);
     }
     async setEmail(email){
          await contactUsObject.emailField.setValue(email);
     }
     async setSubject(subject){
          await contactUsObject.subjectField.setValue(subject);
     }
     async setMessage(message){
          await contactUsObject.messageField.setValue(message);
     }
     async clickUploadFile(filePath){
          await contactUsObject.uploadField.setValue(filePath);
     }
     async clickSumbitButton(){
          await contactUsObject.submitButton.click();
     }
     async fillUpForm(name,email,subject,message){
          await this.setName(name);
          await this.setEmail(email);
          await this.setSubject(subject);
          await this.setMessage(message);
     }
     
        
         
     
}

export default new ContactUsAction();