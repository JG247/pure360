angular.module('mailApp', ['ngRoute'])
.config(function($routeProvider) {
 
  $routeProvider
    .when('/:emailId', {

    })
    .otherwise({
      redirectTo:'/'
    });
})
.controller('Controller', ['$scope', '$routeParams', 'MailDataService', function($scope, $routeParams, MailDataService) {

  var vm = this;
  vm.getEmail = getEmail;
  vm.emailHtml = false;

  MailDataService.getEmails().then(function success(res){
      vm.emails = res.data.collection.items;
  }, function error(res){
      // error
  })

  function getEmail(id){
    //                                        ES6    success(res) =>
    MailDataService.getEmailDetail(id).then(function success(res){
        vm.emailId = res.data.id;
        vm.currentEmail = res;
        $('#emailHtml').empty();
        $('#emailHtml').append(res.data.body.html)
        return res;
    }, function error(res){
        console.log(res);
        return res;
    })  
  }


}])
.directive('myTemplate', function() {
    return {
        scope: false,
        // ES6 template: `<h1> test temlate string </h1>`,
        templateUrl: "mail-template.html",
        controller: "Controller",
        controllerAs: "vm"
    }
})
.service('MailDataService', function($q, $http){
    var data = {
        getEmails: getEmails,
        getEmailDetail: getEmailDetail
    }
    return data;    
    //   ES6 getEmails() =>
    function getEmails() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'emails.json'
        }).then(function success(res){
            return deferred.resolve(res);
        }, function error(res){
            return deferred.reject(res);
        });
        return deferred.promise;
    }

    function getEmailDetail(id) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'email-' + id + '.json'
            //    ES6    success(res) =>
        }).then(function success(res){
            return deferred.resolve(res);
        }, function error(res){
            return deferred.reject(res);
        });
        return deferred.promise;        
    }
})