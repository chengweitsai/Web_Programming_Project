var express = require('express');
var app = express();

var router = express.Router();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var nunjucks = require('nunjucks');
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'nunjucks');
nunjucks.configure('views', {
  autoescape: true,
  express: app
});

router.get('/', function (req, res, next) {
  res.render('index.html', { title: 'Express' });
});

router.use('/api/query',function (req, res) {
  	res.json(req.query);
});

router.post('/api/body', function (req, res, next) {
	res.send(JSON.stringify(req.body));
	next();
})

router.get('/api/user/:id', function (req, res) {
	var list = [
		{ id: 1, name: "Joe", age: 18 },
		{ id: 2, name: "John", age: 22 }
	]

	res.json( (list[ req.params.id - 1]) );
});

app.use( express.static('/public') );

router.use(function (req, res) {
  res.sendStatus(404);
})

app.use('/', router);
app.listen(3000);