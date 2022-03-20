import { useQuery } from "react-query";
import { fetchCompany, fetchLogos } from "../../lib/api";
import ImageCard from "./ImageCard";

// Create a Card company component from the image card component
const CompanyCard = ({ thicker }) => {
  const { data: logo, status: logoStatus } = useQuery(["logo", thicker], () =>
    fetchLogos(thicker)
  );
  const { data: company, status: companyStatus } = useQuery(
    ["company", thicker],
    () => fetchCompany(thicker)
  );
  console.log(logo);
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
  // Create a card description
  return (
    <>
      <ImageCard
        image={image}
        title={title}
        descritption={description}
        loading={loading}
      />
    </>
  );
};

export default CompanyCard;