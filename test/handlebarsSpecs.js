var request = require('supertest');
var assert = require('assert');
var hbs = require('..');

describe('express-hbs', function() {

  describe('defaults', function() {
    var app;

    beforeEach(function() {
      var example = require('../app/app');
      app = example.create(hbs.create());
    });


    it('should render using default layout', function(done) {
      request(app)
        .get('/')
        .expect(/DEFAULT LAYOUT/, done);
    });

  });

  describe('instances', function() {
    it('should create isolated instances', function() {
      var hbs2 = hbs.create();
      var hbs3 = hbs.create();

      assert(hbs !== hbs2 && hbs !== hbs3 && hbs2 !== hbs3);
    });
  });
});
