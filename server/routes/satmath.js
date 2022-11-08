var express = require('express');
var router = express.Router();
const sr = require('seedrandom');
const jade = require('jade')
const question = require('../public/templates/mathctemp.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let i = 0;
  let variables = [];
  console.log(`${question.mc.a}`);
  console.log(`${question.mc.b}`);
  console.log(`${question.mc.c}`);
  console.log(`${question.mc.d}`);

  for (const key in question.variables) {
    console.log(`${key}: ${question.variables[key]}`);
    if (question.variables[key].type === 'int') {
      variables[i] = Math.round(Math.random() * (question.variables[key].max - question.variables[key].min + 1) + question.variables[key].min);
    }
    else {
      variables[i] = Math.random() * (question.variables[key].max - question.variables[key].min + 1) + question.variables[key].min;
      variables[i] = variables[i].toFixed(question.variables[key].prec);
    }
    i++;
  }

  res.send(jade.renderFile('views/mathctemp.jade', {c1: variables[0], c2: variables[1], c3: variables[2]}));
  //res.send(JSON.stringify(question));
});

module.exports = router;
