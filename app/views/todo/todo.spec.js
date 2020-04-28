'use strict';

describe('myApp.todo module', function() {

  beforeEach(module('myApp.views.todo'));

  describe('todo controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('TodoCtrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});
