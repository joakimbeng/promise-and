'use strict';
var test = require('ava');
var and = require('../src');
var LazyPromise = require('lazy-promise');

test('false && "hi"', function (assert) {
	assert.plan(1);
	return and(Promise.resolve(false), Promise.resolve('hi'))
		.then(function (actual) {
			var expected = false;
			assert.is(actual, expected);
		});
});

test('"hi" && "you"', function (assert) {
	assert.plan(1);
	return and(Promise.resolve('hi'), Promise.resolve('you'))
		.then(function (actual) {
			var expected = 'you';
			assert.is(actual, expected);
		});
});

test('non-promise values', function (assert) {
	assert.plan(1);
	return and('hi', false)
		.then(function (actual) {
			var expected = false;
			assert.is(actual, expected);
		});
});

test('it does not run then when not necessary', function (assert) {
	assert.plan(2);
	var called = 0;
	var lazy = new LazyPromise(function (resolve) {
		called++;
		resolve(true);
	});
	return and(0, lazy)
		.then(function (actual) {
			var expected = 0;
			assert.is(actual, expected);
			assert.is(0, called);
		});
});
