const config = require("./src/config/config");
const connectDB = require("./src/config/db");
const app = require("./src/app");

const startServer = async () => {
    await connectDB();

    app.listen(config.PORT, () => {
        console.log(`Lockr server running on port ${config.PORT}`);
    });
};

startServer();
