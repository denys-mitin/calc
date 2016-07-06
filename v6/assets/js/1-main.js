
var calculatorApp = angular.module('calculatorApp',[]);

calculatorApp.constant('displayInputSize', 10);

calculatorApp.controller('CalculatorController', ['$scope', 'displayInputSize', function(scope, displayInputSize) {

    scope.displayInputSize = displayInputSize;
    scope.displayInput = '';
    scope.previous = '';
    scope.operationKey = '';

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
    
    scope.digitKeyPressed = function(digit) {
        console.log('digit: ' + digit);
        if (scope.displayInput.length < scope.displayInputSize) {
            scope.displayInput += digit;
        }
    }

    scope.funcKeyPressed = function(func) {
        console.log('func: ' + func);
        switch (func) {
            case 'c':
                scope.reset();
                break;
            case '=':
                scope.calculate();
                break;
            default:
                scope.operation(func);
        }
    }

    scope.key1 = {label: '1', func: scope.digitKeyPressed};
    scope.key2 = {label: '2', func: scope.digitKeyPressed};
    scope.key3 = {label: '3', func: scope.digitKeyPressed};
    scope.key4 = {label: '4', func: scope.digitKeyPressed};
    scope.key5 = {label: '5', func: scope.digitKeyPressed};
    scope.key6 = {label: '6', func: scope.digitKeyPressed};
    scope.key7 = {label: '7', func: scope.digitKeyPressed};
    scope.key8 = {label: '8', func: scope.digitKeyPressed};
    scope.key9 = {label: '9', func: scope.digitKeyPressed};
    scope.key0 = {label: '0', func: scope.digitKeyPressed};

    scope.keyPlus = {label: '+', func: scope.funcKeyPressed};
    scope.keyMinus = {label: '-', func: scope.funcKeyPressed};
    scope.keyMultiply = {label: '*', func: scope.funcKeyPressed};
    scope.keyDivide = {label: '/', func: scope.funcKeyPressed};
    scope.keyEquals = {label: '=', func: scope.funcKeyPressed};
    scope.keyC = {label: 'c', func: scope.funcKeyPressed};
}]);