
var calculatorApp = angular.module('calculatorApp',[]);

calculatorApp.constant('displayInputSize', 10);

calculatorApp.controller('CalculatorController', ['$scope', 'displayInputSize', function(scope, displayInputSize) {

    scope.displayInputSize = displayInputSize;
    scope.displayInput = '';
    scope.previous = '';
    scope.operationLabel = '';

    scope.reset = function() {
        scope.displayInput = '';
    }

    scope.calculate = function() {
        var current = parseFloat(scope.displayInput);
        var result;
        switch (scope.operationLabel) {
            case '+':
                result = scope.previous + current;
                break;
            case '-':
                result = scope.previous - current;
                break;
            case '*':
                result = scope.previous * current;
                break;
            case '/':
                result = scope.previous / current;
                break;
            default:
                result = 'unsupported operation';
        }
        scope.displayInput = result.toString();
    }
    
    scope.digit = function(label) {
        console.log('digit: ' + label);
        if (scope.displayInput.length < scope.displayInputSize) {
            scope.displayInput += label;
        }
    }

    scope.operation = function(label) {
        console.log('func: ' + label);
        switch (label) {
            case 'c':
                scope.reset();
                break;
            case '=':
                scope.calculate();
                break;
            default: // operation key pressed
                scope.previous = parseFloat(scope.displayInput);
                scope.reset();
                scope.operationLabel = label;
        }
    }
}]);