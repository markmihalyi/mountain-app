import { useContext } from "preact/hooks";
import ModalContext from "../providers/ModalProvider/index.js";
import { IModalContext } from "../providers/ModalProvider/types.js";

const useModal = () => {
  return useContext<IModalContext>(ModalContext);
};

export default useModal;
