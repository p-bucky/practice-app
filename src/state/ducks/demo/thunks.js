import slice from "./slice";

const {
  actions: { setDemoText },
} = slice;

const setDemo = (payload) => (dispatch) => {
  dispatch(setDemoText(payload));
};

export default {
  setDemo,
};
