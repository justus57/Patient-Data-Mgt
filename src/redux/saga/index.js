import { all, fork } from 'redux-saga/effects';

import {
  fetchPatientData,
  createPatient,
  fetchSpecificPatientData,
  createPatientRecord,
} from './patients.saga';

export default function* root() {
  yield all([
    fork(fetchPatientData),
    fork(createPatient),
    fork(fetchSpecificPatientData),
    fork(createPatientRecord),
  ]);
}
