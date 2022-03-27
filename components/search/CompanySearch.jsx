import { useUser } from "@clerk/nextjs";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { useQuery } from "react-query";
import { fetchCompany, fetchLogos } from "../../lib/api";
import CompanyResume from "../cards/CompanyResume";
import AdvancedSearch from "./AdvancedSearch";

const fetchSearch = async (input) => {
  let searchRes = await fetch("api/stock?request=search&fragment=" + input);
  return searchRes.json();
};

const CompanySearch = forwardRef((props, ref) => {
  // Use the useUser hook to get the Clerk.user object
  const user = useUser();
  // Store and update the search input value
  const [searchInput, setSearchInput] = useState();
  // Store the search result list
  const [listElements, setElementsList] = useState([]);
  // Store the selected company ticker symbol
  const [selectedCompany, setSelectedCompany] = useState("");
  // Store selected company logo
  const [selectedLogo, setSelectedLogo] = useState();
  // Store company info
  const [selectedInfo, setSelectedInfo] = useState();

  // Create the list elements with the search results
  const createList = async (data) => {
    console.log(data);
    if (data === undefined) {
      return;
    }
    let elements = [];
    for (const element of data.request.slice(0, 3)) {
      let avatar = await fetchLogos(element.symbol);
      console.log("inside the loop", avatar);
      elements.push({
        avatar: avatar.request.url,
        title: element.symbol,
        description: element.name.slice(0, 50),
      });
    }
    setElementsList(elements);
  };

  // Fetch the API to get the corresponding search result depending on the input
  const { data, status } = useQuery(
    ["input", searchInput],
    () => fetchSearch(searchInput),
    {
      enabled: Boolean(searchInput),
      onSuccess: createList,
    }
  );

  // Run the following when a companys is selected
  const handleCompanySelection = async (e) => {
    console.log(e);
    let thicker = e.target.attributes.title.value;
    let image = e.target.attributes.avatar.value;
    console.log(image);
    // Set the selected company image logo
    setSelectedLogo(image);
    // Get the company info
    let company = await fetchCompany(thicker);
    setSelectedInfo(company.request);
    console.log(company);
    // Set the selected company thicker
    setSelectedCompany(thicker);
  };

  // Function in the imperative handle hook can be call from the parent
  useImperativeHandle(ref, () => ({
    clearCompanySearch() {
      console.log("Cancel company selection");
      setSelectedCompany("");
    },
    async userAddProjection(e) {
      e.preventDefault();
      // Check if there is a company selected
      if (selectedCompany != "") {
        // Create the DB objetc
        let body = {
          userId: user.id,
          thicker: selectedCompany,
        };
        let dbRes = await fetch("api/projections", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        let dbResData = await dbRes.json();
        console.log(dbResData);
      } else {
        alert("No company selected");
      }
    },
  }));

  return (
    <div className="w-full flex justify-center">
      {selectedCompany != "" ? (
        <CompanyResume
          title={selectedInfo.companyName}
          image={selectedLogo}
          description={selectedInfo.description}
          ceo={selectedInfo.CEO}
        />
      ) : (
        <div className="w-80">
          <AdvancedSearch
            onClick={(e) => handleCompanySelection(e)}
            onChange={(e) => setSearchInput(e.target.value)}
            results={listElements}
          />
        </div>
      )}
    </div>
  );
});

export default CompanySearch;
