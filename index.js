const express = require('express');
const app = express();
const http = require('http');
const httpServer = http.createServer(app);
const cors = require('cors');
require('dotenv').config();
app.use(express.json());
const corsOptions = {
    exposedHeaders: 'x-auth',
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('ok');
});

const port = process.env.PORT || 8008;
httpServer.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
