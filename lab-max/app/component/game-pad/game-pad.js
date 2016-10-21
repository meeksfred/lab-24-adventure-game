'use strict';

require('./_game-pad.scss');

const angular = require('angular');
const ngTextAdventure = angular.module('ngTextAdventure');

ngTextAdventure.component('gamePad', {
  template: require('./game-pad.html'),
  controller: 'GamePadController',
  controllerAs: 'gamePadCtrl',
});

ngTextAdventure.controller('GamePadController', ['$log', 'playerService', GamePadController]);

function GamePadController($log, playerService){
  $log.debug('init gamePadCtrl');

  this.directions = ['up', 'down', 'left', 'right'];
  this.moveDirection = this.directions[0];

  this.movePlayer = function(){
    playerService.movePlayer(this.moveDirection)
    .then( location => {
      $log.debug(`player has moved to location: ${location}`);
    })
    .catch( err => {
      $log.error(err);
    });
  };
}
