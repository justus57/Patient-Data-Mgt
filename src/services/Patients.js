import Axios from './AxiosHelper';

export default {
  getPatients: (data) => {
    return Axios.get('/allPatients', data).then((data) => data.data);
  },
  createPatient: (data) => {
    return Axios.post('/createPatient', data).then((data) => data.data);
  },
  getSpecificPatient: (data) => {
    return Axios.get('/getSpecificPatient', {
      params: { id: data },
    }).then((data) => data.data);
  },
  createPatientRecord: (data) => {
    return Axios.post('/updatePatientHistory', data).then((data) => data.data);
  },
};
