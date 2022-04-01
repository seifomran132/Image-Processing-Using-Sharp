import express from 'express';
import images from './api/images';

const app = express();
const port = 3000;

app.use('/images', images);
app.use('/output', express.static('output'));

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Welcome, Access /image{parametars} to apply processing');
});

app.get('/images', (req: express.Request, res: express.Response): void => {
  res.send('Please enter valid width or height');
});

app.listen(port, (): void => {
  console.log('Server is working');
});

export default app;
