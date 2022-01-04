import express from 'express';
import diagnosesRouter from './routes/diagnoses'
import patientRouter from './routes/patients'

const cors = require('cors')
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors())


app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diagnoses', diagnosesRouter)

app.use('/api/patients', patientRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});