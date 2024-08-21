import test, { expect } from "@fixtures/basepages";
import { Page } from '@playwright/test';
test("Verify Mens Retreat page booking",async({page,mensretreatpage}) =>{
     let firtName="",lastName="",fullname="";
     firtName = await mensretreatpage.generateRandomName("first")
     lastName = await mensretreatpage.generateRandomName("last")
     fullname=firtName+lastName

    await page.goto('/mens-retreat')
    await page.waitForTimeout(3000)
    await mensretreatpage.clickBoooking()
    await mensretreatpage.ClickNumberOfPackage_dropdown()
    await mensretreatpage.inputPromoCode()
    await mensretreatpage.CheckedTermsAndCondution()
    await mensretreatpage.ClickContinue()
    await mensretreatpage.inputFirstName(firtName)
    await mensretreatpage.inputLastName(lastName)
    await mensretreatpage.inputEmail(fullname)
    await mensretreatpage.inputPhone()
     firtName = await mensretreatpage.generateRandomName("first")
     lastName = await mensretreatpage.generateRandomName("last")
     fullname=firtName+lastName
    await mensretreatpage.input_participan_FirstName(firtName)
    await mensretreatpage.input_participan_LastName(lastName)
    await mensretreatpage.input_participan_Email(fullname)
    await mensretreatpage.input_participan_Phone()
    await mensretreatpage.inputNotes()
    await mensretreatpage.ClickContinue()
   
})