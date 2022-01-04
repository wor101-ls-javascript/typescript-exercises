import express from 'express';
import bodyParser from 'body-parser';
import { calculateBmi } from './bmiCalculator'
import { calculator } from './calculator'
import { calculateExercises } from './exerciseCalculator'

const app = express();

app.use(bodyParser.json())

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  let height = Number(req.query.height);
  let weight = Number(req.query.weight);
  
  try {
    const result = calculateBmi(height, weight)
    res.send(result)
  } catch(error) {
    res.send({error: "malformatted parameters"})
  }
})

app.post('/calculate', (req, res) => {
  const { value1, value2, op } = req.body

  const result = calculator(value1, value2, op);
  res.send(result);
})

app.post('/exercises', (req, res) => {
  console.log(req.body)

  const { daily_exercises, target} = req.body;
  const daily_exercise_hours: number[] = daily_exercises;
  const theTarget: number = target;

  try {
    const result = calculateExercises(daily_exercise_hours, theTarget);
    res.send(result);
  } catch(error) {
    res.send({ error: "malformatted parameters"});
  }


})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})