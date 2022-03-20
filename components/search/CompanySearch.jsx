import { useState } from "react";
import { useQuery } from "react-query";
import { fetchLogos } from "../../lib/api";
import AdvancedSearch from "./AdvancedSearch";

const fetchSearch = async (input) => {
  let searchRes = await fetch("api/stock?request=search&fragment=" + input);
  return searchRes.json();
};

const CompanySearch = () => {
  // Store and update the search input value
  const [searchInput, setSearchInput] = useState();
  // Store the search result list
  const [listElements, setElementsList] = useState([]);

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

  return (
    <div className="w-full flex justify-center">
      <div className="w-80">
        <AdvancedSearch
          onChange={(e) => setSearchInput(e.target.value)}
          results={listElements}
        />
      </div>
    </div>
  );
};

export default CompanySearch;
