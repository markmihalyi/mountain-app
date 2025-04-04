export interface IModalContext {
  showModal: (
    type: ModalType,
    title: string,
    message: string,
    action?: () => void
  ) => void;
  hideModal: () => void;
}

export type ModalType = "add" | "edit" | "delete";
