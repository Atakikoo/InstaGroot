function searchController($scope, postService) {
  var url = self.location.href;
  var search = ""
  var i = 0;
  while (url[i++] != "#");
  while (url[i++] != "#");
  i -= 1;
  while (url[i++])
    search += url[i - 1];
  $scope.title = search;
  var dato = {};
  dato.search = search;
  postService.search(dato).then(
  function(res) {
    $scope.posts = res.data;
  }), function(res) {
    console.log("erreur" + res);
  }
}