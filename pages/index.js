import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import HtmlHead from "../components/general/HtmlHead";
import Base from "../components/structure/Base";
import PageHeading from "../components/headings/PageHeading";
import PageSubheading from "../components/headings/PageSubheading";
import PrimaryButton from "../components/buttons/PrimaryButton";
import CompanyCard from "../components/cards/CompanyCard";
import DefaultModal from "../components/modals/DefaultModal";
import AdvancedSearch from "../components/search/AdvancedSearch";
import { fetchLogos } from "../lib/api";
import CompanySearch from "../components/search/CompanySearch";

// Import the server URL from environment var
const serverUrl = process.env.SERVER_URL;

// List of the user projections
const userProjections = ["aapl", "fb", "mdb", "amzn", "lmnd"];

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <HtmlHead title="Projections" />
      <Base>
        <div className="grid grid-cols-2">
          <div>
            <PageHeading text={"Projections"} />
            <PageSubheading text={"See all the companies you analyse"} />
          </div>
          <div className="flex justify-end">
            <PrimaryButton
              label={"Add new"}
              onClick={() => setShowModal(true)}
            />
          </div>
        </div>

        <br />
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-6">
          {userProjections.map((projetction) => (
            <CompanyCard key={projetction} thicker={projetction} />
          ))}
        </div>
        <DefaultModal
          header={"Add a Projection"}
          content={<CompanySearch />}
          showModal={showModal}
          onClose={() => setShowModal(false)}
          onCancel={() => setShowModal(false)}
        />
      </Base>
    </>
  );
}
