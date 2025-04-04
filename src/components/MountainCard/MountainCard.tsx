import "./styles.css";

import { FunctionComponent } from "preact";
import { IMountain } from "../../common/providers/DataProvider/types.js";
import { getDifficultyColor } from "../../utils/colorUtils.js";

const MountainCard: FunctionComponent<IMountain> = ({
  name,
  location,
  difficulty,
  elevation,
  imageUrl,
  description,
}) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={imageUrl} className="card-img-top" alt="mountain image" />
        <div className="card-body border-top border-1 border-dark-subtle">
          <div className="d-flex flex-wrap column-gap-1 align-content-center mb-2">
            <h5 className="mb-0">{name}</h5>
            <span>({location})</span>
          </div>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer d-flex gap-2">
          <span className="badge bg-secondary">{elevation} m</span>
          <span className={`badge bg-${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MountainCard;
