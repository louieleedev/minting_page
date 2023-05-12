import React from "react";
import Footer from "./components/Footer";
import MiniSeries from "./components/MiniSeries";
import OriginalEdition from "./components/OriginalEdition";

function Home() {
  return (
    <div className="home">
      <OriginalEdition />
      <MiniSeries />
      <Footer />
      {/*<React.Fragment>
        <section>
          <OriginalEdition />
        </section>
  </React.Fragment>*/}
    </div>
  );
}

export default Home;
