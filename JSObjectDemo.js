/**
 * 
 */

function LocatorObj()
{
	this.firstItem = element(by.model("first")),
	this.secondItem = element(by.model("second")),
	this.goButton = element(by.id("gobutton")),
	this.result = element(by.css("h2[class='ng-binding']"))

};

  module.exports = new LocatorObj();
