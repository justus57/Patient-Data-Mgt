const keyMirror = (keys) => {
  keys = Array.isArray(keys) ? keys : Object.keys(keys);
  let mirror = {};
  keys.map((v) => (mirror[v] = v));
  return mirror;
};

export const keys = keyMirror({
  GET_PATIENTS: null,
  GET_PATIENTS_SUCCESS: null,
  CREATE_PATIENTS: null,
  CREATE_PATIENTS_SUCCESS: null,
  GET_HISTORY: null,
  GET_HISTORY_SUCCESS: null,
  UPDATE_HISTORY: null,
  UPDATE_HISTORY_SUCCESS: null,
});
