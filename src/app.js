const express = require('express');
const { greet } = require('./utils/helper');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ message: greet('World') });
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = app;