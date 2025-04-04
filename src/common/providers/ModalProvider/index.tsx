import { createContext, FunctionComponent } from "preact";
import { IModalContext, ModalType } from "./types.js";

import { useState } from "preact/hooks";
import Modal from "../../../components/Modal/index.js";

const ModalContext = createContext<IModalContext>({} as IModalContext);

const ModalContextProvider: FunctionComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<ModalType>(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [action, setAction] = useState<() => void>(null);

  const showModal = (
    type: ModalType,
    title: string,
    message: string,
    action: () => void
  ) => {
    setType(type);
    setTitle(title);
    setMessage(message);
    setAction(action);
    setIsOpen(true);
  };

  const hideModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {props.children}
      <Modal
        type={type}
        isOpen={isOpen}
        title={title}
        message={message}
        action={action}
        hideModal={hideModal}
      />
    </ModalContext.Provider>
  );
};

export default ModalContext;
export { ModalContextProvider };
