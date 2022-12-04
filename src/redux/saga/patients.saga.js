import { takeLatest, call, put } from 'redux-saga/effects';
import * as PatientsAction from '../actions/Patients.action';
import { Patients } from '../../services';
import { keys } from '../keys';

const {
  GET_PATIENTS,
  GET_PATIENTS_SUCCESS,
  CREATE_PATIENTS,
  CREATE_PATIENTS_SUCCESS,
  GET_HISTORY,
  GET_HISTORY_SUCCESS,
  UPDATE_HISTORY,
  UPDATE_HISTORY_SUCCESS,
} = keys;

export function* fetchPatientData() {
  yield takeLatest(GET_PATIENTS, getPatients);
}

export function* getPatients(action) {
  // @ts-ignore
  const data = yield call(Patients.getPatients);
  yield put(PatientsAction.fetchPatientsSuccess(data));
}

export function* createPatient() {
  yield takeLatest(CREATE_PATIENTS, sendPatientDetails);
}

export function* sendPatientDetails(action) {
  // @ts-ignore
  const data = yield call(Patients.createPatient, action.payload);
  yield put(PatientsAction.fetchPatients());
}

export function* fetchSpecificPatientData() {
  yield takeLatest(GET_HISTORY, getSpecificPatients);
}

export function* getSpecificPatients(action) {
  // @ts-ignore
  const data = yield call(Patients.getSpecificPatient, action.payload);
  yield put(PatientsAction.getSpecificPateientSuccess(data));
}

export function* createPatientRecord() {
  yield takeLatest(UPDATE_HISTORY, sendPatientRecordDetails);
}

export function* sendPatientRecordDetails(action) {
  // @ts-ignore
  const data = yield call(Patients.createPatientRecord, action.payload);
  yield put(PatientsAction.getSpecificPateient(action.payload._id));
}
