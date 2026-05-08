const dotenv = require("dotenv");
dotenv.config();

if (!process.env.PORT) {
    throw new Error("Port not defined");
}

if (!process.env.MONGO_URI) {
    throw new Error("MongoDB URI not defined");
}

const config = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
};

module.exports = config;