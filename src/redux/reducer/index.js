import { combineReducers } from 'redux';
import PatientsReducer from './Patients.reducer';

const appReducer = combineReducers({
  Patients: PatientsReducer,
});

const root = (state, action) => appReducer(state, action);

export default root;
