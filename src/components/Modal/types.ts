import { ModalType } from "../../common/providers/ModalProvider/types.js";

export interface IModalProps {
  type: ModalType;
  isOpen: boolean;
  title: string;
  message: string;
  action?: () => void;
  hideModal: () => void;
}
