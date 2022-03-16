import 'reflect-metadata'; // this line allow us to use decorators on TypeORM
import express from 'express';

const PORT = 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
});
