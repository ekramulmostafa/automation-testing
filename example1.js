var webdriver = require ('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

(async function example() {
    try{
        var driver = new webdriver.Builder().forBrowser('chrome').build();
        driver.get('https://library-app.firebaseapp.com/');

        var buttonlg = driver.findElement(By.css('.btn-lg'));
        // await driver.findElement(By.css('input')).sendKeys('ekramul@bongobd.com');
        await driver.findElement(By.css('input')).sendKeys('ekramul');

        await driver.wait(function () {
            // return buttonlg.isEnabled();
            return buttonlg.getCssValue('opacity').then(function (result) {
                return result == 1;
            });
        }, 15000);

        await buttonlg.click();

        await driver.wait(until.elementLocated(By.css('.alert-success')), 7000).getText().then(function (el) {
            console.log('peeeep = '+el);
        });
    }finally {
        await driver.quit();
    }

})();
