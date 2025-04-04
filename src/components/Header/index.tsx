import { useEffect, useState } from "preact/hooks";
import { IHeaderButton, IHeaderProps } from "./types.js";

import { FunctionComponent } from "preact";
import { useLocation } from "preact-iso";
import useData from "../../common/hooks/useData.js";
import useModal from "../../common/hooks/useModal.js";

const Header: FunctionComponent<IHeaderProps> = ({
  page,
  cardView,
  changeCardView,
  showCardViewBtn,
  mountainId,
}) => {
  const [title, setTitle] = useState("‎");

  const { route } = useLocation();
  const { showModal, hideModal } = useModal();
  const { deleteMountain } = useData();

  useEffect(() => {
    switch (page) {
      case "home":
        setTitle("Mountains");
        break;
      case "new-mountain":
        setTitle("New mountain");
        break;
      case "mountain":
        setTitle("Mountain");
        break;
      case "edit-mountain":
        setTitle("Edit mountain");
        break;
      default:
        break;
    }
  }, [page]);

  const deleteAction = () => {
    deleteMountain(Number(mountainId));
    route("/");
    hideModal();
  };

  const buttons: Array<IHeaderButton> = [
    {
      page: "home",
      text: "New",
      icon: "plus-lg",
      color: "success",
      onClick: () => route("/mountains/new"),
    },
    {
      page: showCardViewBtn ? "home" : null,
      text: cardView ? "List view" : "Card view",
      icon: cardView ? "list-ul" : "card-list",
      color: "secondary",
      onClick: changeCardView,
    },
    {
      page: "new-mountain",
      text: "Back",
      icon: "arrow-left",
      color: "secondary",
      onClick: () => route("/"),
    },
    {
      page: "mountain",
      text: "Back",
      icon: "arrow-left",
      color: "secondary",
      onClick: () => route("/"),
    },
    {
      page: "mountain",
      text: "Edit",
      icon: "pencil",
      color: "primary",
      onClick: () => route(`/mountains/${mountainId}/edit`),
    },
    {
      page: "mountain",
      text: "Delete",
      icon: "trash",
      color: "danger",
      onClick: () =>
        showModal(
          "delete",
          "Delete mountain",
          "Are you sure?",
          () => deleteAction
        ),
    },
    {
      page: "edit-mountain",
      text: "Back",
      icon: "arrow-left",
      color: "secondary",
      onClick: () => route(`/mountains/${mountainId}`),
    },
  ];

  return (
    <header className="d-flex flex-column flex-sm-row align-items-center justify-content-sm-between row-gap-2 row-gap-sm-0 mb-4 pb-3 pb-sm-1 border-bottom border-secondary-subtle">
      <h1 className="display-5 mb-0 user-select-none">{title}</h1>
      <div className="my-auto d-flex gap-2">
        {buttons
          .filter((b) => b.page === page)
          .map((b, index) => (
            <button
              type="button"
              className={`btn btn-${b.color} d-flex gap-2`}
              onClick={b.onClick}
              key={index}
            >
              <i className={`bi bi-${b.icon}`}></i> {b.text}
            </button>
          ))}
      </div>
    </header>
  );
};

export default Header;
