/**
 * 
 */

describe('Protractor baby steps',function() {  


it('Chain Locators',function() {
	browser.get('http://juliemr.github.io/protractor-demo/');
	element(by.model("first")).sendKeys("3");
	
	//To avoid the Asynchronous call of wait, we need to use the browser.sleep as below
	//element(by.model("second")).sendKeys("5").then(function(){
		
		//browser.sleep(5000);
	
		element(by.model("second")).sendKeys("9");
		element(by.id("gobutton")).click();
		
		element(by.repeater("result in memory")).element(by.css("td:nth-child(2)")).getText().then(function(text)
				{
			     console.log(text);
			
				})
		
		
})

})
		
		