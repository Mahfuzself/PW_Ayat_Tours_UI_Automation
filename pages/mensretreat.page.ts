import { expect, Locator, Page } from "@playwright/test";
export default class MensRetreatPage{
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
   

    private MensRetreatLocator = {
        mensretreat : "div[aria-label='2 / 8']",
        booking : "//a[@type='button']",
        numberofpackage: '//select[@id="packageSelect"]',
        promocode: '//input[@formcontrolname="promotionCode"]',
        termsandcond_checked : '//input[@id="terms-condition"]',
        continue : '//button[text()=" Continue "]',
        firstName: "(//span[normalize-space(text())='Log in']/following::input)[1]",
        lastName: "(//span[normalize-space(text())='Log in']/following::input)[2]",
        email : "(//span[normalize-space(text())='Log in']/following::input)[3]",
        phoneNumber : "(//span[normalize-space(text())='Log in']/following::input)[4]",
        participantfirstName: "(//span[normalize-space(text())='Log in']/following::input)[5]",
        participantlastName: "(//span[normalize-space(text())='Log in']/following::input)[6]",
        participantemail : "(//span[normalize-space(text())='Log in']/following::input)[7]",
        participantphoneNumber : "(//span[normalize-space(text())='Log in']/following::input)[8]",
        Notes : "(//span[normalize-space(text())='Log in']/following::input)[9]",
        cardNumber: '#Field-numberInput',
        cardexpdate:'//input[@id="Field-expiryInput"]',
        securitycode: '//input[@id="Field-cvcInput"]',
        Country:'//select[@id="Field-countryInput"]',
        zipcode:'//input[@id="Field-postalCodeInput"]',
        pay:"(//button[contains(@class,'btn btn-block')])[1]",
        card_number_text : '//label[@for="Field-numberInput"]',

        
    }
      
    
     NameType = ['first',  'last' , 'full']
     firstNames = [
                 'John', 'Jane', 'Alice', 'Bob', 'Charlie', 'Diana', 'Edward', 'Fiona', 'George', 'Hannah'
      ];
    lastNames = [
                'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor'
    ];
    async generateRandomName(NameType = 'full'): Promise<string> {
        const getRandomElement = (arr: string[]): string => arr[Math.floor(Math.random() * arr.length)];
      
        switch (NameType) {
          case 'first':
            return getRandomElement(this.firstNames);
          case 'last':
            return getRandomElement(this.lastNames);
          case 'full':
            return `${getRandomElement(this.firstNames)}${getRandomElement(this.lastNames)}`;
          default:
            throw new Error('Invalid name type');
        }
      }
      async generatePhoneNumber(n : number) : Promise<any> {
        var add = 1, max = 10 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   
        
        if ( n > max ) {
                return await this.generatePhoneNumber(max) + await this.generatePhoneNumber(n - max);
        }
        
        max        = Math.pow(10, n+add);
        var min    = max/10; // Math.pow(10, n) basically
        var number = Math.floor( Math.random() * (max - min + 1) ) + min;
        
        return ("4" + number).substring(add); 
}
    async clickMensRetreat(){
        const ele = await this.page.locator(this.MensRetreatLocator.mensretreat)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Mens Retreat >> locator could not found : ${Error}`)
        }
    }
    async clickBoooking(){
        const ele = await this.page.locator(this.MensRetreatLocator.booking)
        try {
            await ele.click()
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> locator could not found : ${Error}`)
        }
        //select[@id="packageSelect"]
    }
    async ClickNumberOfPackage_dropdown(){
        const ele = await this.page.locator(this.MensRetreatLocator.numberofpackage)
        try {
            await ele.selectOption({label : "1"},{timeout : 1000})
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Number of booking dropdown is not functional : could not found locator ${Error}`)
        }
        
    }
    async inputPromoCode(){
        const ele = await this.page.locator(this.MensRetreatLocator.promocode)
        try {
            await ele.type("RL2024")
            await this.page.waitForTimeout(2000)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> Promo code input field is not functional : could not found locator ${Error}`)
        }
        
    }
    async CheckedTermsAndCondution(){
        const ele = await this.page.locator(this.MensRetreatLocator.termsandcond_checked)
        try {
            await ele.click()
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Terms and condution check box is not functional : could not found locator ${error}`)
        }
        
    }
    async ClickContinue(){
        const ele = await this.page.locator(this.MensRetreatLocator.continue)
        try {
            await ele.click()
            await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> Continue button is not functional : could not found locator ${error}`)
        }
        
    }
    async inputFirstName(Fname : any){
        const ele = await this.page.locator(this.MensRetreatLocator.firstName)
        try {
            await ele.fill(Fname)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> Primary Contact first name input field is not functional : could not found locator ${error}`)
        }
    }
    async inputLastName(Lname : any){
        const ele = await this.page.locator(this.MensRetreatLocator.lastName)
        try {
            await ele.fill(Lname);
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> Primary Contact last name input field is not functional : could not found locator ${error}`)
        }
    }
    async inputEmail(fullname : any){
        const ele = await this.page.locator(this.MensRetreatLocator.email)
        try {
           const email = fullname+"@yopmail.com";
           await ele.fill(email)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> Primary Contact email input field is not functional : could not found locator ${error}`)
        }
    }
    async inputPhone(){
        const ele = await this.page.locator(this.MensRetreatLocator.phoneNumber)
        try {
            const number = "4133248551"
           await ele.fill(await number)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> Primary Contact phone number  input field is not functional : could not found locator ${error}`)
        }
    }
    async input_participan_FirstName(Fname : any){
        const ele = await this.page.locator(this.MensRetreatLocator.participantfirstName)
        try {
            await ele.fill(Fname)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> Participant first name input field is not functional : could not found locator ${error}`)
        }
    }
    async input_participan_LastName(Lname : any){
        const ele = await this.page.locator(this.MensRetreatLocator.participantlastName)
        try {
            await ele.fill(Lname);
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> Participant first name input field is not functional : could not found locator ${error}`)
        }
    }
    async input_participan_Email(fullname : any){
        const ele = await this.page.locator(this.MensRetreatLocator.participantemail)
        try {
           const email = fullname+"@yopmail.com";
           await ele.fill(email)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> Participant email input field is not functional : could not found locator ${error}`)
        }
    }
    async input_participan_Phone(){
        const ele = await this.page.locator(this.MensRetreatLocator.participantphoneNumber)
        try {
            const number = "4133248551"
           await ele.fill(await number)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> Participant phone number  input field is not functional : could not found locator ${error}`)
        }
    }
    async inputNotes(){
        let notes = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor massa eu accumsan imperdiet. Suspendisse ut sodales risus, vel facilisis nibh. Etiam egestas elit vel nibh pharetra convallis. Suspendisse vulputate mauris sed sodales interdum. Praesent nec mauris vel odio sollicitudin consectetur at quis velit. Duis malesuada fermentum tempor. Integer id diam viverra, euismod neque non, aliquam libero. Ut ac velit vitae purus maximus venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent ullamcorper auctor pellentesque. Mauris nibh erat, porta ac posuere quis, volutpat a odio. Praesent quis ultrices sapien. Vivamus eget eros tellus. Etiam non nisl nisi."
        const ele = await this.page.locator(this.MensRetreatLocator.Notes)
        try {
           await ele.fill(notes)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> Participant notes input field is not functional : could not found locator ${error}`)
        }
    }
    async inputCardNumber(){
        let card_number : any = "4242424242424242"
         const ele = await this.page.frameLocator("//iframe[@allow='payment *; publickey-credentials-get *']").locator(this.MensRetreatLocator.cardNumber)
        try {
            // await this.page.locator('//div[@class="p-CardNumberInput"]').click();
            await ele.click()
            console.log("Ok")
            // await this.page.frameLocator("//iframe[@allow='payment *; publickey-credentials-get *']").locator('#Field-numberInput').fill(card_number)
            await ele.fill(card_number)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> input participants info >> card number input field is not functional : could not found locator ${error}`)
        }
    }
    async inputCardExpDate(){
        let card_exp = "1225"
        const ele = await this.page.frameLocator("//iframe[@allow='payment *; publickey-credentials-get *']").locator(this.MensRetreatLocator.cardexpdate)
        try {
           await ele.fill(card_exp)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> input participants info >> card exp date input field is not functional : could not found locator ${error}`)
        }
    }
    async inputSecurity(){
        let security_Code = "567"
        const ele = await this.page.frameLocator("//iframe[@allow='payment *; publickey-credentials-get *']").locator(this.MensRetreatLocator.securitycode)
        try {
           await ele.fill(security_Code)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> input participants info >> Security Code input field is not functional : could not found locator ${error}`)
        }
    }
    async inputZIP(){
        let zip = "75001"
        const ele = await this.page.frameLocator("//iframe[@allow='payment *; publickey-credentials-get *']").locator(this.MensRetreatLocator.zipcode)
        try {
           await ele.fill(zip)
           await this.page.waitForTimeout(3000)
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> input participants info >> Security Code input field is not functional : could not found locator ${error}`)
        }
    }
    async selectCountry(){
        const ele = await this.page.frameLocator("//iframe[@allow='payment *; publickey-credentials-get *']").locator(this.MensRetreatLocator.Country)
        try {
           await ele.selectOption({label:"United States"})
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> input participants info >> Country   dropdown field is not functional : could not found locator ${error}`)
        }
    }
    async ClickPayButton(){
        const ele = await this.page.locator(this.MensRetreatLocator.pay)
        try {
           await ele.click({force:true})
           await this.page.waitForTimeout(1000)
           await ele.click({force:true})
           
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> input participants info >> Pay buttonis not functional : could not found locator ${error}`)
        }
    }
    async VerifyCardNumberLabel(){
        await this.page.waitForTimeout(2000)
        console.log("Test")
        const ele = await this.page.frameLocator("//iframe[@allow='payment *; publickey-credentials-get *']").locator(this.MensRetreatLocator.card_number_text)
        try {
           await expect(ele).toContainText("Card number")
        } catch (error) {
            throw new Error(`Mens Retreat >> Booking >> Select Number of booking >> input Promo code >> Click Terms and condution check box >> input participants info >> Card number input field label  is not correct : could not found locator ${error}`)
        }
    }
}