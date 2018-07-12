const {By, Key, until} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');

suite(function(env) {
    describe('Google Search', function() {
        let driver;

        before(async function() {
            driver = await env.builder().build();
        });

        after(() => driver.quit());

        it('demo', async function() {
            await driver.get('http://www.google.com/ncr');

            let q = await driver.findElement(By.name('q'));
            await q.sendKeys('webdriver', Key.RETURN);
            await driver.wait(
                until.titleIs('webdriver - Google Search'), 1000);
        });
    });
});