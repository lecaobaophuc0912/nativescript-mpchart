var AutoCompleteTextField = require("nativescript-auto-complete-text-field").AutoCompleteTextField;
var autoCompleteTextField = new AutoCompleteTextField();

describe("greet function", function() {
    it("exists", function() {
        expect(autoCompleteTextField.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(autoCompleteTextField.greet()).toEqual("Hello, NS");
    });
});