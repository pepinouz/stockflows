import HtmlHead from "../components/general/HtmlHead";
import Base from "../components/structure/Base";
import PageHeading from "../components/headings/PageHeading";
import ImageCard from "../components/cards/ImageCard";
import { useQuery } from "react-query";
import PageSubheading from "../components/headings/PageSubheading";

// Import the server URL from environment var
const serverUrl = process.env.SERVER_URL;

// List of the user projections
const userProjections = ["aapl", "fb", "mdb", "amzn", "lmnd"];

// Fetch the companies logos
const fetchLogos = async (thicker) => {
  let logosRes = await fetch("api/stock?request=logo&ticker=" + thicker);
  return logosRes.json();
};

// Fetch the companies info
const fetchCompany = async (thicker) => {
  let companyRes = await fetch("api/stock?request=company&ticker=" + thicker);
  return companyRes.json();
};

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

export default function Home() {
  return (
    <>
      <HtmlHead title="Projections" />
      <Base>
        <PageHeading text={"Projections"} />
        <PageSubheading text={"See all the companies you analyse"} />
        <br />
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-6">
          {userProjections.map((projetction) => (
            <CompanyCard thicker={projetction} />
          ))}
        </div>
      </Base>
    </>
  );
}
