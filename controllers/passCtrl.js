//password check
app.controller('PasswordController', function ($scope, $http) {
    $http.get('db/pass.json')
        .then(function(response) {
            $scope.passTable = response.data;
        }, function errorCalback(response) {
            alert("coś poszło nie tak");
        });
    $scope.riddle1 = {};
    $scope.passValue = false;
    $scope.compare = function () {
        $scope.result1 = angular.equals($scope.passTable.pass1, $scope.riddleAnswer1);
        $scope.result2 = angular.equals($scope.passTable.pass2, $scope.riddleAnswer2);
        $scope.result3 = angular.equals($scope.passTable.pass3, $scope.riddleAnswer3);
        $scope.result4 = angular.equals($scope.passTable.pass4, $scope.riddleAnswer4);
        $scope.result5 = angular.equals($scope.passTable.pass5, $scope.riddleAnswer5);

        if ($scope.result1 === true) {
            $scope.passValue1 = true;
        }
        if ($scope.result2 === true) {
            $scope.passValue2 = true;
        }
        if ($scope.result3 === true) {
            $scope.passValue3 = true;
        }
        if ($scope.result4 === true) {
            $scope.passValue4 = true;
        }
        if ($scope.result5 === true) {
            $scope.passValue5 = true;
        }
    }
});