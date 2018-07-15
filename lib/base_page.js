const {By, Key, until} = require('selenium-webdriver');
var driver;
class Page{

    constructor(env){
        driver = env.builder().build();
    }

    async visit(thisUrl){
        return driver.get(thisUrl);
    }

    async quit() {
        return driver.quit();
    }

    async find (element) {
        await driver.wait(until.elementLocated(By.css(element)), 5000);
        return driver.findElement(By.css(element));
    }

     async findAll (element) {
        await driver.wait(until.elementLocated(By.css(element)), 5000);
        return driver.findElements(By.css(element));
    }

    async write (element, txt, options = null){
        await driver.findElement(By.css(element)).sendKeys(txt, options);
    }
}

module.exports = Page;