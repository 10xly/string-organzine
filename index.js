const a = require('the-letter-a'),
  e = require('the-letter-e'),
  g = require('the-letter-g'),
  i = require('letter-i'),
  n = require('the-letter-n'),
  o = require('the-letter-o'),
  r = require('the-letter-r'),
  z = require('letter-z')

const concatenater = require("concatenater")

const ORGANZINE = concatenater(o)
  .append(r)
  .append(g)
  .append(a)
  .append(n)
  .append(z)
  .append(i)
  .append(n)
  .append(e)
  .toString()

module.exports = ORGANZINE // expose the organzine
