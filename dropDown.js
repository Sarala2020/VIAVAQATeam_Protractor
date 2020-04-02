
/**
 * 
 */

describe('Protractor baby steps',function() {
	
	function Calc(a,b,c)
	{		
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		//element(by.model("operator").element(by.css("option:nth-child(2)")).click();
		element.all(by.tagName("option")).each(function(item)
				{
					item.getAttribute("value").then(function(values)
					{		
					if(values==c)
						{
						  item.click();
						}
					})
			
				})		
		
		element(by.id("gobutton")).click();			
	}

it('Chain Locators',function() {
	
	browser.get('http://juliemr.github.io/protractor-demo/');
	Calc(10,15,"MULTIPLICATION");
	Calc(10,15,"DIVISION");
	Calc(10,15,"ADDITION");
	Calc(10,15,"ADDITION");


	
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
		    		 })
		     	     
			})
	
	
})

})
	
			
	


	
	
		
		