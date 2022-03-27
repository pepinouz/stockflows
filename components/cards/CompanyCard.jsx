import { useState } from "react";
import { useQuery } from "react-query";
import { fetchCompany, fetchLogos } from "../../lib/api";
import DeleteModal from "../modals/DeleteModal";
import ImageCard from "./ImageCard";

// Create a Card company component from the image card component
const CompanyCard = ({ thicker, projectionId, dropDownItemClick }) => {

  // Fetch the companie Logo
  const { data: logo, status: logoStatus } = useQuery(["logo", thicker], () =>
    fetchLogos(thicker)
  );
  // Fetch the companie Info
  const { data: company, status: companyStatus } = useQuery(
    ["company", thicker],
    () => fetchCompany(thicker)
  );
  let image;
  let title;
  let description;
  let loading;
  if (companyStatus === "loading" || logoStatus === "loading") {
    loading = true;
  } else if (companyStatus === "success") {
    image = logo.request.url;
    title = company.request.companyName;
    description = company.request.symbol + " - " + company.request.industry;
    loading = false;
  }

  return (
    <>
      <ImageCard
        image={image}
        title={title}
        descritption={description}
        loading={loading}
        dropDownItems={[
          { title: "Delete", action: "delete", id: projectionId },
        ]}
        dropDownItemClick={dropDownItemClick}
      />
    </>
  );
};

export default CompanyCard;
