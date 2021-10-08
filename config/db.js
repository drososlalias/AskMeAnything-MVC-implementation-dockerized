const mongoose = require('mongoose');

require('custom-env').env('localhost');

const connectDB = async () => {
    try {
        const db = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@softeng.w1wfi.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        //Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;
