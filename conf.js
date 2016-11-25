/**
 * Created by Nagendra on 10-11-2016.
 */
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js'],
    
    
    onPrepare: function() {
        // The require statement must be down here, since jasmine-reporters
        // needs jasmine to be in the global and protractor does not guarantee
        // this until inside the onPrepare function.
        require('jasmine-reporters');
        jasmine.getEnv().addReporter(
            new jasmine.JUnitXmlReporter('xmloutput', true, true));
    },
    
    onPrepare: function() {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'tmp/screenshots'
            })
        );
    }
};
