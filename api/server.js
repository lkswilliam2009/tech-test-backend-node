const app = require('./src/app');
const dotenv = require('dotenv');
dotenv.config({ debug: true });
const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log('Server running at port : ', port);
});