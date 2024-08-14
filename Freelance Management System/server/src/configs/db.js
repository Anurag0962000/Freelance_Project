const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connect = async () => {
    try {
        // Ensure MONGODB_URI is defined
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined in the environment variables');
        }

        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        // Optionally, you could rethrow the error or handle it as needed
        throw error;
    }
};

module.exports = connect;
