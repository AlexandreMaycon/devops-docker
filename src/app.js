const express = require('express');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});