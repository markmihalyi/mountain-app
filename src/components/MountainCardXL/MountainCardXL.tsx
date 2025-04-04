import { FunctionComponent } from "preact";
import { getDifficultyColor } from "../../utils/colorUtils.js";
import { IMountainCardXLProps } from "./types.js";

const MountainCardXL: FunctionComponent<IMountainCardXLProps> = ({
  mountain: { name, location, difficulty, elevation, imageUrl, description },
}) => {
  return (
    <div className="card card-xl col-11 col-md-8 p-0 mx-auto">
      <img src={imageUrl} className="object-fit-contain" alt="mountain image" />
      <div className="card-body border-top border-1 border-dark-subtle">
        <div className="d-flex align-items-center flex-wrap column-gap-2 mb-3">
          <h2 className="display-6 fw-bold mb-0">{name}</h2>
          <h2 className="fw-light mb-0">({elevation} m)</h2>
        </div>
        <p className="h5 fw-light text-dark">
          <i className="bi bi-geo-alt"></i> Location:{" "}
          <span className="fw-semibold">{location}</span>
        </p>
        <p className="h5 fw-light text-dark">
          <i className="bi bi-signpost-2"></i> Difficulty:{" "}
          <span
            className={`fw-semibold text-${getDifficultyColor(difficulty)}`}
          >
            {difficulty}
          </span>
        </p>
        <p className="h5 fw-light text-dark mt-4 mb-1">Description:</p>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default MountainCardXL;
