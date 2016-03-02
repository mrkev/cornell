"use strict";
/* global module */

var real_name_for = function (a) {
  return alias_checker[a.toUpperCase()];
};

var aliases = {
  "104West!"              : ["104", "104west"],
  "Amit Bhatia Libe Café" : ["Libe", "Libe cafe"],
  "Atrium Café"           : ["Atrium", "Atrium cafe"],
  "Bear Necessities"      : ["nasties"],
  "Bear's Den"            : ["Bears Den"],
  "Becker House Dining"   : ["Becker", "becker house"],
  "Big Red Barn"          : ["Big Red Barn"],
  "Bus Stop Bagels"       : ["Bus Stop Bagels"],
  "Café Jennie"           : ["Cafe Jennie", "Jennies"],
  "Carol's Café"          : ["Carols Cafe", "Carols", "Carol's"],
  "Cook House Dining"     : ["Cook", "cook house"],
  "Cornell Dairy Bar"     : ["Dairy Bar", "the dairy bar"],
  "Goldie's Café"         : ["Goldies Cafe", "Goldie's", "Goldie"],
  "Green Dragon"          : [],
  "Hot Dog Cart"          : ["Hot Dog Cart", "HotDog Cart"],
  "Ivy Room"              : [],
  "Jansen's Dining"       : ["Jansens Dining", "Bethe", "Bethe House", "Bethe House Dining"],
  "Jansen's Market"       : ["Jansens Market"],
  "Keeton House Dining"   : ["Keeton", "Keeton House", "William Keeton"],
  "Martha's Café"         : ["Marthas Cafe", "Marthas", "Martha's"],
  "Mattin's Café"         : ["Mattins Cafe", "Mattins", "Mattin's"],
  "North Star"            : [],
  "Okenshields"           : ["okies", "okens"],
  "Risley Dining Room"    : ["Risley", "Risley Dining"],
  "RPCC Marketplace"      : ["RPCC"],
  "Rose House Dining"     : ["Rose", "Rose House", "Flora", "Flora Rose"],
  "Rusty's"               : ["Rustys"],
  "Sweet Sensations"      : ["Sensations", "Sweets"],
  "Synapsis Café"         : ["Synapsis Cafe", "Synapsis"],
  "Trillium"              : [],
};

var alias_checker = (function () {
  return Object.keys(aliases).reduce(function (acc, key) {
    var possibilities = aliases[key].concat([key]);
    possibilities.forEach(function (p) {
      acc[p.toUpperCase()] = key;
    });
    return acc;
  },{});
})();

module.exports = {
  hallname : real_name_for
};


