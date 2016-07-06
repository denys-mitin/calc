
var calculatorApp = angular.module('calculatorApp',[]);

calculatorApp.constant('displayInputSize', 10);

calculatorApp.controller('CalculatorController', ['$scope', 'keys', 'displayInputSize', function(scope, keys, displayInputSize) {
    scope.keys = keys;
    scope.displayInputSize = displayInputSize;
    scope.displayInput = '';
    scope.previous = '';
    scope.operationKey = '';
    console.log('scope: ' + scope);
    console.log('this: ' + this);

    scope.reset = function() {
        scope.displayInput = '';
    }

    scope.operation = function(key) {
        scope.previous = parseFloat(scope.displayInput);
        scope.reset();
        scope.operationKey = key;
    }

    scope.calculate = function() {
        var current = parseFloat(scope.displayInput);
        var result;
        switch (scope.operationKey) {
            case '+':
                result = scope.previous + current;
                break;
            case '-':
                result = scope.previous - current;
                break;
            case 'x':
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

    scope.keyFunc = function(key) {
        console.log('key: ' + key);
        if (isNaN(key)) {
            switch (key) {
                case 'c':
                    scope.reset();
                    break;
                case '=':
                    scope.calculate();
                    break;
                default:
                    scope.operation(key);
            }
        } else {
            if (scope.displayInput.length < scope.displayInputSize) {
                scope.displayInput += key;
            }
        }
        
    }
}]);