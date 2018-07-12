const {suite} = require('selenium-webdriver/testing');
const assert = require('assert');
var Page = require('./lib/base_page');

suite(function(env) {
    describe('Example Testing', function() {
        let page;

        beforeEach(async function() {
            page = Page;
            page.visit('https://library-app.firebaseapp.com/');
            // driver.get('https://library-app.firebaseapp.com/');
        });

        afterEach(() => page.quit() );

        it('demo1', async function() {

            let buttonlg = page.find('.btn-lg');

            let  input = page.find('input');
            await page.write(input, 'ekramul@asd.com');

            return buttonlg.getCssValue('opacity').then(function (result) {
                assert(result == '1');
            });

        });

        it('demo2', async function(){
            let buttonlg = page.find('.btn-lg');

            let  input = page.find('input');
            await page.write(input, 'ekramul@asd.com', Key.RETURN);
            buttonlg.click();

            /*await driver.wait(until.elementLocated(By.css('.alert-success')), 7000).getText().then(function (el) {
                console.log('peeeep = '+el);
            });*/

            await page.wait(until.elementLocated(By.css('.alert-success')), 5000);
            page.find('.alert-success').then(function (el) {
                assert(el.length === 1, el.length + 'alert successful');
            });
        });

        it('demo3', async function(){

            await page.findAll('ul li').then(function (elm) {
                elm.map(function (el) {
                    el.getText().then(function (txt) {
                        console.log(txt);
                    })
                })
            })

        });
    });
});