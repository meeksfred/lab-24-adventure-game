'use strict';

const angular = require('angular');
const ngTextAdventure = angular.module('ngTextAdventure');

ngTextAdventure.factory('mapService', ['$log', mapService]);

function mapService($log){
  $log.debug('init mapService');

  let service = {};

  service.mapData = {
    Entry: {
      desc: 'You just entered a creepy looking dungeon on Halloween, what are you doing stupid. Proceed down the stairs to begin.',
      up: null,
      down: null,
      left: null,
      right: 'BottomOfStairs',
    },
    BottomOfStairs: {
      desc: 'You made it to the base of the stairs, its dark and damp down here.',
      up: null,
      down: 'ClownHall',
      left: 'Entry',
      right: 'BoneHall',
    },
    BoneHall: {
      desc: 'This hallway has bones scattered everywhere. They might be human bones.',
      up: null,
      down: null,
      left: 'BottomOfStairs',
      right: 'Kitchen',
    },
    Kitchen: {
      desc: 'You just entered the kitchen, and as you see, its disgusting.',
      up: null,
      down: 'PigHall',
      left: 'BoneHall',
      right: 'KitchenCrawlSpace',
    },
    KitchenCrawlSpace: {
      desc: 'You found a crawlspace. There is a piece of chocolate on the floor which you eat. You gain 1 HP.',
      up: 'CrazyPortal',
      down: null,
      left: 'Kitchen',
      right: null,
    },
    ClownHall: {
      desc: 'This hallway is full of creepy clown posters, what is this place.',
      up: 'BottomOfStairs',
      down: 'WhiteRoom',
      left: null,
      right: null,
    },
    PigHall: {
      desc: 'Cages of snarling pigs and swinging light fixtures line this endless hallway',
      up: 'Kitchen',
      down: 'DarkRoom',
      left: null,
      right: null,
    },
    WhiteRoom: {
      desc: 'You enter an extremely bright and clean room, and the only thing there is a TV playing reruns of Americas Funniest Home Videos.',
      up: 'ClownHall',
      down: 'CrawlSpace',
      left: null,
      right: 'MirrorHall',
    },
    MirrorHall: {
      desc: 'The hall of a thousand mirrors, which direction are you moving?',
      up: null,
      down: null,
      left: 'WhiteRoom',
      right: 'DarkRoom',
    },
    DarkRoom: {
      desc: 'You make it to a room lit only by the outline of light around the three doors.',
      up: 'PigHall',
      down: 'ButcherRoom',
      left: 'MirrorHall',
      right: null,
    },
    CrawlSpace: {
      desc: 'You found a crawlspace. There is a magic spring in the corner, you take a sip and gain 1 HP.',
      up: 'WhiteRoom',
      down: null,
      left: 'CrazyPortal',
      right: null,
    },
    ButcherRoom: {
      desc: 'This looks like a butchers room...',
      up: 'DarkRoom',
      down: null,
      left: null,
      right: 'MannequinRoom',
    },
    MannequinRoom: {
      desc: 'There are mannequins everywhere, and some have human limbs! You hear people faintly screaming nearby.',
      up: null,
      down: null,
      left: 'ButcherRoom',
      right: 'HappyRoom',
    },
    CrazyPortal: {
      desc: 'You are in the 12th dimension.',
      up: null,
      down: 'CrawlSpace',
      left: null,
      right: 'KitchenCrawlSpace',
    },
    HappyRoom: {
      desc: 'You have found the dungeon sanctuary, congratulations, you survived',
      up: null,
      down: null,
      left: null,
      right: null,
    },
  };

  return service;
}
