/**
 * 
 */
describe('Learning Actions',function() {  


it('Open upwork application',function() {
	
	browser.waitForAngularEnabled(false);

		//browser.get('https://www.upwork.com');
		//browser.get('https://www.posse.com');
	browser.get('http://qaclickacademy.com/practice.php');

				
				/*{
			      browser.sleep(5000);
				}
				
		)*/
		
		element(by.id("mousehover")).click();
		element(by.id("mousehover")).sendKeys(protractor.Key.ARROW_DOWN);
		element(by.id("mousehover")).sendKeys(protractor.Key.ARROW_DOWN);
		element(by.id("mousehover")).sendKeys(protractor.Key.ENTER).then(function()
				{
		      browser.sleep(5000);
		      console.log("Refreshed the page after click Down link");


				})
		
		//Switch To 
		
			element(by.id("openwindow")).click();
			browser.getAllWindowHandles().then(function(handles)				
					
			{ 
				browser.switchTo().window(handles[1]).then(function()
						{
				      		browser.sleep(5000);
				      		browser.getTitle().then(function(title)
				      			{				      			
				      			console.log(title + "Titlte of the page after Switch");
				      			})				      				
						})
						
				browser.switchTo().window(handles[0]).then(function()
						{
				      		browser.sleep(5000);
				      		browser.getTitle().then(function(title)
				      			{				      			
				      			console.log(title + "Titlte of the page after Switch moved to home");
				      			})				      				
						})
					
						})
				
			})
		
		
		
		/*browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
				{
					browser.sleep(2000);
				})*/

	})