const {app} =require('./controllers/index');
const {mongoose}=require('./models/index');
const user = require('./controllers/user')

user.init();

app.listen(8000, function () {
	console.log('running at localhost: 8000');
});
