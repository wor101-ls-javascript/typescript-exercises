import express from 'express'
import patientService from '../services/patientService';
import toNewPatient from '../utils';


const router = express.Router();

router.get('/', (_req, res) => {
//  res.send('testststsets')
  console.log('PAITIENTS REQUESTED')
  res.send(patientService.getPatientsNoSSN())
});

router.get('/:id', (req, res) => {
  console.log('SINGLE PATIENT REQUESTED')
  res.send(patientService.getSinglePatientNoSSN(req.params.id))
});

router.post('/', (req, res) => {
  console.log('ADD PATIENT');
  try {
    const newPatient = toNewPatient(req.body)
    patientService.addPatient(newPatient)
    res.send(newPatient)
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
})

router.post('/:id/entries', (req, res) => {
  console.log('ADD ENTRY')
  try {
    const newEntry = req.body
    console.log(newEntry)
    res.send(newEntry)
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
})

export default router

