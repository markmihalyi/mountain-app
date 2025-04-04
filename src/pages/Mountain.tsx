import { useEffect, useState } from "preact/hooks";

import { FunctionComponent } from "preact";
import useData from "../common/hooks/useData.js";
import { IStoredMountain } from "../common/providers/DataProvider/types.js";
import Header from "../components/Header/index.js";
import MountainCardXL from "../components/MountainCardXL/MountainCardXL.js";
import { IMountainPageProps } from "../types.js";

const Mountain: FunctionComponent<IMountainPageProps> = ({ id }) => {
  const [mountain, setMountain] = useState<IStoredMountain>(null);

  const { mountains, getMountain } = useData();

  useEffect(() => {
    const mountain = getMountain(Number(id));
    if (mountain) {
      setMountain(mountain);
    }
  }, [mountains]);

  return (
    <main className="container my-4 d-flex flex-column">
      <Header page="mountain" mountainId={id} />
      <div className="row">
        {mountain && <MountainCardXL mountain={mountain} />}
      </div>
    </main>
  );
};

export default Mountain;
