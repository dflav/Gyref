const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoute = require('./routes/auth');
const logs = require('./routes/logs');
const routines = require('./routes/routines');

dotenv.config({ path: './config/.env' });

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/user', authRoute);
app.use('/api/user/logs', logs);
app.use('/api/user/routines', routines);

app.listen(port, () => console.log(`Server started on port ${port}...`));
