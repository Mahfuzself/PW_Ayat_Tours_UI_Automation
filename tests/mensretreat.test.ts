import test, { expect } from "@fixtures/basepages";
import { Page } from '@playwright/test';
test("Verify Mens Retreat page booking",async({page,mensretreatpage}) =>{
    await page.goto('/mens-retreat')
    await page.waitForTimeout(3000)
    await mensretreatpage.clickBoooking()
})