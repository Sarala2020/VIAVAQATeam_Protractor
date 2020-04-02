/**
 * 
 */

describe('Protractor baby steps',function() {
	
	function Add(a,b)
	{
		
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		
		element(by.id("gobutton")).click();
		
	} 



it('Chain Locators',function() {
	
	browser.get('http://juliemr.github.io/protractor-demo/');
	Add(10,15);
	Add(4,19);
	Add(6,5);
	Add(9,3);
	
	//To get the table rows values
	
	/*element.all(by.repeater("result in memory")).count().then(function(value)
			{
		console.log(value);
			}
			)*/
	
	element.all(by.repeater("result in memory")).each(function(item)
			
			{
		     item.element(by.css("td:nth-child(3)")).getText().then(function(value)
		    		 {
		    	 
		    	 		console.log(value);
		    		 }
		     
		     )
			}
	)
	
			
	
})
})
	
	
		
		