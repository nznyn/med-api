import { v4 as uuidv4 } from 'uuid';

let patients = [];

export const getPatients = (req, res) => {
    res.send(patients);
}
export const createPatient = (req, res) => {
    const patient = req.body;
    patients.push({ ...patient, id: uuidv4() });
    res.send(`Patient with the name ${patient.firstName + ` ` + patient.lastName} added to the database.`)
}
export const getPatient = (req, res) => {
    const { id } = req.params;
    const foundPatient = patients.find((patient) => patient.id === id);
    res.send(foundPatient);
}
export const deletePatient = (req, res) => {
    const { id } = req.params;
    patients = patients.filter((patient) => patient.id !== id);
    res.send(`Patient with the id ${id} deleted from the database.`);
}
export const updatePatient = (req, res) => {
    const { id } = req.params;
    const { age, treated } = req.body;

    const patient = patients.find((patient) => patient.id === id);

    if(age) patient.age = age;
    if(treated) patient.treated = treated;  
    
    res.send(`Patient with the id ${id} has been updated.`);
}