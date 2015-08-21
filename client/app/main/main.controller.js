'use strict';

angular.module('premierApp')
  .controller('MainCtrl', function($scope, $http, Data) {
   
    $scope.premTable = [];

    $scope.mikonPisteet = 0;
    $scope.freddenPisteet = 0;

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
 
    $scope.kommentti = "";
    
    $scope.freddenJoukkueet = [
    {
      teamName: "Manchester United FC",
      position: 1,
      points:0
    },
    {
      teamName: "Manchester City FC",
      position: 2,
      points:0
    },
    {
      teamName: "Chelsea FC",
      position: 3,
      points:0
    },
    {
      teamName: "Arsenal FC",
      position: 4,
      points:0
    },
    {
      teamName: "Liverpool FC",
      position: 5,
      points:0
    },
    {
      teamName: "Tottenham Hotspur FC",
      position: 6,
      points:0
    },
    {
      teamName: "Southampton FC",
      position: 7,
      points:0
    },
    {
      teamName: "Everton FC",
      position: 8,
      points:0
    },
    {
      teamName: "Stoke City FC",
      position: 9,
      points:0
    },
    {
      teamName: "Swansea City FC",
      position: 10,
      points:0
    },
    {
      teamName: "West Ham United FC",
      position: 11,
      points:0
    },
    {
      teamName: "Newcastle United FC",
      position: 12,
      points:0
    },
    {
      teamName: "Crystal Palace FC",
      position: 13,
      points:0
    },
    {
      teamName: "Leicester City FC",
      position: 14,
      points:0
    },
    {
      teamName: "Watford FC",
      position: 15,
      points:0
    },
    {
      teamName: "West Bromwich Albion FC",
      position: 16,
      points:0
    },
    {
      teamName: "Aston Villa FC",
      position: 17,
      points:0
    },
    {
      teamName: "Sunderland AFC",
      position: 18,
      points:0
    },
    {
      teamName: "AFC Bournemouth",
      position: 19,
      points:0
    },
    {
      teamName: "Norwich City FC",
      position: 20,
      points:0
    },

    ];

    $scope.mikonJoukkueet = [
    {
      teamName: "Manchester City FC",
      position: 1,
      points:0
    },
    {
      teamName: "Chelsea FC",
      position: 2,
      points:0
    },
    {
      teamName: "Manchester United FC",
      position: 3,
      points:0
    },
    {
      teamName: "Arsenal FC",
      position: 4,
      points:0
    },
    {
      teamName: "Liverpool FC",
      position: 5,
      points:0
    },
    {
      teamName: "Everton FC",
      position: 6,
      points:0
    },
    {
      teamName: "Swansea City FC",
      position: 7,
      points:0
    },
    {
      teamName: "Tottenham Hotspur FC",
      position: 8,
      points:0
    },
    {
      teamName: "Southampton FC",
      position: 9,
      points:0
    },
    {
      teamName: "Stoke City FC",
      position: 10,
      points:0
    },
    {
      teamName: "West Ham United FC",
      position: 11,
      points:0
    },
    {
      teamName: "Leicester City FC",
      position: 12,
      points:0
    },
    {
      teamName: "Crystal Palace FC",
      position: 13,
      points:0
    },
    {
      teamName: "Aston Villa FC",
      position: 14,
      points:0
    },
    {
      teamName: "Newcastle United FC",
      position: 15,
      points:0
    },
    {
      teamName: "West Bromwich Albion FC",
      position: 16,
      points:0
    },
    {
      teamName: "Watford FC",
      position: 17,
      points:0
    },
    {
      teamName: "Norwich City FC",
      position: 18,
      points:0
    },
    {
      teamName: "Sunderland AFC",
      position: 19,
      points:0
    },
    {
      teamName: "AFC Bournemouth",
      position: 20,
      points:0
    },

    ];

    $scope.annaJoukkueenSijaTallaHetkella = function(teamName){
          
       for(var j=0; j<$scope.premTable.length; j++){
           
        if(teamName===$scope.premTable[j].teamName){
          
          return j+1;
        }
       }
    };

    $scope.laskePisteet = function(taulukko){
      var pisteet = 0;
      var positio = 0;


      for( var i=0; i<taulukko.length; i++){
        positio = $scope.annaJoukkueenSijaTallaHetkella(taulukko[i].teamName);

       
        if(positio === taulukko[i].position){
          pisteet = pisteet +2;
          taulukko[i].points = 2;
        }
          if(positio - taulukko[i].position ===1){
          pisteet = pisteet +1;
           taulukko[i].points = 1;
        }
          if(positio - taulukko[i].position ===-1){
          pisteet = pisteet +1;
           taulukko[i].points = 1;
        }

      };
      
      return pisteet;
    };
    
   $scope.kumpiJohdossa = function(){
    if($scope.mikonPisteet>$scope.freddenPisteet){
      $scope.kommentti = "Tällä hetkellä Mikko on johdossa, MAHTAVAA!";
    };
    if($scope.mikonPisteet===$scope.freddenPisteet){
      $scope.kommentti = "Tällä hetkellä peli on tasan";
    };
    if($scope.mikonPisteet<$scope.freddenPisteet){
      $scope.kommentti = "Tällä hetkellä Fredde on johdossa, BUUUUUU!";
    };
   };

$scope.getPremTable = function(){
    var promise =  Data.getPremTable();

    promise.then(
          function(payload) { 
            
              $scope.premTable = payload.data.standing;
          $scope.mikonPisteet = $scope.laskePisteet($scope.mikonJoukkueet);
        $scope.freddenPisteet = $scope.laskePisteet($scope.freddenJoukkueet);
         $scope.kumpiJohdossa();

          
          });
   };
 $scope.getPremTable();
  
   
  });
