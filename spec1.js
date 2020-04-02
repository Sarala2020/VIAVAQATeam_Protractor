/**
 * 
 */

describe('Protractor baby steps',function() {  


it('Open Angular js website',function() {

		browser.get('https://angularjs.org');
		
		browser.get('http://juliemr.github.io/protractor-demo/').then(function()
			{ 
		    console.log("Executed till lasst step");
		    	
			})
	})


//Each it block will be called as a spec

it('close browswer', function() {

// code to close browser

})
})