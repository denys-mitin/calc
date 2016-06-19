
var myApp = angular.module('calculatorApp',[]);

myApp.controller('CalculatorController', ['$scope', function($scope) {
    $scope.displayInput = '';
    $scope.keys = [ [ {name: '1', func: "typeNumber"} ] ];
    $scope.previous = '';
    $scope.operationName = '';

    $scope.typeNumber = function(number) {
        $scope.displayInput += number;
    }

    $scope.reset = function() {
        $scope.displayInput = '';
    }

    $scope.operation = function(name) {
        console.log('operation');
        $scope.previous = parseFloat($scope.displayInput);
        $scope.reset();
        $scope.operationName = name;
    }

    $scope.calculate = function() {
        console.log('calculate');
        var current = parseFloat($scope.displayInput);
        console.log('calculate2');
        var result;
        switch ($scope.operationName) {
            case 'add':
                result = previous + current;
                break;
            case 'substract':
                result = previous - current;
                break;
            case 'multiply':
                result = previous * current;
                break;
            case 'divide':
                result = previous / current;
                break;
            default:
                result = 'unsupported operation';
        }
        $scope.displayInput = result;
    }
}]);