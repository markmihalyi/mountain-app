import { FunctionComponent } from "preact";
import { useState } from "preact/compat";
import { useEffect } from "preact/hooks";
import useData from "../common/hooks/useData.js";
import { IStoredMountain } from "../common/providers/DataProvider/types.js";
import Header from "../components/Header/index.js";
import MountainForm from "../components/MountainForm/index.js";
import { IMountainPageProps } from "../types.js";

const EditMountain: FunctionComponent<IMountainPageProps> = ({ id }) => {
  const [mountain, setMountain] = useState<IStoredMountain>(null);

  const { mountains, getMountain } = useData();

  useEffect(() => {
    const mountain = getMountain(Number(id));
    if (mountain) {
      setMountain(mountain);
    }
  }, [mountains]);

  return (
    <main className="container my-4">
      <Header page="edit-mountain" mountainId={id} />
      <MountainForm action="edit" mountain={mountain} />
    </main>
  );
};

export default EditMountain;
