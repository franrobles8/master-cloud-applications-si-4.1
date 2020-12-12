const express = require('express');
const app = express();
const bookRouter = require('./router/bookRouter');
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/api/books', bookRouter);

app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`);
});