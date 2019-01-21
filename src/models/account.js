const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasksdb', {useNewUrlParser: true});

const accountSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    office: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    }
});

mongoose.model('account', accountSchema);
module.exports = mongoose.model('account');