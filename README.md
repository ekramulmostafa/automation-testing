First you are going to install selenium webdriver from Node js library

sudo npm install -g selenium-webdriver

SELENIUM_BROWSER=chrome mocha -t 50000 example2.js --reporter mochawesome --reporter-options autoOpen=true 