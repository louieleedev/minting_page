import "./App.css";
import Home from "./Home";
import Terms_conditions from "./pages/Terms_conditions";
import License_agreement from "./pages/License_agreement";
import Legal_rights from "./pages/Legal_rights";
import Nft_agreeement from "./pages/Nft_agreeement";
import { Route, Routes } from "react-router-dom";
import "./font/font.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms_conditions" element={<Terms_conditions />} />
        <Route path="/license_agreement" element={<License_agreement />} />
        <Route path="/nft_agreeement" element={<Nft_agreeement />} />
        <Route path="/legal_rights" element={<Legal_rights />} />
        {/* <Route path="/page-name" element={<page-name />} /> */}
      </Routes>
    </div>
  );
}

export default App;
