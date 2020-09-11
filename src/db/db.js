const mongoose = require('mongoose');
const db = () => {
    mongoose.connect(
        'mongodb://amin:abc1234@localhost:2017/eng',
        {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('success');
            }
        }
    );
};
module.exports = db;
