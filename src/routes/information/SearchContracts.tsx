import { Helmet } from "react-helmet-async";
import Section from "../../components/Section";
import ContractDataExplorer from "../../components/ContractDataExplorer";

export default function SearchContracts() {
  return (
    <>
      <Helmet>
        <title>Search Contracts - GovSpend</title>
        <meta name="description" content="Search and analyze federal contract awards data from SAM.gov" />
      </Helmet>

      <Section>
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">Contract Award History</h1>
            <p className="text-lg text-gray-600">
              Search and analyze federal contract awards. Filter by NAICS code, state, set-asides, and keywords to find relevant opportunities.
            </p>
          </div>

          <ContractDataExplorer />
        </div>
      </Section>
    </>
  );
}
