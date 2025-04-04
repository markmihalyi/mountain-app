import { useEffect, useState } from "preact/hooks";

import { FunctionComponent } from "preact";
import useData from "../common/hooks/useData.js";
import Header from "../components/Header/index.js";
import MountainCard from "../components/MountainCard/MountainCard.js";
import MountainListItem from "../components/MountainListItem/index.js";

let previousCardView: boolean = null;

const Home: FunctionComponent = () => {
  const [cardView, setCardView] = useState<boolean>(null);

  const { mountains } = useData();

  const changeCardView = () => {
    setCardView((p) => {
      previousCardView = !p;
      return !p;
    });
  };

  useEffect(() => {
    setCardView(previousCardView ?? true);
  }, []);

  return (
    <main className="container my-4">
      <Header
        page="home"
        cardView={cardView}
        changeCardView={changeCardView}
        showCardViewBtn={mountains && mountains.length > 0}
      />

      {mountains !== null && (
        <>
          {mountains.length > 0 ? (
            <>
              {cardView ? (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                  {mountains.map((m) => (
                    <MountainCard key={m.id} {...m} />
                  ))}
                </div>
              ) : (
                <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 list-group align-items-center mx-0">
                  {mountains.map((m) => (
                    <MountainListItem
                      key={m.id}
                      id={m.id}
                      name={m.name}
                      location={m.location}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-4">
              <h3>No mountains added yet</h3>
              <p className="text-muted">
                Start building your adventure list by adding your first peak!
              </p>
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default Home;
