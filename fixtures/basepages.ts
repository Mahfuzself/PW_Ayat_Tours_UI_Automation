import path = require('path');
import { test as baseTest } from '@playwright/test';
import MensRetreatPage from 'pages/mensretreat.page';

const test = baseTest.extend<{
    mensretreatpage : MensRetreatPage;
   

}>(
    {
        mensretreatpage: async ({page }, use) => {
                    await use(new MensRetreatPage(page));
                },
              

            },
)
export default test;
export const expect = test.expect;