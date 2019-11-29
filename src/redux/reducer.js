const INIT_STATE = {
  list: null,
  loading: false,
  error: ""
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "CARGAR":
      break;
    default:
      return state;
  }
  return state;
};

export default reducer;
