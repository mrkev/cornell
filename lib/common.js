'use strict';
/* global require, console, process, module */

var chalk = require('chalk');

var fatal = function (nice_msg) {
  return function (err) {
    console.log();
    console.log(nice_msg);
    console.log(
      "Try updating to the latest version:\n ",
      chalk.bold("npm update -g cornell.\n"));
    console.log(
      "If that doesn't fix it, please post the following error in:\n ",
      chalk.underline("https://github.com/mrkev/cornell/issues\n"));
    console.trace(err);
    console.log();
    process.exit(1);
  };
};

var error = function (nice_msg) {
  return function () {
    console.log();
    console.log(nice_msg);
    console.log();
    process.exit(1);
  };
};

var log = function () {
  console.log.apply(this, arguments);
  return arguments[0];
};

var notifyUpdate = function () {
  require('update-notifier')({
    pkg : require('../package.json')
  }).notify();
};

var notifyVersion = function () {
  if (Number(process.version.match(/^v(\d+\.\d+)/)[1]) >= 6) return;
  console.log('running node version ' + process.version + '. Need at least 6.0.0.');
  process.exit(1);
}

var extend_strings = function () {
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
};

var filter_on = function(query) { return function (x) {
  return (!query) || x.toLowerCase().indexOf(query.toLowerCase()) > -1
}
}

const underline_on = (query) => (str) => {
  return str.replace(new RegExp(query, 'gi'), chalk.underline('$&'));
}

/** merges two arrays with objects determined by fid(obj) */
const merge_with_id = (a, b, fid) => {
  // make a map with a
  const a_map = a.reduce((acc, x) => Object.assign(acc, { [fid(x)]: x }), {});
  // add b in to the mix
  const b_map = b.reduce((acc, x) => Object.assign(acc, { [fid(x)]: x }), a_map);
  // return an array with all the values
  return Object.keys(b_map).map(id => b_map[id])
}

/** @return null | url to an object with "lattitude" and "longitude" */
const get_map_url = e => (e.latitude && e.longitude)
  ? `https://www.openstreetmap.org/?mlat=${e.latitude}&mlon=` +
  `${e.longitude}#map=17/${e.latitude}/${e.longitude}`
  : null

module.exports = {
  fatal,
  error,
  log,
  notifyUpdate,
  notifyVersion,
  extend_strings,
  filter_on,
  underline_on,
  merge_with_id,
  get_map_url,
};

