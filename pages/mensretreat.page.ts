import { expect, Locator, Page } from "@playwright/test";
export default class MensRetreatPage{
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    private MensRetreatLocator = {
        mensretreat : "div[aria-label='2 / 8']",
        booking : "//a[@type='button']"
        
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
    }
}