const {By, Key, until} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');
const assert = require('assert');

suite(function(env) {
    describe('Bongo Testing', function() {
        let driver;

        beforeEach(async function() {
            driver = await env.builder().build();
            driver.get('https://www.google.com/');
            // driver.get('https://www.google.com/gmail/about/');
        });

        afterEach(() => driver.quit());

        it('demo1', async function() {

            await driver.findElement(By.name('q')).sendKeys('gmail', Key.RETURN);

            await driver.findElements(By.css('.bkWMgd')).then(async function (elements) {
                elements.map(function (elm) {
                    elm.findElement(By.linkText('Gmail - Google')).click();
                })
            })

            await driver.wait(until.elementLocated(By.css('a.gmail-nav__nav-link.gmail-nav__nav-link__sign-in')));
            await driver.findElement(By.css('a.gmail-nav__nav-link.gmail-nav__nav-link__sign-in')).click()

            let email = await driver.wait(until.elementLocated(By.name('identifier')));
            await email.sendKeys('ekramul@bongobd.com', Key.ENTER);
            // await driver.findElement(By.css('#identifierNext')).click();

            await driver.sleep(2000);
            let pass = await driver.wait(until.elementLocated(By.name('password')));
            await pass.sendKeys('Ekramul@109', Key.ENTER);
            // await driver.findElement(By.css('#passwordNext')).click();

            await driver.sleep(15000);
            await driver.wait(until.titleContains('Bongo Holdings PTE Limited Mail'), 5000);

            console.log('done');

            await driver.findElements(By.css('.zA')).then(function (elements) {
                elements.map(function (el) {

                    el.findElements(By.css('.zF')).then(function (elements) {
                        elements.map(function (el) {
                            el.getText().then(function (txt) {
                                console.log(txt);
                            })
                        })
                    });

                    el.findElements(By.css('.yP')).then(function (elements) {
                        elements.map(function (el) {
                            el.getText().then(function (txt) {
                                console.log(txt);

                            })
                        })
                    });

                    el.findElement(By.css('.bog > span')).getText().then(function (txt) {
                        console.log(txt);
                    });

                    el.findElement(By.css('.bog > span')).click();
                })

            })

            await driver.sleep(5000);

        });

        /*it('demo2', async function(){

            await driver.wait(until.elementLocated(By.css('a.gmail-nav__nav-link.gmail-nav__nav-link__sign-in')), 15000);
            await driver.findElement(By.css('a.gmail-nav__nav-link.gmail-nav__nav-link__sign-in')).click()
            await driver.sleep(10000);
        });*/

        /*it('demo3', async function(){

            await driver.findElements(By.css('ul li')).then(function (elm) {
                elm.map(function (el) {
                    el.getText().then(function (txt) {
                        console.log(txt);
                    })
                })
            })

        });*/
    });
});