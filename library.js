var webdriver = require ('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;


    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('https://library-app.firebaseapp.com/');



    driver.findElement(By.css('input')).sendKeys('ekramul@bongobd.com');

    driver.findElement(By.css('.btn-lg')).click();
    // console.log(new Date());
    // driver.sleep('5000');
    driver.wait(until.elementLocated(By.css('.alert-success')), 15000).getText().then(function (el) {
        console.log('peeeep = '+el);
    });

    // driver.wait(until.elementLocated(By.css('.alert-success')), 5000);
    /*console.log(new Date());
    driver.findElement(By.css('.alert-success')).getText().then(function(el){
        console.log('Alert success text is: '+el);
    })*/
    /*driver.findElement(By.css('html body.ember-application div#ember3.ember-view div.container div.jumbotron.text-center div.form-horizontal.form-group.form-group-lg.row div.col-xs-10.col-xs-offset-1.col-sm-offset-0.col-sm-4.col-md-3 button.btn.btn-primary.btn-lg.btn-block')).getText().then(function(txt){
        console.log("The text of the button is = " + txt);
    });
    driver.findElements(By.css('nav li')).then(function (elements) {
         elements.map(function(el){
             el.getText().then(function(txt){
                 console.log('this is a text = '+ txt);
             })
         })
    });*/
    // driver.sleep(10000);
    // driver.quit();
