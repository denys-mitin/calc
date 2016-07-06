
calculatorApp.directive('digitKey', function() {
    return {
        restrict: 'AE',
        scope: {
            key: '=key'
        },
        template: '<input type="button" value="{{key.label}}" ng-click="key.func(key.label)" />'
    };
});

calculatorApp.directive('funcKey', function() {
    return {
        restrict: 'AE',
        scope: {
            key: '=key'
        },
        template: '<input type="button" value="{{key.label}}" ng-click="key.func(key.label)" />'
    };
});