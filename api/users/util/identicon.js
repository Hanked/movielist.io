'use strict';

const randomColor = require('randomcolor');

function generateColorCode() {
  return randomColor({
    luminosity: 'light'
  })
  // identicon.org requires the # to be removed
  .substring(1);
}

function generateIdenticonUrl(username) {
  return `http://identicon.org/?t=${username}&s=128&c=${generateColorCode()}`
}

module.exports = generateIdenticonUrl;
