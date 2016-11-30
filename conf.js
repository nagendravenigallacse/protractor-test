/**
 * Created by Nagendra on 10-11-2016.
 */
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {

    baseUrl: '	http://183.82.2.170:4444/wd/hub',
    chromeDriver: './lib/chromedriver'
    chromeOnly: true,
    specs: ['todo-spec.js'],
    
    onPrepare: function(){
browser.driver.manage().window().maximize();
    },
    
    onPrepare: function() {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'tmp/screenshots'
            })
        );
    }
};


