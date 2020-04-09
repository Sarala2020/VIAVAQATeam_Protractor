/**
 * 
 */

describe('Protractor baby steps',function() {  


it('Open NonAngular js website',function() {

	browser.waitForAngularEnabled(false);
	
	browser.get('http://qaclickacademy.com/practice.php');
	
	element(by.id("confirmbtn")).click();
	
	//browser.switchTo().alert().accept().then(function()
	browser.switchTo().alert().dismiss().then(function()

			{
		
				browser.sleep(5000);			
			})
	
	
	})
	
})