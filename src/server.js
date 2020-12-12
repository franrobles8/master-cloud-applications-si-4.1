const express = require('express');
const app = express();
const router = require('./router');
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`);
});