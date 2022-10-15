import slice from "./slice";
import thunks from "./thunks";

export default {
  reducer: slice.reducer,
  ...thunks,
};
