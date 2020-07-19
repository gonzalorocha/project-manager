const express = require('express');
const app = express();
const connectDB = require('./config/db');

const user = require('./routes/user');
const auth = require('./routes/auth');
const project = require('./routes/project');
const task = require('./routes/task');


const PORT = process.env.PORT || 2000;

connectDB();

app.use(express.json({ extended: true })); //Like body-parser 

app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/project', project);
app.use('/api/task', task);

app.listen(PORT, () => {
    console.log(`Server listening in port ${PORT}`);
})



