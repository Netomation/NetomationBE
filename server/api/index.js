const {app} =require('./controllers/index');
const {mongoose}=require('./models/index');
const user = require('./controllers/user')

user.init();

const host = '0.0.0.0', port = 27019;

app.listen(port, host, function () {
	console.log(`running at ${host}:${port}`);
});
