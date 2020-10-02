const app = require('./app');
const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.APP_PORT, () => {
  console.log(`App running on port: ${process.env.APP_PORT}`);
});
