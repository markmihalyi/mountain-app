import { useContext } from "preact/hooks";
import DataContext from "../providers/DataProvider/index.js";
import { IDataContext } from "../providers/DataProvider/types.js";

const useAuth = () => {
  return useContext<IDataContext>(DataContext);
};

export default useAuth;
