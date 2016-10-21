'use strict';

require('./_move-history.scss');

const angular = require('angular');
const ngTextAdventure = angular.module('ngTextAdventure');

ngTextAdventure.component('moveHistory', {
  template: require('./move-history.html'),
  controller: 'MoveHistoryController',
  controllerAs: 'moveHistoryCtrl',
});

ngTextAdventure.controller('MoveHistoryController', ['$log', 'playerService', MoveHistoryController]);

function MoveHistoryController($log, playerService){
  $log.debug('init moveHistoryCtrl');
  this.history = playerService.history;
}
