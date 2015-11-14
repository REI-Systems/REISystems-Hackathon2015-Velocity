describe("Testing this out", function(){
    it('should have tests', function(){
       expect(true).toBeTruthy();       
    });
});

describe("Assert Matchers", function() {
 it("Ensure Variable!= Null", function() {
    var a = 100;
    var b = a;

    expect(a).toBe(b);
    expect(a).not.toBe(null);
  });

    it("Comparing 2 sets of variables", function() {
      var test1 = {
        a: 1000,
        b: 2000
      };
      var test2 = {
        a: 1000,
        b: 2000
      };
      expect(test1).toEqual(test2);
    });
  });
// var myApp = angular.module('myApp',[]);
//myApp.controller('HelloWorldController', ['$scope', function($scope) {
//$scope.greeting = 'Hello World!';
//}]);
//
//
//describe("Hello World example", function() {
//
//beforeEach(module(‘myApp’));
//
//var HelloWorldController,
//scope;
//
//beforeEach(inject(function ($rootScope, $controller) {
//scope = $rootScope.$new();
//HelloWorldController = $controller('HelloWorldController', {
//$scope: scope
//});
//}));
//it('says hello world!', function () {
//expect(scope.greeting).toEqual("Hello world!”);
//                               
//});
//
//});