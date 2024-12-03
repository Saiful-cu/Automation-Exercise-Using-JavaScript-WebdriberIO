class ContactUsObject{
     get contactUsButton(){
          return $("//a[contains(.,' Contact us')]");
     }
     get nameField(){
          return $("//input[@placeholder='Name']");
     }
     get emailField(){
          return $("//input[@placeholder='Email']");
     }
     get subjectField(){
          return $("//input[@placeholder='Subject']");
     }
     get messageField(){
          return $("#message");
     }
     get uploadField(){
          return $("//input[@name='upload_file']")
     }
     get submitButton(){
          return $("//input[@name='submit']")
     }
}

export default new ContactUsObject();