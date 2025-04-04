import { IStoredMountain } from "../../common/providers/DataProvider/types.js";

export interface IMountainFromProps {
  action: "add" | "edit";
  mountain?: IStoredMountain;
}
