console.log("I Will create a server using Express moduule")
const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));

app.use(express.static('public'));

