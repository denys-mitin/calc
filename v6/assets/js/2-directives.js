
calculatorApp.directive('key', function() {
    return {
        restrict: 'AE',
        scope: {
            label: '@',
            func: '&'
        },
        template: '<input type="button" value="{{label}}" ng-click="func({label: label})" />'
    };
});