import { Provider } from "react-redux";
import { store } from "../store/store";

const StoreProvider = (props) => {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
