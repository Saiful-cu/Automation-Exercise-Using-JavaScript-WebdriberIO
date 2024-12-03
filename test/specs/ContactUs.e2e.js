
import contactUsAction from "../pageobjects/ContactUs/contactUsAction";
import { fileURLToPath } from 'url';
import path from 'node:path';

// Emulate __filename and __dirname

import contactUsObject from "../pageobjects/ContactUs/contactUsObject";

describe("Verify the contact Us Form", () => {
     it("should appear contact us page correctly", async () => {
          await browser.url('http://automationexercise.com');
          await contactUsAction.clickContactUs();
          const content = await $("//h2[contains(.,'Contact ')]").getText();
          await expect(content).toContain('CONTACT US')
     })

     it("should upload file properly", async () => {
          await contactUsAction.fillUpForm(
               "Saiful",
               "saiful@gmail.com",
               "Career",
               "I want to join there"
          );
          const __filename = fileURLToPath(import.meta.url);
          const __dirname = path.dirname(__filename);
          const filePath = path.join(__dirname, '../SQA-Md Saiful Islam- City University-Savar Dhaka .pdf');

          const remoteFilePath = await browser.uploadFile(filePath);
          await contactUsAction.clickUploadFile(remoteFilePath);
          await contactUsAction.clickSumbitButton();
          
          await browser.waitUntil(async () => (await browser.isAlertOpen()), {
               timeout: 2000,
               timeoutMsg: 'Alert did not appear within 5 seconds'
           });
   
           await browser.acceptAlert();

           const alertText = await $("//div[@class='status alert alert-success']").getText();
           expect(alertText).toContain('Success!');
     });
})