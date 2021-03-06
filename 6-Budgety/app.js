// BUDGET CONTROLLER
var budgetController = (function() {
  

})();

// UI CONTROLLER
var UIController = (function () {

    var DOMStrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputBtn: ".add__btn"
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            };            
        },

        getDOMStrings: function() {
            return DOMStrings;
        }
    };

})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMStrings();

    function ctrlAddItem() {
        // 1. Get the field input data
        var input = UICtrl.getInput();
        console.log(input);
        
        // 2. Add the item to the budget controller


        // 3. Add the item to the UI


        // 4. Display the budget to the UI
        
        
    };
    
    document.querySelector(inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);