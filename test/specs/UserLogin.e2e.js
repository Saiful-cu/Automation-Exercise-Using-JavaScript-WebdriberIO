import { expect } from '@wdio/globals'

import signupAction from '../pageobjects/signUp/signupAction';
import loginAction from '../pageobjects/logIn/loginAction';
import loginObject from '../pageobjects/logIn/loginObject';
import { each } from 'async';

describe('Login User with Invalid email and password', () => {

    const password = '#dkjfkdj21#@';
    const email = 'demo1201@gmail.com';
    const Email = ['demo1201@gmail.com', '', 'demo12'];
    const Password = ['', '1245', '#dkjfkdj21#@']
    it('should visible the homepage successfully', async () => {
        await browser.url('http://automationexercise.com');
        const currentUrl = await browser.getUrl();
        await expect(currentUrl).toEqual("https://automationexercise.com/")

    })
    it('should visible Login', async () => {
        await signupAction.clickSignUpOrLoginButton();
        const elementText = await $("//h2[contains(.,'Login to your account')]").getText();
        await expect(elementText).toContain('Login to your account');

    })
    it("should  show an error message when enter invalid email and password", async () => {
        for (const i = 0; i < 3; i++) {
            await loginAction.login(Email[i], Password[i]);
            const element = await loginObject.errorMessage;

            if (await element.isExisting()) {
                const errorMessage = element.getText();
                await expect(errorMessage).toContain("Your email or password is incorrect!")
            }
            else{
                const errorAlert = await browser.getAlertText();
                console.log(errorAlert);
                await expect(errorAlert).toContain('Please fill in this field');
            }
        }

    })
})

    // describe('Login User with correct email and password', () => {
    //     const username = 'Saifu_l';
    //     const password = '#dkjfkdj21#@';
    //     const email = 'saiful0@gmail.com';
    //     it('should visible the homepage successfully', async () => {
    //         await browser.url('http://automationexercise.com');
    //         const currentUrl = await browser.getUrl();
    //         await expect(currentUrl).toEqual("https://automationexercise.com/")

    //     }),
    //         it('should visible Login', async () => {
    //             await signupAction.clickSignUpOrLoginButton();
    //             const elementText = await $("//h2[contains(.,'Login to your account')]").getText();
    //             await expect(elementText).toContain('Login to your account');

    //         }),

    //         it('should login using valid email and password also visible logged in as username ', async () => {
    //             await loginAction.login(email, password);
    //             const elementText = await loginAction.findLoggedInUsername();
    //             await expect(elementText).toEqual(`Logged in as ${username}`);
    //         })
    //     // it("should visible 'Account Deleted' ", async () => {
    //     //     await $("//a[contains(.,'Delete Account')]").click();
    //     //     const elementText = await $("//h2[contains(.,'Account Deleted!')]").getText();
    //     //     await expect(elementText).toContain("ACCOUNT DELETED!");

    //     // })


    // })
