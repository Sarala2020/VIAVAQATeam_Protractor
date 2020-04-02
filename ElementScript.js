describe('Protractor baby steps',function() {  


it('Locators',function() {
	browser.get('http://juliemr.github.io/protractor-demo/');
	element(by.model("first")).sendKeys("3");
	
	//To avoid the Asynchronous call of wait, we need to use the browser.sleep as below
	//element(by.model("second")).sendKeys("5").then(function(){
		
		//browser.sleep(5000);
	
		element(by.model("second")).sendKeys("5");
		element(by.id("gobutton")).click();
		 
		//"tagname[attribute='value']"
		//console.log(element(by.css("h2[class='ng-binding']")).getText()); 
		
		// could not able to use this because real o/p will display when you resolve promise
				
		element(by.css("h2[class='ng-binding']")).getText().then(function(text){
			console.log(text);
		})
		
		//Assertions - Jasmine takes care of the promise resolve
		//Syntax: expect(true).toBe(true)
		
		expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");
		
		
})

})
