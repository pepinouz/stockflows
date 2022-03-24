import { useRef, useState } from "react";

import HtmlHead from "../components/general/HtmlHead";
import Base from "../components/structure/Base";
import PageHeading from "../components/headings/PageHeading";
import PageSubheading from "../components/headings/PageSubheading";
import PrimaryButton from "../components/buttons/PrimaryButton";
import CompanyCard from "../components/cards/CompanyCard";
import DefaultModal from "../components/modals/DefaultModal";
import CompanySearch from "../components/search/CompanySearch";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "react-query";

// List of the user projections
const userProjections = ["aapl", "fb", "mdb", "amzn", "lmnd"];

const fetchProjections = async (userId) => {
  let dbRes = await fetch(
    "api/db/projections?request=getProjections&userId=" + userId
  );
  return dbRes.json();
};

export default function Home() {
  // Store the state of the modal
  const [showModal, setShowModal] = useState(false);
  // Ref to pass to the CompanySearch compoenent for calling the clearSelectedCompany function
  const companySearchRef = useRef();
  // Use the useUser hook to get the Clerk.user object
  const user = useUser();
  const userId = user.id;

  // Get the user projections from the DB
  const { data: projections, status } = useQuery(["userId", userId], () =>
    fetchProjections(userId)
  );
  console.log(projections);

  // Check the status of the useQuery

  // Handle the closing of the modal
  const closeModal = () => {
    setShowModal(false);
    companySearchRef.current.clearCompanySearch();
  };

  const addProjection = async (e) => {
    await companySearchRef.current.userAddProjection(e);
    setShowModal(false);
  };

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
          {status != "success" ? (
            <div></div>
          ) : (
            projections.data.map((projection) => (
              <CompanyCard
                key={projection.thicker}
                thicker={projection.thicker}
              />
            ))
          )}
        </div>
        <DefaultModal
          header={"Add a Projection"}
          content={<CompanySearch ref={companySearchRef} />}
          showModal={showModal}
          onClose={() => closeModal()}
          onCancel={() => closeModal()}
          onOk={(e) => addProjection(e)}
          confirmLabel="Add Projection"
        />
      </Base>
    </>
  );
}
