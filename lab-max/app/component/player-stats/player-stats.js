'use strict';

require('./_player-stats.scss');

const angular = require('angular');
const ngTextAdventure = angular.module('ngTextAdventure');

ngTextAdventure.component('playerStats', {
  template: require('./player-stats.html'),
  controller: 'PlayerStatsController',
  controllerAs: 'playerStatsCtrl',
});

ngTextAdventure.controller('PlayerStatsController', ['$log', 'playerService', PlayerStatsController]);

function PlayerStatsController($log, playerService){
  $log.debug('init playerStatsCtrl');
  this.player = playerService.player;
}
