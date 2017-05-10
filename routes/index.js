const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
	const john = {name : "Juan", age : 31, cool : true};
  //res.send('Hey! It works!');
  //res.json(req.query);
  res.render('hello')
});

router.get('/reverse/:name', (req, res) => {
	const reverse = [...req.params.name].reverse().join('');
	res.send(reverse);
})



module.exports = router;
