const mongoose = require('mongoose');
const db = () => {
    mongoose.connect(
        process.env.URI,
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
