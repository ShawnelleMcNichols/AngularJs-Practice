angular.module('login', [])
    .controller('AuthController', function ($scope, $window) {
        var username = $window.sessionStorage.getItem("username");
        var password = $window.sessionStorage.getItem("password");
        console.log(username);
        $scope.login = function () {
            $scope.dataLoading = true;
            if ($scope.username == username && $scope.password == password) {
                $window.location.href = 'home.html';
                $scope.username = "";
                $scope.password = "";
            } else {
                $scope.dataLoading = false;
                alert("Username or password is incorrect!");
            }
        }
        $scope.register = function () {
            $window.sessionStorage.setItem("username", $scope.username);
            $window.sessionStorage.setItem("password", $scope.password);
            $window.location.href = 'login.html';
            $scope.email = "";
            $scope.username = "";
            $scope.password = "";
        }

        $scope.logout = function (){
            $window.sessionStorage.removeItem("username");
            $window.sessionStorage.removeItem("password");
            $window.location.href = 'login.html';
        }
        $scope.get = function() {
            return username;
        }
    });