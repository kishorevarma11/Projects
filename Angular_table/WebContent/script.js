var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
    
    $scope.items = [
        {name: 'Datta', sub1: 60, sub2: 70, sub3: 80 },    
        {name: 'Hemasai', sub1: 53, sub2: 68, sub3:78},
        {name: 'Kishore', sub1: 73, sub2: 81, sub3: 89}
    ];
    
    $scope.getTotal = function(type) {
        var total = 0;
        angular.forEach($scope.items, function(el) {
            total += el[type];
        });
        return total;
    };
    
    
});