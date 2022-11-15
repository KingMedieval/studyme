var express = require('express');
var router = express.Router();
const seedrandom = require('seedrandom');
const jade = require('jade')
//const question = require('../public/templates/mathctemp.json');
const { MongoClient } = require('mongodb');
const { MONGO_URI } = require("../../config.json");
const { shuffleArray } = require("../../src/components/functions/shuffleArray");
const client = new MongoClient(MONGO_URI);

//TODO:
//  make this part more efficient
//    less parsing db/maybe local cache?
//  param input validation for nosql/xss attack

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let qid = req.query.qid;
  let seed = req.query.seed;
  let i = 0;
  let vari = {};
  let qOrder = [];
  const rng = seedrandom(seed);

  await client.connect;
  const col = client.db("SAT").collection("Math")
  console.log("mongo connected");
  const numDoc = await col.countDocuments();
  for (let i = 1; i <= numDoc; i++ ) {
    qOrder.push(i);
  }
  qOrder = shuffleArray(qOrder, seed, 0);
  console.log(qOrder);

  const aggCursor = await col.aggregate([{ $match : { qid : `${qOrder[qid-1]}` }}]);
  for await (const aggGroup of aggCursor){
    aggRes = aggGroup;
  }
  let question = aggRes;
  for (const key in question.variables) {
    console.log(`${key}: ${question.variables[key]}`);
    if (question.variables[key].type === 'int') {
      Object.assign(vari, {
        [`${key}`]: Math.floor(rng() * (question.variables[key].max -
            question.variables[key].min + 1) + question.variables[key].min)});
    }
    else {
      Object.assign(vari, {
        [`${key}`]: rng() * (question.variables[key].max -
            question.variables[key].min + 1) + question.variables[key].min});
      Object.assign(vari, {
        [`${key}`]: vari[key].toFixed(question.variables[key].prec)});
    }
    i++;
  }
  Object.assign(question, {"max":numDoc});
  console.log(JSON.stringify(vari));

  res.send(jade.render(JSON.stringify(question), vari));
  //res.send(jade.renderFile('views/mathctemp.jade', vari));
  //res.send(JSON.stringify(question));
});

module.exports = router;
