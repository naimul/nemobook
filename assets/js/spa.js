angular.module('Platzi', []);
angular.module('Platzi').controller('BaseCtrl', ['$scope', function ($scope) {

  io.socket.get('/emoji', function(data){
    $scope.emojis = data;
    $scope.$apply();
  });

  io.socket.on('emoji', function(event){
    switch (event.verb) {
      case 'created':
        $scope.emojis.push(event.data);
        $scope.$apply();
          break;
    }
  });

  // $http.get('/emoji').then(function (response){
  //   $scope.emojis = response.data;
  // });

  // $scope.emojis = [
  //   {
  //     id: 1,
  //     text: '=)0'
  //   },
  //   {
  //     id: 2,
  //     text: ':-)'
  //   },
  //   {
  //     id: 3,
  //     text: '8)'
  //   },
  //   {
  //     id: 4,
  //     text: ':)'
  //   }
  // ];
}]);


