'use strict'
function Cs142TemplateProcessor(template) {
    this.template = template;
}

Cs142TemplateProcessor.prototype.fillIn = function(dictionary) {
    var filledTemplate = this.template;
    var regex = /{{(.*?)}}/g;
    var match;
    
while (match = regex.exec(this.template)) {
        var property = match[1].trim();
        var replacement = dictionary[property] || "";
        filledTemplate = filledTemplate.replace(match[0], replacement);
    }
    
    return filledTemplate;
};


var template = "My favorite month is {{month}} but not the day {{day}} or the year {{year}}";
var dateTemplate = new Cs142TemplateProcessor(template);

var dictionary = {month: "July", day: "1", year: "2016"};
var str = dateTemplate.fillIn(dictionary);
console.log(str);


var dictionary2 = {day: "1", year: "2016"};
var str2 = dateTemplate.fillIn(dictionary2);
console.log(str2); 
