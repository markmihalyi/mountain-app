import "./styles.css";

import { FunctionComponent } from "preact";
import { IMountainListItemProps } from "./Types.js";

const MountainListItem: FunctionComponent<IMountainListItemProps> = ({
  id,
  name,
  location,
}) => {
  return (
    <a
      className="mountain-list-item list-group-item d-flex gap-2 align-items-center flex-wrap"
      href={`/mountains/${id}`}
    >
      <i className="bi bi-geo-alt-fill"></i>
      <h5 className="mb-0">{name}</h5>
      <h6 className="mb-0 fw-light">({location})</h6>
    </a>
  );
};

export default MountainListItem;
