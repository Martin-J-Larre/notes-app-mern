const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5001;

app.use('/', express.static(path.join(__dirname, '/public')))

app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`));