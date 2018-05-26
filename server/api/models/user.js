
const { mongoose } = require('./index');

let userSchema = new mongoose.Schema({
    // clicked: {
    //     type: Boolean,
    //     required: false,
    // },
    first_name: {
        type: String,
        required: false,
    },
    // private_messages: [{
    //     content: {
    //         type: String,
    //         required: false
    //     },
    // }],
})

let User = mongoose.model('User', userSchema, 'users');
module.exports = {
    User
}