/**
 * 
 */

describe('Protractor baby steps',function() {  


it('Open NonAngular js website',function() {

	browser.waitForAngularEnabled(false);
	
	browser.driver.manage().window().maximize();
	
	browser.get('http://qaclickacademy.com/practice.php');
	browser.switchTo().frame(0); /// This frame function accepts id(index) only
	
	element(by.css("a[href*='sign_in']")).getText().then(function(text)
		{
		
			console.log(text);
		
		})	
	
			})	
})