import { createContext, FunctionComponent } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import { IDataContext, IMountain, IStoredMountain } from "./types.js";

const DataContext = createContext<IDataContext>({} as IDataContext);

const DataContextProvider: FunctionComponent = (props) => {
  const [mountains, setMountains] = useState<Array<IStoredMountain>>(null);

  const mountainId = useRef<number>(0);

  const loadMountains = () => {
    const mountains: Array<IStoredMountain> = JSON.parse(
      localStorage.getItem("mountains")
    );
    setMountains(mountains !== null ? mountains : []);
  };

  useEffect(loadMountains, []);

  useEffect(() => {
    if (mountains && mountains.length > 0) {
      const ids = mountains.map((m) => m.id).sort();
      mountainId.current = ids[ids.length - 1];
    }
  }, [mountains]);

  const saveMountains = (mountains: Array<IStoredMountain>) => {
    localStorage.setItem("mountains", JSON.stringify(mountains));
  };

  const getMountain = (id: number): IStoredMountain => {
    return mountains.filter((m) => m.id === id)[0];
  };

  const addMountain = (mountain: IMountain) => {
    setMountains((mountains) => {
      const newMountain = { id: mountainId.current + 1, ...mountain };
      mountainId.current++;

      const updatedMountains = [...mountains, newMountain];
      saveMountains(updatedMountains);

      return updatedMountains;
    });
  };

  const editMountain = (id: number, mountain: IMountain) => {
    setMountains((mountains) => {
      const updatedMountains = mountains.map((m) =>
        m.id === id ? { id, ...mountain } : m
      );
      saveMountains(updatedMountains);
      return updatedMountains;
    });
  };

  const deleteMountain = (id: number) => {
    setMountains((mountains) => {
      const updatedMountains = mountains.filter((m) => m.id !== id);
      saveMountains(updatedMountains);
      return updatedMountains;
    });
  };

  return (
    <DataContext.Provider
      value={{
        mountains,
        getMountain,
        addMountain,
        editMountain,
        deleteMountain,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
export { DataContextProvider };
