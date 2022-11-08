var express = require('express');
var router = express.Router();
const seedrandom = require('seedrandom');
const jade = require('jade')
const question = require('../public/templates/mathctemp.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let qid = req.query.qid;
  let seed = req.query.seed;
  let i = 0;
  let variables = [];
  let vari = {};
  const rng = seedrandom(seed);

  for (const key in question.variables) {
    console.log(`${key}: ${question.variables[key]}`);
    if (question.variables[key].type === 'int') {
      Object.assign(vari, {[`${key}`]: Math.round(rng() * (question.variables[key].max - question.variables[key].min + 1) + question.variables[key].min)})
    }
    else {
      Object.assign(vari, {[`${key}`]: rng() * (question.variables[key].max - question.variables[key].min + 1) + question.variables[key].min});
      Object.assign(vari, {[`${key}`]: vari[key].toFixed(question.variables[key].prec)});
    }
    i++;
  }
  console.log(JSON.stringify(vari));
  res.send(jade.renderFile('views/mathctemp.jade', vari));
  //res.send(JSON.stringify(question));
});

module.exports = router;
