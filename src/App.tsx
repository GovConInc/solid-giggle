import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";


// Information Pages
import InformationSAM from "./routes/information/SAM";
import InformationCertification from "./routes/information/Certification";
import InformationBids from "./routes/information/Bids";
import InformationProposals from "./routes/information/Proposals";
import InformationVehicles from "./routes/information/Vehicles";
import SearchContracts from "./routes/information/SearchContracts";

// Inside your Routes:
<Route path="/brads-electrical" element={<BradsElectrical />} />

// Services Pages
import ServicesGSA from "./routes/services/GSA";
import ServicesPrograms from "./routes/services/Programs";
import ServicesCompliance from "./routes/services/Compliance";
import ServicesProposalWriting from "./routes/services/ProposalWriting";

// About Pages
import About from "./routes/About";
import AboutMethodology from "./routes/about/Methodology";
import BradsElectrical from "./routes/BradsElectrical";


// Contact
import Contact from "./routes/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        
        {/* Information Routes */}
        <Route path="/information" element={<InformationSAM />} />
        <Route path="/information/sam-dsbs-fema" element={<InformationSAM />} />
        <Route path="/information/certification-data" element={<InformationCertification />} />
        <Route path="/information/finding-bids" element={<InformationBids />} />
        <Route path="/information/writing-proposals" element={<InformationProposals />} />
        <Route path="/information/contract-vehicles" element={<InformationVehicles />} />
        <Route path="/information/search-contracts" element={<SearchContracts />} />
        

        {/* Services Routes */}
        <Route path="/services" element={<ServicesGSA />} />
        <Route path="/services/gsa-contractors" element={<ServicesGSA />} />
        <Route path="/services/programs" element={<ServicesPrograms />} />
        <Route path="/services/compliance-capture" element={<ServicesCompliance />} />
        <Route path="/services/proposal-writing" element={<ServicesProposalWriting />} />

        {/* About Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/about/methodology" element={<AboutMethodology />} />
        <Route path="/brads-electrical" element={<BradsElectrical />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />
        
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
