
//password check
app.controller('PasswordController', ['$scope', function($scope){
    $scope.riddle1 = {};
    $scope.pass1 = "urban exploration";
    $scope.pass2 = "murder";
    $scope.pass3 = "maska";
    $scope.passValue = false;
    $scope.compare = function () {
        $scope.result1 = angular.equals($scope.pass1, $scope.riddleAnswer1);
        $scope.result2 = angular.equals($scope.pass2, $scope.riddleAnswer2);
        $scope.result3 = angular.equals($scope.pass3, $scope.riddleAnswer3);

        if ($scope.result1 === true){
            $scope.passValue1 = true;
        }
        if ($scope.result2 === true){
            $scope.passValue2 = true;
        }
        if ($scope.result3 === true){
            $scope.passValue3 = true;
        }

    }
}]);