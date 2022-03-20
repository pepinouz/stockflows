import SimpleList from "../list/SimpleList";
import SearchInput from "./SearchInput";

function AdvancedSearch({ results, onChange }) {
  return (
    <div className="flex flex-col items-center h-80">
      <SearchInput label={"Search a company"} onChange={onChange} placeholder="Search ..."/>
      <SimpleList elements={results}/>
    </div>
  );
}

export default AdvancedSearch