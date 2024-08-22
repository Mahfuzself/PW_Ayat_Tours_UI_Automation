import { test as baseTest } from "@playwright/test";

type Mahfuz = {
    hey: string;
}


const fixture = baseTest.extend<Mahfuz>({
    hey: "I am ",

})
export const test = fixture;
export const assert = fixture.expect
export const describe = fixture.describe;