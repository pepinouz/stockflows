import { useState } from "react";

function MultiLevelItem({ title, icon, items }) {
  const [visibility, setVisibility] = useState(false);
  const [dropDownClass, setDropDownClass] = useState("hidden py-2 space-y-2");

  const handleClick = () => {
    if (visibility === false) {
      setVisibility(true);
      setDropDownClass("visible py-2 space-y-2");
    } else {
      setVisibility(false);
      setDropDownClass("hidden py-2 space-y-2");
    }
  };

  return (
    <>
      <button
        type="button"
        className="flex items-center w-full p-2 text-base font-normal text-sidebar-items transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        onClick={() => handleClick()}
      >
        {icon}
        <span
          className="flex-1 ml-3 text-left whitespace-nowrap"
        >
          {title}
        </span>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <ul id="dropdown-example" className={dropDownClass}>
        {items}
      </ul>
    </>
  );
}

export default MultiLevelItem;