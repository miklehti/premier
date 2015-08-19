'use strict';

angular.module('premierApp')
  .factory('Data', function($http, $cookies, $q) {


    return {

   
      getPremTable: function() {

          var config = {headers: {
            'X-Auth-Token': 'e333138aa39548c3933e6a113f5f2ef5'
        }
    };
        return $http.get('http://api.football-data.org/alpha/soccerseasons/398/leagueTable', config)
        .then(function(res) {
          
          return res.data.standing;
        })
      },

    
    };
  });
