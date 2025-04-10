import { useContext } from "preact/hooks";
import DataContext from "../providers/DataProvider/index.js";
import { IDataContext } from "../providers/DataProvider/types.js";

const useData = () => {
  return useContext<IDataContext>(DataContext);
};

export default useData;
