// const { getCategoryDetails } = require('../saga/category.saga');
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
export const fetchPatients = () => ({
  type: GET_PATIENTS,
});

export const getSpecificPateient = (data) => ({
  type: GET_HISTORY,
  payload: data,
});
export const getSpecificPateientSuccess = (data) => ({
  type: GET_HISTORY_SUCCESS,
  payload: data,
});

export const fetchPatientsSuccess = (data) => ({
  type: GET_PATIENTS_SUCCESS,
  payload: data,
});

export const createPatient = (data) => ({
  type: CREATE_PATIENTS,
  payload: data,
});

export const createPatientRecord = (data) => ({
  type: UPDATE_HISTORY,
  payload: data,
});
