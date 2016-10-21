'use strict';

require('./lib/test-setup.js');

const angular = require('angular');


describe('testing gamePadCtrl', function(){
  beforeEach( () => {
    angular.mock.module('ngTextAdventure');
    angular.mock.inject($controller => {
      this.gamePadCtrl = new $controller('GamePadController');
    });
  });

  describe('testing default properties and values', () => {
    it('directions should be an array with 4 values', () => {
      expect(this.gamePadCtrl.directions.length).toEqual(4);
      expect(Array.isArray(this.gamePadCtrl.directions)).toBe(true);
    });

    it('moveDirection should be the first value in directions', () => {
      expect(this.gamePadCtrl.moveDirection).toEqual('up');
    });
  });

  describe('testing #movePlayer()', () => {
    it('should return an updated player position in the game', () => {
      this.gamePadCtrl.movePlayer();
      let result = this.gamePadCtrl.moveDirection;
      expect(result).toEqual('up');
    });
  });
});
