/*
 *   This is a simple sidebard, a logo can be inserted in the fist <a> tag
 *   You can then pass Sidebar items for the different pages of your app
 *   @Author Philippe Pepinouz
 *
 */

import MultiLevelItem from "./MultiLevelItem";
import SidebarItem from "./SidebarItem";

const sidebarItems = (
  <>
    <SidebarItem
      link={"/dashboard"}
      title={"Dashboard"}
      icon={
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          ></path>
        </svg>
      }
    />
    <MultiLevelItem
      title="E-commerce"
      icon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      }
      items={
        <>
          <li>
            <a
              href="#"
              className="flex items-center w-full p-2 text-base font-normal text-sidebar-items transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center w-full p-2 text-base font-normal text-sidebar-items transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11"
            >
              Billing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center w-full p-2 text-base font-normal text-sidebar-items transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11"
            >
              Invoice
            </a>
          </li>
        </>
      }
    />
  </>
);

function Sidebar() {
  return (
    <aside className="w-64 font-main" aria-label="Sidebar">
      <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800 h-screen">
        <a
          href="https://www.techguys.consulting/"
          className="flex pl-2.5 mb-5 w-20"
        >
          <img src="https://uploads-ssl.webflow.com/60a52a7dc2e7990e30d3dca2/60a531643c389b85a9807d60_Groupe%20(1)-p-2000.png" />
        </a>
        {sidebarItems}
      </div>
    </aside>
  );
}

export default Sidebar;