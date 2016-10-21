'use strict';

const angular = require('angular');
const ngTextAdventure = angular.module('ngTextAdventure');

ngTextAdventure.factory('playerService', ['$q', '$log', 'mapService', playerService]);

function playerService($q, $log, mapService){
  $log.debug('init playerService');

  let service = {};
  let turn = 0;

  let player = service.player = {
    name: 'Ralph',
    location: 'Entry',
    hp: 10,
  };

  let history = service.history = [
    {
      turn: 0,
      desc: 'You just entered a creepy looking dungeon on Halloween, what are you doing stupid. Proceed down the stairs to begin.',
      location: 'Entry',
      hp: 10,
    },
  ];

  service.movePlayer = function(direction){
    return new $q((resolve, reject) => {
      turn++;
      let currentLocation = player.location;
      let newLocation = mapService.mapData[currentLocation][direction];
      if (!newLocation) {
        history.unshift({
          turn,
          location: player.location,
          desc: 'You hit a spiked wall, you lose health.',
          hp: --player.hp,
        });
        return reject('not a walkway or room');
      }

      if (newLocation === 'KitchenCrawlSpace' || newLocation === 'CrawlSpace'){
        ++player.hp;
      }

      history.unshift({
        turn,
        location: newLocation,
        desc: mapService.mapData[newLocation].desc,
        hp: player.hp,
      });
      console.log('history', history);
      player.location = newLocation;
      return resolve(player.location);
    });
  };

  return service;
}
