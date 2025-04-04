import { useEffect, useState } from "preact/hooks";

import { FunctionComponent } from "preact";
import { useLocation } from "preact-iso";
import useData from "../../common/hooks/useData.js";
import useModal from "../../common/hooks/useModal.js";
import { IMountain } from "../../common/providers/DataProvider/types.js";
import { IMountainFromProps } from "./types.js";

const MountainForm: FunctionComponent<IMountainFromProps> = ({
  action,
  mountain,
}) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [difficulty, setDifficulty] = useState<string>(null);
  const [elevation, setElevation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const { addMountain, editMountain } = useData();
  const { showModal } = useModal();
  const { route } = useLocation();

  useEffect(() => {
    if (mountain) {
      setName(mountain.name);
      setLocation(mountain.location);
      setDifficulty(mountain.difficulty);
      setElevation(mountain.elevation.toString());
      setImageUrl(mountain.imageUrl);
      setDescription(mountain.description);
    }
  }, [mountain]);

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    if (
      name === "" ||
      location === "" ||
      elevation === "" ||
      imageUrl === "" ||
      description === ""
    ) {
      return;
    }

    if (
      difficulty !== "Easy" &&
      difficulty !== "Moderate" &&
      difficulty !== "Hard"
    ) {
      return;
    }

    if (isNaN(Number(elevation))) return;

    if (description.length > 184) return;

    const mountainData: IMountain = {
      name,
      location,
      difficulty,
      elevation: Number(elevation),
      imageUrl,
      description,
    };

    if (action === "add") {
      addMountain(mountainData);

      setName("");
      setLocation("");
      setDifficulty(null);
      setElevation("");
      setImageUrl("");
      setDescription("");

      route("/");
    }

    if (action === "edit") {
      editMountain(mountain.id, mountainData);

      route(`/mountains/${mountain.id}`);
    }

    showModal(
      action,
      "Success",
      action === "add"
        ? `A new mountain has been successfully added to your list.`
        : action === "edit" && "The mountain has been successfully updated."
    );
  };

  return (
    <form className="row" onSubmit={handleSubmit}>
      <div className="col-11 col-lg-10 col-xl-6 mx-auto p-4 border border-secondary border-opacity-25 rounded">
        <div className="row g-3 mb-2">
          <div className="col-md-6">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e: Event) =>
                setName((e.target as HTMLInputElement).value)
              }
              placeholder="Mount Everest"
              aria-describedby="name"
              required
            />
          </div>
          <div className="col-md-6">
            <label for="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="location"
              value={location}
              onChange={(e: Event) =>
                setLocation((e.target as HTMLInputElement).value)
              }
              aria-describedby="location"
              placeholder="Nepal/China"
              required
            />
          </div>
        </div>
        <div className="row g-3 mb-2">
          <div className="col-md-6">
            <label for="difficulty" className="form-label">
              Difficulty
            </label>
            <select
              id="difficulty"
              className="form-select"
              value={difficulty}
              onChange={(e: Event) =>
                setDifficulty((e.target as HTMLSelectElement).value)
              }
              required
            >
              <option selected>Choose...</option>
              <option>Easy</option>
              <option>Moderate</option>
              <option>Hard</option>
            </select>
          </div>
          <div className="col-md-6">
            <label for="elevation" className="form-label">
              Elevation (in meters)
            </label>
            <input
              type="number"
              className="form-control"
              id="elevation"
              value={elevation}
              onChange={(e: Event) =>
                setElevation((e.target as HTMLInputElement).value)
              }
              aria-describedby="elevation"
              placeholder="8849"
              min={1}
              required
            />
          </div>
        </div>
        <div className="mb-2">
          <label for="elevation" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            value={imageUrl}
            onChange={(e: Event) =>
              setImageUrl((e.target as HTMLInputElement).value)
            }
            aria-describedby="imageUrl"
            min={0}
            required
          />
        </div>
        <div className="mb-3">
          <label for="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows={3}
            maxLength={184}
            value={description}
            onChange={(e: Event) =>
              setDescription((e.target as HTMLTextAreaElement).value)
            }
            required
          ></textarea>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-success d-flex gap-2">
            {action === "add" && (
              <>
                <i className="bi bi-plus-lg"></i> Add mountain
              </>
            )}
            {action === "edit" && (
              <>
                <i className="bi bi-floppy"></i> Save changes
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default MountainForm;
