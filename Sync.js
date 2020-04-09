/**
 * 
 */

describe('Protractor baby steps',function() {  


it('Open Sync for NonAngular js website',function() {

	browser.waitForAngularEnabled(false);
	
	browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");
	
	element(by.css("a[href *= 'loadAjax()']")).click();
	
	var EC = protractor.ExpectedConditions;
	browser.wait(EC.visibilityOf(element(by.id('results'))),8000)
	
	element(by.id("results")).getText().then(function(text)
			{
		
				console.log(text);
			}
	
	
	)
	
})

})