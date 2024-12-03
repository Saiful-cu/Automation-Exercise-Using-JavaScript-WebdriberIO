import { expect } from '@wdio/globals'

import signupAction from '../pageobjects/signUp/signupAction';
import loginAction from '../pageobjects/logIn/loginAction';


describe('Verify Register User', () => {
    const username = 'Saifu_l';
    const email = 'saiful0@gmail.com';
    it('should visible the homepage successfully', async () => {
        await browser.url('http://automationexercise.com');
        const currentUrl = await browser.getUrl();
        await expect(currentUrl).toEqual("https://automationexercise.com/")
        
    }),
    it('should visible new user signup', async ()=>{
        await signupAction.clickSignUpOrLoginButton();
        const elementText = await $("//h2[contains(.,'New User Signup!')]").getText();
        await expect(elementText).toContain('New User Signup!');
        
    }),
    it('should visible Enter account information text', async()=>{
        await signupAction.signup(username,email);
        const elementText = await $("//h2[contains(.,'Enter Account Information')]").getText();
        await expect(elementText).toContain('ENTER ACCOUNT INFORMATION');

    })        
    it('should ACCOUNT CREATED! is visible', async()=> {
        await  signupAction.enterAccountInformation("#dkjfkdj21#@",'5','June','2021');
        await signupAction.addressInformation('saiful','islam','daraz','dhaka','khulna','Canada','newYork','1st lane','1233','32022121231')
        const elementText = await $("//h2[@data-qa='account-created']").getText();
        
        await expect(elementText).toContain('ACCOUNT CREATED!');
    }) 
    it('should visible logged in as username ', async()=> {
        await signupAction.clickContinueButton();
        const elementText = await loginAction.findLoggedInUsername();
        await expect(elementText).toEqual(`Logged in as ${username}`);
    }) 

    // it("should visible 'Account Deleted' ", async()=>{
    //     await $("//a[contains(.,'Delete Account')]").click();
    //     const elementText = await $("//h2[contains(.,'Account Deleted!')]").getText();
    //     await expect(elementText).toContain("ACCOUNT DELETED!");

    // })


})

