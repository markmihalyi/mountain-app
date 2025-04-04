import "./styles.css";

import { FunctionComponent } from "preact";
import { getModalColor } from "../../utils/colorUtils.js";
import { IModalProps } from "./types.js";

const Modal: FunctionComponent<IModalProps> = ({
  type,
  isOpen,
  title,
  message,
  action,
  hideModal,
}) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-backdrop"></div>
      <div
        className="modal d-block"
        tabIndex={-1}
        aria-labelledby="modalLabel"
        aria-hidden={!isOpen}
        onClick={hideModal}
      >
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div
              className={`modal-header bg-${getModalColor(type)} text-white`}
            >
              <h5 className="modal-title" id="modalLabel">
                {title}
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={hideModal}
              ></button>
            </div>
            <div className="modal-body my-2">
              <p className="mb-0">{message}</p>
            </div>
            {type === "delete" && (
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={hideModal}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={action}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
