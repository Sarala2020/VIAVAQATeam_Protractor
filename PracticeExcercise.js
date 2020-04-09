/**
 * 
 */

describe('Protractor baby steps',function() {
	
	var temp = 0;
	var rowsCount;
	var checkedItems;
	var rowNum;
	var totalProdAmount;
	var resultCount; //= count-3; // value for the selected products rowscount(excluded header and footer rows)
	var totalRowCount; //= resultCount+1; // value for the total amount displayed row 
	
	function selectItems(product)
	{
	var product;
	//console.log(product);
	element.all(by.tagName("app-card")).each(function(item)
			
			{
				item.element(by.css("h4[class='card-title'] a")).getText().then(function(text)
				{
					if(text==product)							
						{
						 item.element(by.css("button[class*='btn-info']")).click();
						 console.log("Clicked Add Button for" + " " + product);
						}						
				})			
			})
	}


it('Open Angular Practice Excercise',function() {

		browser.get('http://qaclickacademy.github.io/protocommerce');
		element(by.name("name")).sendKeys("sarala").then(function()
		{
			browser.sleep(5000);
		})
		element(by.css("input[name='email']")).sendKeys("saralad.u@gmail.com");
		element(by.id("exampleInputPassword1")).sendKeys("Welcome@123");
		element(by.css("input[type='checkbox']")).click().then(function()
		{
			browser.sleep(5000);
		})
		
		/* To select one of the value from multiple elements*/
		
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
		/*element.all(by.tagName("option")).getText().each(function(item)
				{
					item.getAttribute("value").then(function(values)
					{
						if(values=="Female")
							{
							item.click();
							browser.sleep(5000)
							}
					})
							
				})*/
		
		/* To select radio button */
				
		/*element.all(by.css("input[type='radio']")).first().click().then(function()
		{
			browser.sleep(5000);
		})*/
				
		element.all(by.css("input[name='inlineRadioOptions']")).get(1).click();
		
		/* To select button */
		//element(by.css("input[class='btn btn-success']")).click();
		element(by.buttonText("Submit")).click().then(function()
		{
			browser.sleep(5000);
		})
		
		element(by.css("div[class*='success']")).getText().then(function(text)
		{
			
			console.log(text);
		})
		
		element(by.name("name")).clear();
		
		element(by.name("name")).sendKeys("s").then(function()
		{
			element(by.css("div[class='alert alert-danger']")).getText().then(function(text)
					
					{
						console.log(text);
						//expect("Name should be at least 2 characters").toBe(text);
					})			
		})
		
		//Select Items in Shop
		
		element(by.linkText("Shop")).click().then(function()
		{
			browser.sleep(5000);
		})
		
		
		selectItems("Nokia Edge");
		selectItems("Blackberry");
		//selectItems("Samsung Note 8");
		selectItems("iphone X");
		
		element(by.partialLinkText('Checkout')).getText().then(function(text)
		{			
			 var item = text.split("(");
			 console.log(Number(item[1].trim().charAt(0)) + " are the checkedout items");
			 checkedItems = temp + (Number(item[1].trim().charAt(0)));
			 //expect(item[1].trim().chartAt(0)).toBe("1");
			 element(by.partialLinkText('Checkout')).click();
		})
		
		//Assignment code for comparing individual selected products count with TotalAmount displayed:
		
		element.all(by.tagName("tr")).count().then(function(count)
				{	
					console.log(count + " is the total rows displayed in the table");

					rowNum = 1;
					resultCount = count-3; // value for the selected products rowscount(excluded header and footer rows)
					totalRowCount = resultCount+1; // value for the total amount displayed row					
					
					do
						{
						element(by.xpath("/html/body/app-root/app-shop/div/div/div/table/tbody/tr["+rowNum+"]/td[4]/strong")).getText().then(function(text)
								{		
										console.log(text);																
										var result = text.split(".");
										console.log(Number(result[1].trim()) + " is the amount of the selected product");
										totalProdAmount = totalProdAmount + (Number(result[1].trim()));
										console.log(totalProdAmount + " is the total sum displayed for the selected products");
										
										if (rowNum >= totalRowCount)
											{
											element(by.xpath("/html/body/app-root/app-shop/div/div/div/table/tbody/tr["+totalRowCount+"]/td[5]/h3/strong")).getText().then(function(text)
													{						
														var displayedResult = text.split(".");
														var temp = 0;
														displayedResult = temp + (Number(displayedResult[1].trim()));
														console.log(Number(displayedResult[1].trim()) + " is the sum of the total products");
														if (totalProdAmount == displayedResult)
															{
																console.log("Displayed sum of the individual products " +totalProdAmount+ " is similar to the Sum displayed  " +displayedResult );
															}
														else
															{
																console.log("Displayed sum of the individual products " +totalProdAmount+ " is not similar to the Sum displayed  " +displayedResult );
															}					
																			
													})
											}
										rowNum = rowNum+1;
								})					
						
						}while(rowNum <= resultCount)								
				})
											
														
				
				
	//Assignment for: selected products rows count before click and after click on Remove button
				
				element.all(by.tagName("tr")).count().then(function(beforeCount)
					{					

						var resultBeforeCount = beforeCount-3; // value for the selected products rowscount(excluded header and footer rows)
						
						console.log(resultBeforeCount + " is the total rows displayed for selected products in the table before click on remove button");
						
						element(by.xpath("/html/body/app-root/app-shop/div/div/div/table/tbody/tr["+resultBeforeCount+"]/td[5]/button")).click();
						
						element.all(by.tagName("tr")).count().then(function(afterCount)
							{
							
							var resultAfterCount = afterCount-3; // value for the selected products rowscount(excluded header and footer rows)

							console.log(resultAfterCount + " is the total rows displayed in the table After click on remove button for one of the product");
							
							if ( resultAfterCount == (resultBeforeCount-1) )
								{
								 console.log("Rows count after click on Remove button of the single product  " +resultAfterCount+ "  is lessthan 1 when compared with rows count before click on Remove button " +resultBeforeCount);
								}
							else
								{
								console.log("Rows count after click on Remove button of the single product  " +resultAfterCount+ "  is not lessthan 1 when compared with rows count before click on Remove button " +resultBeforeCount);
								}
							})
					})
				
	})
	})