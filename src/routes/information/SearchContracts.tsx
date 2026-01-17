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

      <Section title="Contract Award History" kicker="Market Intelligence">
        <div className="space-y-8">
          <p className="text-lg text-gray-600">
            Search and analyze federal contract awards. Filter by NAICS code, state, set-asides, and keywords to find relevant opportunities.
          </p>

          <ContractDataExplorer />
        </div>
      </Section>
    </>
  );
}