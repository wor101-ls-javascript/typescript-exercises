import patients from '../../data/patients'
import { NewPatient, NoSSNPatient, Patient, Gender, Entry } from '../types'
import { v4 as uuidv4 } from 'uuid';


const getPatientsNoSSN = (): NoSSNPatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }: 
    {id: string, name: string, dateOfBirth: string, gender: Gender, occupation: string, entries: Entry[]}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
  }));
}

const getSinglePatientNoSSN = (id: string): NoSSNPatient | undefined => {
  const patient =  patients.find(patient => patient.id === id)

  if (patient) {
    return {
      id: patient.id,
      name: patient.name,
      dateOfBirth: patient.dateOfBirth,
      gender: patient.gender,
      occupation: patient.occupation,
      entries: patient.entries
    } 
  } else {
    return undefined
  }
}

const addPatient = (patient: NewPatient): Patient => {
  const id = uuidv4()

  const newPatient = {
    id: id,
    entries: [],
    ...patient,
    
  }
  
  return newPatient
}

// const addPatientEntry = (entry: unknown): Entry => {

// }

export default {
  getPatientsNoSSN,
  getSinglePatientNoSSN,
  addPatient
}
