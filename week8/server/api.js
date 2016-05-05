const Router = require('express').Router;
const router = new Router();

const profiles = {
	users: [
		{
			name:'Mark',
			age: '23',
			birth:'1992/6/7',
			school:'NTU',
		    picture:'http://lorempixel.com/492/518/people/7/'
		},

		{
			name:'Katharine',
			age: '23',
			birth:'1993/12/3',
			school: 'NCTU',
		    picture:'http://lorempixel.com/492/518/people/2/'
		},

		{
			name:'Marshall',
			age: '22',
			birth:'1994/1/15',
			school:'UCCU',
		    picture:'http://lorempixel.com/492/518/people/9/'
		}
	]
}

router.get('/users', function(req,res){
	res.json(profiles);
	console.log("client get users profiles");
});
router.get('/users/:username', function(req,res){
	const name = req.params.username;
	console.log(name);
	//res.json(profiles.users.find ( function(usr) {return usr.name===name; }));
	res.json(profiles.users[0]);
});

module.exports = router;
