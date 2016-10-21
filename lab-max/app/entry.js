'use strict';

require('./scss/main.scss');

const angular = require('angular');

angular.module('ngTextAdventure', []);

// services
require('./service/map-service.js');
require('./service/player-service.js');

//components
require('./component/game-pad/game-pad.js');
require('./component/player-stats/player-stats.js');
require('./component/move-history/move-history.js');
