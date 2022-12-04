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
export const initialState = {
  searchValue: '',
  sortValue: { name: 'name', asc: true },
  data: [],
  historicData: [],
  loading: false,
  error: null,
};

const PatientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PATIENTS:
    case CREATE_PATIENTS:
    case GET_HISTORY:
    case UPDATE_HISTORY:
      return {
        ...state,
        loading: true,
        historicData: [],
      };
    case GET_HISTORY_SUCCESS:
      return {
        ...state,
        historicData: action.payload,
        loading: false,
        error: null,
      };
    case GET_PATIENTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default PatientsReducer;
