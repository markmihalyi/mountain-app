import { FunctionComponent } from "preact";
import Header from "../components/Header/index.js";
import MountainForm from "../components/MountainForm/index.js";

const NewMountain: FunctionComponent = () => {
  return (
    <main className="container my-4">
      <Header page="new-mountain" />
      <MountainForm action="add" />
    </main>
  );
};

export default NewMountain;
