const {By, Key, until} = require('selenium-webdriver');

var Page = async function(){

    this.driver = await env.builder().build();
    var driver = this.driver;

    this.visit = async function(thisUrl){
        return driver.get(thisUrl);
    }

    this.quit = async function () {
        return driver.quit();
    }

    this.find = async function (element) {
        await driver.wait(until.elementLocated(By.css(element)), 5000);
        return driver.findElement(By.css(element));
    }

    this.findAll = async function (element) {
        await driver.wait(until.elementLocated(By.css(element)), 5000);
        return driver.findElements(By.css(element));
    }

    this.write = async function(element, txt, options = null){
        await this.find(element).sendKeys(txt, options);
    }
}

module.exports = Page;