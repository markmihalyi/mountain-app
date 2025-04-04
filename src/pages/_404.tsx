import { FunctionComponent } from "preact";

const NotFound: FunctionComponent = () => {
  return (
    <main className="container m-auto d-flex flex-column align-items-center">
      <h1 className="display-1">404</h1>
      <h2>Peak not found! ⛰️</h2>
      <p>This trail seems to have vanished. Let’s get you back to basecamp.</p>
    </main>
  );
};

export default NotFound;
