angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'http://quiz-api-pd-env.eba-c8hqjza9.us-west-2.elasticbeanstalk.com/';

    return service;
}]);