const express = require('express');
const app = express();
const http = require('http');
const httpServer = http.createServer(app);
const cors = require('cors');
const db = require('./src/db/db');
require('dotenv').config();
db();
app.use(express.json());
const corsOptions = {
    exposedHeaders: 'x-auth',
};

app.use(cors(corsOptions));

app.use('/api/tests/rtest', require('./src/routes/rtest'));
const port = process.env.PORT || 8008;
httpServer.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
