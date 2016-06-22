
var  = angular.module('calculatorApp',[]);

calculatorApp.controller('CalculatorController', ['$scope', function($scope) {
    $scope.displayInput = '';
    $scope.keys = [ [ {name: '1', func: "typeNumber"} ] ];
    $scope.previous = '';
    $scope.operationName = '';

    $scope.typeNumber = function(number) {
        if ($scope.displayInput.length < 10) {
            $scope.displayInput += number;
        }
        console.log('$scope: ' + $scope);
        console.log('this' + this);
    }

    $scope.reset = function() {
        $scope.displayInput = '';
    }

    $scope.operation = function(name) {
        $scope.previous = parseFloat($scope.displayInput);
        $scope.reset();
        $scope.operationName = name;
    }

    $scope.calculate = function() {
        var current = parseFloat($scope.displayInput);
        var result;
        switch ($scope.operationName) {
            case 'add':
                result = $scope.previous + current;
                break;
            case 'substract':
                result = $scope.previous - current;
                break;
            case 'multiply':
                result = $scope.previous * current;
                break;
            case 'divide':
                result = $scope.previous / current;
                break;
            default:
                result = 'unsupported operation';
        }
        $scope.displayInput = result.toString();
    }
}]);