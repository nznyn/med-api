import express from 'express';
import bodyParser from 'body-parser';

import patientRoutes from './routes/patients.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/patients', patientRoutes);

app.get('/', (req, res) => res.send('.'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));