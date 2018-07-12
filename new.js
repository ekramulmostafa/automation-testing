const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://www.google.com/ncr');
        await driver.findElement(By.name('q')).sendKeys('webdriver\n');
        await driver.wait(until.titleIs('webdriver - Google Search'), 5000);
        await driver.sleep(5000);
        console.log('aisi');
    } finally {
        await driver.quit();
    }
})();