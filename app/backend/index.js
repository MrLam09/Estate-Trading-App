const express = require('express')
const app = express()
const cors = require('cors');

const port = process.env.PORT || 5000;
require('dotenv').config()

const mongoose = require('mongoose');

// Middleware
app.use(cors(
  {
    origin: 'http://localhost:8000',
    credentials: true,
  }
));
app.use(express.json());


// Routes 

const estateinfRoute = require('./src/inf/estate.router');
const userRoutes = require('./src/users/users.route');
const adminRoutes = require('./src/stats/admin.stats');

app.use('/api/estateinfs', estateinfRoute);
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use('/', (req, res) => {
    res.send('Real estate server is running!')
  })
  
}

main().then(() => console.log('MongoDB server connected')).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})